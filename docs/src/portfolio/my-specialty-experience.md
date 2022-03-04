# 주요 프로젝트

아래 기술한 주요 프로젝트는 저의 Front-end 개발 기여도가 80% 이상인 것들입니다.    
최신순으로 나열하여 작성하였습니다.

## 1. Workbench 개발 (SVG 기반 플로우차트 제작도구)

- 고객이 시작과 끝 노드가 있는 Flowchart를 만들 수 있도록 그래프 에디터를 제공
- 생성된 Flowchart 정보는 Back-end가 재가공하여 SMS 발송, 연락처 정보 갱신 등의 수행 스케줄로 등록됨
- 다시말해, 고객이 보유한 연락처의 정보에 따라 조건부(성별,나이,시간 등)로 메시징을 자동화할 수 있는 기능
- Flowchart 구조를 위해 그래프 자료구조를 응용

::: details 화면 예시
![https://imgur.com/NlHPfmB.png](https://imgur.com/NlHPfmB.png)
:::

#### 진행기간 및 회사, 인력구성
- 2020.09 ~ 현재 (16개월), 트럼피아
- 디자이너 1, 퍼블리셔 1, 기획 1, <b>FE 1</b>, BE 2

#### 기술 스택
Vue.js, Vuex, ES5, ExpressJS, CSS3, HTML5

#### 주요내용
- 시작과 끝 노드가 있는 Flowchart를 고객이 만들도록 에디터를 제공합니다.
- 고객에 의해 생성된 Flowchart 정보는 Back-end가 재가공하여 SMS 발송, 연락처 정보 갱신 등의 수행 스케줄로 등록합니다.
- Graph 자료구조를 응용하였습니다.

#### 본인이 기여한 점
- 1번의 메이저 버전, 3번의 마이너 버전 패치에 기여
- 기획서 분석 (요구사항에 제시된 기능을 보고 질문하며, 정리 및 정의)
- 외부 모듈(mxGraph) 도입 및 기본 렌더링 로직 커스터마이징(Editor/Preview/Report)
- 응용 렌더링 로직 개발 (Undo/Redo, Copy&Paste, 정렬, 템플릿, Zoom 오토 포커싱)
- 스타일 재지정 (선의 색깔, 각 기호의 디자인)
- 사용자 이벤트 핸들링 (SVG 노드 생성/수정/조회/삭제에 관여하는 기능)
- REST API 규격 논의 (UI의 최종 Output 데이터는 XML 형식으로 결정, API가 지원해야하는 리소스 범위 산정)
- REST API 연동 (리소스 CRUD 로직 구현)
- 각종 컴포넌트 구현 (요일 박스, 실시간 상태 바, 콘텍스트 메뉴, Between 캘린더 등)

#### 결과 및 성과
- UX 관련 기획서 개선에 기여
- 회사 주력 서비스 리뉴얼 및 업그레이드, 시장 경쟁력 ↑

#### 참고 자료
- [trumpia's workbench](https://trumpia.com/product/workbench)
- [플로우 차트 개발 경험에 대하여](/experience/1-workflow-editor)


## 2. Vue.js 기반 사용자 웹 개발

- 리뉴얼된 웹 서비스에서 사용할 UI 구성요소를 개발
- 기획팀의 새로운 요구사항과 기획서를 반영하는 UI 구성요소를 만듦

#### 진행기간 및 회사, 인력 구성
- 2019.10 ~ 2020.09 (10개월), 트럼피아
- 디자이너 1, 퍼블리셔 1, 기획 1, <b>FE 2</b>  

#### 기술 스택
Vuejs, Storybook

#### 본인이 기여한 점
- 레이아웃 구성 (화면 4대요소 Sidebar, Header, Panel, Main)
- Table, Grid, Paging 개발 (목록 컴포넌트)
- Textarea, 정규표현식 활용한 불변(immutable) 텍스트 처리 (SMS 에디터 컴포넌트)
- ContentEditable Div + DragDrop(Email 에디터 컴포넌트)
- Select + Checkbox + Search + Infinity Scroll (복합기능 Select 박스)
- 계층형 DIV (조건 및 수식 박스)
- v-click-outside 디렉티브 개발 (열려있던 팝업이나 Select 박스 닫기)
- v-scroll-ended 디렉티브 개발 (Observer 기반 무한 스크롤)
- v-tooltip 디렉티브 개발 (툴팁 표시)
- v-text-highlight 필터 개발 (검색 키워드 포함 문구 하이라이팅)
- Storybook 도입 (동적인 문서화, 컴포넌트에 대한 필수 주석 생활화)

#### 결과 및 성과
- UI 구성요소에 대한 체계적 관리 이해 및 터득
- 문서화의 편의성 도입 (주석 필수)
- UI 리뉴얼 및 회사의 신규 웹 런칭에 기여

#### 참고 자료
-[레이아웃과 페이지, 그리고 컴포넌트 개발 경험에 대하여](/experience/2-componentize-on-vue)

## 3. Vue.js 도입 및 프로젝트 리뉴얼

- 레거시 FE 서비스를 Deprecated하고자, Vue 기반 프레임워크를 도입
- 레거시 BE 서비스와 원활한 연동을 위한 여러 초기 설정에 관여

#### 진행기간 및 회사, 인력 구성
- 2019.01 ~ 2019.09 (8개월), 트럼피아
- 기획 1, <b>FE 2</b>

#### 기술 스택
Vuejs, Vuex, Vue CLI, ESLint, SASS, Typescript, Axios, ExpressJS, Apache HTTP Server

#### 본인이 기여한 점
- 도입 전: 조사 및 테스트
  - JQuery 대비 Vue.js 도입 시 코드의 양 및 시인성 비교 (문서 작성 및 공유)
  - Typescript, Unit Testing, E2E Testing 조사 및 테스트
  - Vue-cli 기반 프로젝트 세팅, 로그인 연동 (Vue 2, Vuex, Router, CSS, ESLint + Prettier 등)
  - 웹팩 재설정 (소스맵, vue devtools 비활성화 등)
  - Gitlab CI/CD 설정 및 테스트 서버에 배포 (커밋 훅 스크립트 작성)
  - OAuth 연동 (토큰 생성/갱신, 레거시 웹과 자동 연동)

- 도입 후: 프로젝트 빌드업
  - Vue.js 스타일 가이드 기반 코딩 스타일 정의
  - 팀내 로컬 개발환경세팅 가이드 배포
  - 컴포넌트의 규모 (공통화, 구체화의 기준) 정의
  - 개발할 컴포넌트의 props, data, method, event에 대한 브리핑 및 팀원 리뷰 도입
  - Axios 공통 Caller와 핸들러 구현 (Axios Request & Response Interceptor)
  - Vuex의 적합한 사용 범위 정의
  - Jenkins 빌드 설정 (빌드 스크립트 작성)

#### 결과 및 성과
- Vue-cli 기반 신규 웹 런칭에 기여
- Vue & 모던 웹 이해 ↑ (webpack, babel)

#### 참고 자료
[프로젝트 리뉴얼을 위한 조사 경험에 대하여](/experience/3-porting-to-vue)

##  4. 플로우차트 제작도구 개발 및 정부 과제 수행 (18개월)

- 고객에게 Flowchart를 만들 수 있는 에디터를 제공
- 고객이 보유한 연락처의 정보에 따라 조건부(성별,나이,시간 등)로 메시징을 자동화할 수 있는 기능
- 정부과제 연구에 활용된 프로젝트

#### 진행기간 및 회사, 인력 구성
- 2017.06 ~ 2018.12 (18개월), 트럼피아
- 기획자 1, FE+BE 1

#### 기술 스택
HTML5, ES5, CSS3, jQuery, Ajax, PHP, Oracle Database, Apache Server

#### 본인이 기여한 점
- DB 엔티티 명세 및 관련 CRUD 로직 구현 (트리 구조 데이터와 대응하는 계층관계 레코드가 생성되도록)
- 트리 구조의 데이터를 Array로 모델링한 뒤 HTML Element로 렌더링
- HTML Element에 대한 사용자 인터랙션에 따라 트리 구조의 데이터를 모델링
- 정부과제 관련, 사용자의 트리 구조를 크롤링하여 재가공한뒤 추천 템플릿으로 공개 제공
- 각 노드에 바인딩된 연락처 조회 기능의 쿼리를 수정하여 Cost 개선

#### 결과 및 성과
- 정부 과제 수행
- 사용량 증가 및 주력 서비스로 발돋움
- Web API 를 통한 HTML 핸들링에 대한 이해도 ↑

#### 참고 자료

- [튜토리얼](https://youtu.be/_19bI5efWUY?t=267)
- [플로우차트 개발 경험에 대하여 2](/experience/4-auto-campaigns)
- [NTIS 일반 등재 정보](https://www.ntis.go.kr/outcomes/popup/srchTotlRschRpt.do?cmd=view&rstId=REP-2018-01110503225&srchTarget1=&srchTarget2=&srchText1=&srchText2=&returnURI=null&pageCode=RI_RSCHRPT_RST_DTL)


## 5. 레거시 서비스 개발 및 유지보수

고객 UI(서비스)와 직원 UI(백오피스), FE의 공통 기능 개선 및 유지보수
- 고객 UI : 보유한 연락처 차트 및 목록, SMS,Email 보내기, 발송/수신 이력 보기, My 페이지 등
- 직원 UI: 블랙리스트 차트 및 목록, 월 매출 차트 및 목록, 유저 리소스 조회, 스팸성 콘텐츠 모니터링 등
- ES5 기반 자체제작 UI 컴포넌트 개선, PHP 기반 DB 접근 및 데이터 가공 로직 개선

#### 진행기간 및 회사, 인력구성
- 2015.11 ~ 2017.06 (19개월), 트럼피아
- 기획 1, <b>FE+BE 1</b>

#### 기술 스택
HTML5, ES5, CSS3, jQuery, Ajax, PHP, Oracle Database, Apache Server

#### 본인이 기여한 점
- 고객 UI 개발
  - SQL 리터럴 쿼리 제거 (문자열 바인딩 없애고 바인딩 키워드 삽입)
  - 연락처 목록에서 CSV 익스포트 데이터 추가 (수신거부 날짜, 연락처 수집 채널)
  - 연락처 동의서, 회원 가입 페이지 등 Form의 필수 입력값 및 유효검 검사 관련 공통 UI 개발 및 PDF 출력/ 파일 업로드 기능 추가
  - 발송 이력, 관련 새로운 컬럼에 대한 구글 Chart 컴포넌트 및 SELECT 쿼리 변경
  - 페이지 블로킹 제거를 위한 Lazy 로딩 도입 Table의 TR 태그로 Default 로딩 아이콘 append
- 직원 UI 개발
  - 스팸 모니터링을 회피할 수 있는 바이패스 기능 제거
  - 고객이 사용하고 싶은 가상 번호 등록 기능을 위한 새로운 목록/CRUD 관련 API 연동 및 UI 개발
  - 교육 프로그램 이수 여부 관리 UI 추가 (담당 직원들이 알아서 체크)

#### 결과 및 성과
- 회사 서비스 및 웹 이해 ↑
- 고객의 Support 요청에 대한 직원의 수작업 ↓
- 다양한 UI 및 데이터 처리 경험 ↑