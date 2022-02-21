# 브라우저

## 1. What happens when type google ?

### 1.1 DNS 레코드 조회 1 : 캐시로부터 IP 찾아오기

도메인 입력 시, 실제 주소에 해당하는 IP 주소를 찾아옴

::: tip DNS?  
Domain Name System의 준말임
모든 Domain에는 단일 IP가 걸려있는데,
이러한 매핑정보를 관리하는 시스템임
:::

Domain to IP는 단순히 한 곳에만 보관되는 정보는 아니고
브라우저, 해당 PC, 라우터 캐시, ISP 캐시 순으로 확인함

::: tip 관리포인트가 4곳이라고? 
ㅇㅇ 이렇게 해서 생기는 단점보다는 장점이 중요
"네트워크 트래픽을 규제하고 데이터 전송 시간을 개선"
::: 

### 1.2 DNS 레코드 조회 2 : DNS 서버 재귀 검색

도메인에 대응하는 IP 찾아 올때까지 여러 DNS 서버를 Lookup

1) ".com"
2) "google.com"
3) "XXX.google.com"

### 1.3 브라우저의 HTTP Request
- Method: GET
- HTTP 프로토콜 기반의 데이터 패킷 송/수신 (TCP 위에서 연결)

::: warning 모든 HTTP 요청이 가능한 겁니까?
아니지비! 같은 하늘 아래 용이 두마리는 존재할 수 없지비, "요청의 출처가 동일해야 함"

https://developer.mozilla.org/ko/docs/Web/HTTP/CORS  
:::

### 1.4 서버로 부터의 HTTP Response
- JSON, XML, HTML 

### 1.5 브라우저 엔진의 HTML 렌더링 
응답으로 문서가 잘 왔다면, 브라우저에서 화면에 문서를 그림, 대표적으로 아래의 처리가 진행됨  
 - HTML 마크 업에 대한 돔트리
 - CSS 스타일 규칙 구성
 - 자바스크립트 엔진이 js 코드에 대한 실행 컨텍스트 생성

자세한 내용은 아래의 브라우저 동작 과정을 참고하자!

## 2. 브라우저 기본 구조와 동작과정

### 기본구조

![](https://imgur.com/gHohduK.png)

### 동작 1. 통신
말그대로 통신하여, 브라우저에 띄울 문서를 불러옴

### 동작 2. 렌더링 엔진

#### 동작 2.1 파싱
문서를 파싱하여 렌더 트리를 만들어낸다.
이에 대한 화면 배치 및 그리기를 통해 화면에 표시한다
 - 1) HTML 파싱하여 'DOM Tree' 구축
 - .2 CSS(스타일 시트) 파싱하여 '스타일 규칙(CSSOM)' 구축 
 - 2.1.3 DOM Tree와 스타일 규칙이 Attach되어 렌더 트리(형상 트리) 구축

##### Display None이 처리되는 방식
렌더 트리에서 누락된다!!
왜? CSS 스타일 규칙에서, 보이지 말라고 명시했으니까!!!
(이와는 다르게  visibility:hidden은 안보이는 건 맞는데, 레이아웃에서 지 공간을 차지하게 됨)

::: tip 파싱이 뭔데?  
요약하자면, 문서를 브라우저가 이해할 수 있는 구조로 변환하는 것
문서가 이해할 수 있는 구조는 보통 '트리 구조'이며, 이를 문법트리(Synctax Tree)라고도 한다.
(보통이라함은 크롬, 파폭, 사파리, Edge 등등)

