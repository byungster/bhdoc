# Vue Framework

## 1. Virtual DOM
브라우저에 의해서 HTML 문서가
렌더링,페인팅된 이후에, 동적으로 변화가 발생하는 경우가 있다.
이를 reflow, repaint이라고 하고,
브라우저가 하는 처리인데 코스트가 작지 않다.
그런데 reflow와 repaint가 요새는 비일비재하다.
따라서 브라우저의 렌더링 시간을 효율적으로 제어할 수 있는 방안이 필요하다.

요새의 해결책은 가상 돔 트리를 한벌 갖고 있는거다.

인터렉션에 의해 DOM에 변화가 발생하면, 그 때마다 render tree가 재생성됨
어플리케이션이 커지면 DOM을 직접 조작하는 시간과 비용 증가 → 실행 속도 저하

Vue instance는 DOM의 복사본인 가상 DOM(Virtual DOM)을 활용하여 실제 변경된 부분만 DOM에 반영
= 웹 브라우저 DOM을 직접 수정하지 않고 가상 DOM을 활용하여 필요 부분만 수정을 진행
DOM Listener가 DOM의 변경 내역에 대해 즉각적으로 반응하여 특정 로직 수행


### 양방향 데이터 바인딩?

사용자 입력과 데이터 소스 사이, 한 쪽 데이터에 변화가 생기면 즉각 반응하는 형태
데이터의 변화를 감지해 템플릿과 결합하여 화면을 갱신하고, 화면에서의 입력에 따라 저장된 데이터를 즉각 갱신
View Model과 View가 계속해서 일치하게 되는 것

## 출처

[Vuejs Instance 공부하기](https://velog.io/@geesuee/Vue.js-Instance%EC%99%80-Template)

