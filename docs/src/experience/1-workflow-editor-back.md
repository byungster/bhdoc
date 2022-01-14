# 플로우 차트 개발 경험기

![Workflow](/Animation2.gif)

## 1. 요약

| 　구분　　　　 | 내용                                                                                                                |
|:------:|:------------------------------------------------------------------------------------------------------------------|
|  무엇인가? | 트럼피아 고객만 쓸 수 있는 [Flowchart](/learning/flowchart.html)를 제작하는 도구입니다.<br/> 고객 스스로가 원하는 플로우차트를 제작하면, 그대로 메시징을 자동화합니다. | 
|   누가?  | 기획자 1명, 디자인 1명, <b>프론트엔드 1명</b>, 백엔드 2명                                                                           |
|   언제?  | 2020년 09월부터 현재까지 15개월                                                                                             
|   왜?   | 기존 Flowchart Editor의 기술부채에 의한 제약이 많아서, 이를 개선                                                                      |
|   회고   | 얼마나 더 버전업을 해야하는가! 언제까지 마이너한 패치에 치일것인가!                                                                            |

:::tip 그려진 플로우차트대로 메시징을 자동화한다고 ?  
Flowchart를 구성하는 각각 기호들은, 가용한 고객의 리소스(송신/수신/연락처 정보)와 그 활용에 대한 명령을 갖는 각각의 Function입니다.
:::

## 1. 왜 만듦?

### 요구 사항
회사에서는 이익 증대를 위한 여러 방안이 필요하였습니다.  
그 중 하나는 기존의 Flowchart Editor를 리뉴얼하는 것이었습니다.
기존의 Flowchart Editor가 기존 고객의 활용과 프로세스 점유가 많았기 때문입니다.
그러나 지금보다 시장 경쟁력을 확보하여 이익을 증대시키려면   
경쟁 회사보다 기능의 편의성,다양성 부문에서 선두가 되어야 했습니다.

### 구체화
이에 따라 기획팀으로부터 고객의 불편을 최소화하는 Editor를 의뢰받았고, 대표적으로 3가지 요구조건이 있었습니다.
- 그리기 방법의 높은 자유도 : 제약조건 최소화 (경고 팝업 최소화 및 토스트로 변경)
- 그리기 방법의 단순화 (Drag&Drop, Click&Go, Auto Save, 그리기 마법사 제공)
- 보다 다양한 Function의 제공 : 3rd-party Integration Google Sheet Import/Export,

### 리뉴얼이 답이다
다소 추상적인 요구사항을 구체화해본 결과,    
UI 상호작용 간의 병목의 원인들을 제거해야했고 기술부채에 의한 제약이 존재했기 때문에 기존의 Flowchart Editor를 크게 개선해야했으며,   
결국 리뉴얼된 어플리케이션을 개발하는 프로젝트가 진행되었습니다.

## 2. 무얼 만듦?
Editor / Report / List / Template List / Settings / Preview 를 만들었습니다.

## 3. 어케 만듦?

### 사용 기술 및 언어

Vuejs + Expressjs 

### 설계

개발할 페이지는 크게 4개였습니다. 당시 버전 로드맵에 대한 간략한 설계입니다.

<FlowchartDesignRoadMap/>

특히, Editor 화면에 대한 구성요소의 관련성은 다음과 같이 확인하였습니다.


<FlowchartDesignEditorRequirements/>

기획의 요구사항에 대응하지 못하는 부분에 대해서는 고유의 기능을 오버라이딩하거나 추가적으로 구현하여 해결하였습니다.

<FlowchartDesignEditor/>


## 4. 구현

아래 3가지에 대한 생성/조회/수정/삭제 UI 개발하였습니다.  
- Flowchart 
- Flowchart 구성요소
- Flowchart 구성요소에 대한 속성

위 언급한 모든 것들은 javascript Object로 만들어져 있습니다.
각각의 Model, View, Controller에 대한 페이지 개발, 컴포넌트 개발, API 연동, 그리고 사용자 이벤트 핸들링을 담당하였습니다.

   
사용자의 Mouse, Event, Touch 이벤트에 대한 핸들링


###  프로젝트 구성

![](https://imgur.com/pLCsFVM.png)

#### src/assets/WorkflowStyle.js
css로는 반영하지 못하는 고유의 스타일을 지정합니다.

#### src/plugins/graph/*
mxgraph입니다. npm 모듈은 다루지 않는 기능이 너무 많아서, 고유의 기능에 영향을 주는 것만들만 추려서 사용합니다.

#### src/utils/workflow/*
mxgraph로는 반영하지 못하는 고유의 기능을 구현합니다. workflow라는 설계를 갖고서 각 기능들을 구체화하였습니다.

#### src/views/workbench/WorkflowEditor.vue
workflow로 인해 모든 처리가 완료된 SVG Element가 표시되는 실제 페이지입니다.

## 3. 회고