가령, 4+5-1을 트리로 표현하면?
![](https://imgur.com/t75idwi.png)

이런식으로 브라우저가 이해할 수 있는 각 문법 노드 구조로 변환하는 것이 파싱이다.
:::

#### 동작 2.2 그래서 자바스크립트는?

자바스크립트 엔진을 통해서 해석된다.

[여기서 누군가 잘 정리해놓았다.](https://slim8020.github.io/2021/05/12/web_browser_exec/)

HTML 태그를 트리화하다가, Script를 만나면 자바스크립트 해석기한테 소스를 넘기면 걔가 해석함.
뿐만 아니라, 아래 3번의 배치 및 페인팅이 끝나고 난 뒤에도 해석될 액션이 있으면, 수행됨.

자세한 건 자바스크립트의 실행컨텍스트에 대해서 알아보자!

::: tip 자바스크립트 엔진?  

크롬 - V8 (오픈 소스, 구글이 개발)  
사파리 - 웹킷 (오픈 소스, 애플이 개발)  
스파이더몽키 - 파이어폭스 (최초의 자바스크립트 엔진)  
차크라 - 마이크로스프트 엣지
(문서 작성일 기준)
:::

### 동작 3. 배치(레이아웃) 및  페인팅

렌더 트리의 목적에 맞게, 각 요소의 구체적인 위치와 크기를 연산해낸다.
결과적으로 이를 브라우저에 픽셀을 렌더링하는 페인팅 과정을 거치게 된다.

요새는 Renderer Layer가 2개 이상일 수 있으며, 그 경우에는 Composite 단계 발생

#### 동작 3.1 Reflow & Repainting

당연히, 배치와 페인팅이 다시 일어나는 현상이겠지.. 보통 변경이 감지되었을 때 발생하는거고.

::: tip 변경의 종류를 나열해볼까
- 윈도우 리사이징 (뷰포트 변화는 Global Layout에 영향)
- 폰트의 변화 (height계산에 영향을 주므로 Global Layout에 영향)
- 스타일 추가 또는 제거
- 내용 변화 (인풋박스에 텍스트 입력 등..)
- :hover와 같은 CSS Pseudo Class
- (CSS: The Definitive Guide: The Definitive Guide 55p에서, hover할 시 나타나는 변화로 인한 우려가 생긴다는 의미인 듯 합니다.)
- 클래스 Attribute의 동적 변화
- JS를 통한 DOM 동적 변화
- 엘리먼트에 대한 offsetWidth / offsetHeight (화면에서 보여지는 좌표) 계산시
- 스타일 Attribute 동적변화
:::


#### 3.2 Reflow & Repainting 피하기

- 최대한 DOM 구조 상 말단 노드에만 클래스를 사용 (리플로우의 영향을 최소화 = 수행 비용 최소화)  
- 인라인 스타일 자제 (인라인 스타일은 리플로우가 수차례 발생, 클래스 사용 권장)  
- 애니메이션은 positon을 absolute와 fixed로 (주변 레이아웃 영향 X)
- 퀄리티와 퍼포먼스를 타협 (애니메이션 계산, 페이지 Reflow에 대한 코스트를 확인할 것)
- 테이블로 구성된 레이아웃 자제 (작은 변화도 테이블 전체 노드가 리플로우 발생)
- CSS에서의 JS표현식 자제 (문서중 일부가 Reflow될 때마다 표현식이 다시 계산되기 때문)
- JS를 통한 스타일 변화는 최대한 Group화 
- CSS 하위 선택자는 필요한 만큼만 쓰자. 
  - 재계산시 CSS Rule에 따라 오른쪽 -> 좌쪽으로 매치시킬 Rule이 없거나 잘못된 Rule이 튀어나올 때까지 계속 매칭함..
- 일부 속성과 메서드는 자주 사용할 때 캐싱하자. (사용한다는 이유만으로도 리플로우가 발생하는 속성과 메서드가 있기 때문)
  - position: relative; 주의!
  - 일반적인 경우: Box model → Normal flow
  - position:absolute or fixed: Box model → Out of flow(Positioning)
  - position:relative: Box model → Normal flow → Positioning

## 3. WEB Storage
브라우저가 쿠키보다 직관적으로 사용하는 방법 (key,value 쌍으로)

- localStorage : 영구적
- sessionStorage: 반영구적(브라우저 닫히면 ㅃㅃ)

#### 배경: Session&Cookie
서버와 클라이언트는 HTTP 프로토콜을 사용하므로, 매번 같은 사람인지 확인해야함.
이를 보완하려고 사용함.

- 세션
  - 서버 자원 사용 ID만 쿠키로 저장됨
  - 로그인에 사용
- 쿠키
  - 브라우저 자원 사용
  - 장바구니, 아디 비번 저장, 자동로그인, 팝업 등
  

## 출처

[자세한 정리](https://d2.naver.com/helloworld/59361)  
[간략한 정리](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)  
[렌더링 트리 생성, 레이아웃 및 페인트](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=ko)  
[when type google in the browser and enter keypress](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)  