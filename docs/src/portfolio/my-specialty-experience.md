# 주요 프로젝트

아래 기술한 주요 프로젝트는 저의 Front-end 개발 기여도가 80% 이상인 것들입니다.    
최신순으로 나열하여 작성하였습니다.

## 1. 플로우차트 제작도구 개발
SVG 기반으로 플로우차트를 만들 수 있는 에디터를 개발하였습니다.

#### 진행기간 및 회사
- 2020.09 ~ 현재 (16개월), 트럼피아

#### 사용스택
Vue.js, Vuex, ES5, ExpressJS, CSS3, HTML5

#### 인력 구성
디자이너 1, 퍼블리셔 1, 기획 1, <b>FE 1</b>, BE 2

#### 주요내용
- 시작과 끝 노드가 있는 Flowchart를 고객이 만들도록 에디터를 제공합니다.
- 고객에 의해 생성된 Flowchart 정보는 Back-end가 재가공하여 SMS 발송, 연락처 정보 갱신 등의 수행 스케줄로 등록합니다.
- Graph 자료구조를 응용하였습니다.

#### 본인이 기여한 점
- Flowchart 정보에 대한 CRUD 관련 내부 REST API 연동
- 상용 Flowchart Editor 선별 및 테스트, 도입 (mxgraph: SVG 기반 Graph 라이브러리)
- Editor, Preview, Report 화면에 필요한 mxgraph 라이브러리의 공통화, 모듈화 설계&구현
- 사용자 이벤트(마우스,키입력) 핸들링 ( SVG 노드 생성/수정/조회/삭제에 관여하는 기능)
- 매크로 기능 개발 (Undo&Redo, Copy&Paste 기능, 정렬, 템플릿, Container 기능, Zoom 등)

#### 결과 및 성과
- UX 관련 기획서 개선에 기여
- 회사 주력 서비스 리뉴얼 및 업그레이드, 시장 경쟁력 ↑

