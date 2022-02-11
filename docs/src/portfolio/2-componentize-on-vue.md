# 레이아웃, 페이지, 컴포넌트 개발 경험기

리뉴얼된 서비스 요구사항에 제시된 UI 구성요소와 기본 페이지를 개발하는 프로젝트입니다.
회사에서 쓸 레이아웃, 페이지, 컴포넌트를 개발하였습니다.
하이엔드(high-end)스러운 외부 컴포넌트들이 많이 있지만,
특별한 기획의도가 없다면, 전부 직접 만들어 사용하였습니다.

## 레이아웃

레이아웃은 푸터 제외한 나머지


## 페이지

페이지는 view 폴더에 각각 저장, 대응하는 vuex 모듈이 존재(Data Model)

## 컴포넌트

컴포넌트 유지보수에 관한 이해, 동적 문서화


### Graph

#### 왜 만듦?
[회사에서 기획된 "Flowchart Editor"](/experiece/1-workflow-editor) 라는 것을 만들어야 했습니다.
코어 Model은 Graph 자료구조 기반이었습니다.

#### 어찌 만듦? 외부 라이브러리 조사
mxgraph를 사용했으며, 이는 XML 기반 그래프 컴포넌트입니다.
Flowchart Editor를 개발하기에는 인력과 시간이 매우 한정적이어서 a부터z까지 모두 개발하는 것은 무리가 있었습니다.  
따라서 기획팀의 요구사항에 50% 이상 만족하는 Library를 조사 및 선정하여, 연동하는 방식으로 개발을 진행하였습니다.

<GraphAnalysis/>

XML 기반이라함은, 그래프의 구성요소가 되는 노드와 엣지가 모두 &lt;cell&gt;이라는 xml 태그로 표현되기 때문입니다.
1개 이상의 &lt;cell&gt;은 &lt;model&gt;로 감싸집니다.  
이는 javascript의 DOMParser.parseFromString을 이용하여 각 xml 노드인 &lt;cell&gt;을 html에 표현 가능한 svg요소로 렌더링합니다.

각각의 스타일을 입히고, 리스너를 등록하여 프로퍼티를 세부설정하거나 실시간으로 저장되게 동작시킵니다.


#### 주요 기능


기본 CRUD 이외에 주요 기능은 다음과 같습니다.
- 줌
- 드래그드랍
- 패닝
- 정렬/복사/붙여넣기

:::tip mxgraph?
구글의 문서 도구 중, draw.io 라는 다이어그래밍 도구가 있습니다.  
가령 Zoom/Minimap/DragDrop 기능 뿐만 아니라, 사용자의 이벤트와 관련된 여러가지 이벤트를 구현한 오픈소스 라이브러리입니다.  
SVG Elements 기반이며, 자세한 사항은 [컴포넌트 개발 > Graph](/experience/2-componentize-on-vue#Graph) 영역에서 설명하였습니다.
:::

#### 어찌 만듦? vue 컴포넌트에서 mxgraph 임포트하기

mxGraph라는 오픈소스 라이브러리를 활용하는 Graph 컴포넌트를 개발하게 되었습니다.
Graph 컴포넌트는 모두 js로 작성하였으며
vue와 연동하기 위하여 다음과 같이 설계하였습니다.

그 결과, 성공적으로 Loading 할 수 있었습니다.

#### 어찌 만듦? 무얼 구현했니?

특히, Graph의 Model에 대한 Cell의 생성/조회/수정/삭제는 Controller가 담당합니다.
따라서 Graph의 Model, View, 그리고 Controller 에서 Cell의 생성/조회/수정/삭제를 담당하는 UI 개발을 담당하였습니다.

### Loading

### Textarea

SMS 콘텐츠를 Edit하는 기능입니다.
Textarea의 입력 리스너를 커스텀하여 제작되었습니다.
여러가지 검사 (스팸워드, 글자수 길이,   
Coupon 번호, 외부 Text, URL 등의 가변적인 contents를 삽입할 수 있도록 하는 기능
별도로 추가되어 수정이 불가능하도록 만드는 작업이 가장 까다로웠습니다.
SelectionStart, End 처리