#### 참고 자료
- [trumpia's workbench](https://trumpia.com/product/workbench)
- [플로우 차트 개발 경험에 대하여](/experience/1-workflow-editor)


## 2. 공통 컴포넌트 개발

리뉴얼된 웹 서비스에서 사용할 UI 구성요소를 개발합니다.

#### 진행기간 및 회사
- 2019.10 ~ 2020.09 (10개월), 트럼피아

#### 사용스택
Vuejs, Storybook

#### 인력 구성
디자이너 1, 퍼블리셔 1, 기획 1, <b>FE 2</b>

#### 주요내용
- 기획팀의 새로운 요구사항과 기획서를 반영하는 UI 구성요소를 만들었습니다.

#### 본인이 기여한 점
- UI 컴포넌트 및 레이아웃 설계&개발
    - Vue 기반 기본 레이아웃 (헤더, 사이드 바, 패널, 팝업)
    - Vue 기반 Textarea (SMS 콘텐츠 작성 도구)
    - Vue 기반 Grid 및 Table (목록)
    - Vue 기반 기타 기본 템플릿 (Radio Select, Checkbox Select, Tooltip)
- Storybook 도입
    - 문서를 작성할 때와 발표할 때만 보는게 아니라 지속적인 최신화 및 관리 목적
    - 개발자 본인들이 구현하는 UI 컴포넌트에 대한 문서화
    - Vue파일 생성시 자동 생성될 주석 템플릿 도입 (구현 상태에 대한 문서화 및 동적인 관리)
- 기존 레거시 BE와 연동
    - XHR 핸들러 구현 (Axios Request&Response Interceptor)
- 특별한 요구에 대해선 외부 라이브러리를 import한 뒤, 기획팀과 타협하며 개발

#### 결과 및 성과
- UI 리뉴얼
- UI 구성요소에 대한 체계적 관리 이해 및 터득

#### 참고 자료
-[레이아웃과 페이지, 그리고 컴포넌트 개발 경험에 대하여](/experience/2-componentize-on-vue)

## 3. 웹 리뉴얼 (Vue 프레임워크 도입)

회사 신규 웹 런칭을 위한 분석 및 테스트, 프로젝트 구성에 기여하였습니다.

#### 진행기간 및 회사
- 2019.01 ~ 2019.09 (8개월), 트럼피아


#### 사용언어
Vuejs, Vuex, Vue CLI, ESLint, SASS, Typescript, Axios, ExpressJS, Apache HTTP Server

#### 인력구성
기획 1, <b>FE 2</b>

#### 주요내용
- Vue.js를 쓰기 전(JQuery)과 후에 대한 장단점 비교 및 테스트
- Vue 프레임워크 구성을 위한 Vue-cli 기반 웹팩 설정 및 테스트
- React와 비교, typescript 도입 전후 비교
- 테스트 툴 조사 및 테스트 (Unit Testing, E2E Testing)

#### 결과 및 성과
- Vue-cli 기반 신규 웹 런칭에 기여했습니다.
- Vue & 모던 웹 이해 ↑ (webpack, babel)

#### 참고 자료
[프로젝트 리뉴얼을 위한 조사 경험에 대하여](/experience/3-porting-to-vue)

##  4. 플로우차트 제작도구 개발 및 정부 과제 수행 (18개월)

Graph 자료구조가 아니라 Tree 자료구조를 응용한 Flowchart 에디터를 개발합니다.

#### 진행기간 및 회사
- 2017.06 ~ 2018.12 (18개월), 트럼피아

#### 사용 스택
HTML5, ES5, CSS3, jQuery, Ajax, PHP, Oracle Database, Apache Server

#### 인력구성
기획자 1, FE+BE 1

#### 주요내용
- 고객에게 Flowchart를 만들 수 있는 에디터를 제공합니다.
- 현재 진행 중인 "SVG 기반 Flowchart"와는 다르게 HTML기반의 옛날 버전입니다.
- Graph 자료구조가 아니라 Tree 자료구조를 응용하였습니다.
- 정부과제 연구에 활용된 프로젝트입니다.

#### 본인이 기여한 점
- 요구사항을 반영하기 위한 Full-Stack 개발 (PHP: CRUD 관련 DAO, DTO)
- 트리의 자식이 3개 이상 만들어지도록 모델링&렌더링 기능개선
- 부모가 다른 자식간에도 연결 또한 허용되도록, 예외처리 추가
- 정부과제 관련 추천 템플릿 기능 추가 + 미리보기 관련 Phantomjs 활용

#### 결과 및 성과
- 정부 과제 수행
- 사용량 증가 및 주력 서비스로 발돋움
- Web API 를 통한 HTML 핸들링에 대한 이해도 ↑

#### 참고 자료

- [튜토리얼](https://youtu.be/_19bI5efWUY?t=267)
- [플로우차트 개발 경험에 대하여 2](/experience/4-auto-campaigns)
- [NTIS 일반 등재 정보](https://www.ntis.go.kr/outcomes/popup/srchTotlRschRpt.do?cmd=view&rstId=REP-2018-01110503225&srchTarget1=&srchTarget2=&srchText1=&srchText2=&returnURI=null&pageCode=RI_RSCHRPT_RST_DTL)


## 5. 레거시 서비스 개발 및 유지보수

고객전용 서비스 UI와 직원전용 어드민 UI 개선 및 유지보수

#### 진행기간 및 회사
- 2015.11 ~ 2017.06 (19개월), 트럼피아

#### 사용 스택
HTML5, ES5, CSS3, jQuery, Ajax, PHP, Oracle Database, Apache Server

#### 인력구성
기획 1, <b>FE+BE 1</b>

#### 주요내용
- 고객전용 서비스 UI와 직원전용 어드민 UI 개선 및 유지보수합니다.

#### 본인이 기여한 점
- 요구사항을 반영하기 위한 Full-Stack 개발 (PHP: CRUD 관련 DAO, DTO)
- UI 컴포넌트 개선(Table, Texarea, Chart)
- 고객의 가상 전화번호 (10DLC) 관련 FE 개발 (고객의 My 페이지)
- 고객이 사용할 연락처 수집 서비스 관련 FE 개발 (고객의 광고 지원을 위한 회원가입 폼 제작 도구 등)
- 집계 데이터 구조 변경 건 관련 FE 개발 (고객의 Report 페이지)
- DB 조회 서비스 개발(직원의 리소스 모니터링 페이지)

#### 결과 및 성과
- 회사 서비스 및 웹 이해 ↑
- 고객의 Support 요청에 대한 직원의 수작업 ↓
- 다양한 UI 및 데이터 처리 경험 ↑

#### 참고 자료
[레거시 서비스 DevOps 경험에 대하여](/experience/5-legacy)
