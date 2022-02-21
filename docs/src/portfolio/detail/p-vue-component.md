# Vue 컴포넌트 개발

## 1. 헤더
웹 서비스의 헤더 영역을 개발함
### 헤더 탭
웹 서비스의 컨테이너 영역에 표시할 컴포넌트를 콜백+비동기로딩방식을 활용하여 컴포넌트를 가져옴
### 헤더 실시간 상태
사용자 이벤트에 의해 데이터가 Update되면 즉시 저장되며, 저장 성공여부와 현재 날짜를 표시

#### 핵심 메소드
Vuex에 커밋
```
	/**
     * @public
     * @description 자동저장 발생 시 호출되는 함수이다. Header의 실시간 상태 문구를 최신화한다.
     */
    setRecentStatusText(text) {
      this.$store.commit('workflow/setRecentStatusText', text);
    },
```

Vuex에서 computed로 가져옴
```
  computed: {
    recentStatusText() {
      return this.$store.getters['workflow/getRecentStatusText'];
    },
  },
```


## 2. 모달

API와 연동되는 여러가지 모달을 개발하였습니다.
- Dependency Limit
- Send to user
- Pricing Plan

## 3. 캐러셀

이미지 렌더링 전용 캐러셀을 구현했습니다.

### 예시

- gif 첨부요망

### 마크업
다른 프로젝트를 담당하는 팀원이 추가해놓은 [vue2-touch-events](https://www.npmjs.com/package/vue2-touch-events) 라이브러리를 활용하였습니다.

```
    <transition-group tag="div" :name="transitionName" class="carousel-items">
      <div :key="current" class="carousel-item" :class="slides[current]" v-touch:swipe="swipe">
        <img :src="`/img/workbench/integrations/img_carousel_${slides[current]}.png`" ondragstart="return false;" v-touch:swipe="swipe" />
      </div>
    </transition-group>
```

### 핵심 데이터

- props로 slides될 이미지 Path가 담긴 배열을 전달받습니다.
- data로 current라는 배열의 특정 요소를 지정하는 숫자를 갖습니다.

```
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      current: 0,
      transitionName: 'fade',
    };
  },
```

### 핵심 메소드

#### slide()

사용자 이벤트 리스너에 의해 실행되는 slide함수는 current 값을 변경시킵니다.
current 값이 변경되면, watch에 의해 transition이 수행됩니다.

```
	methods: {
		slide(dir) {
	      this.current = dir;
	    }	
	},
	watch: {
		current(newIndex, oldIndex) {
	      if (newIndex > oldIndex) {
	        this.transitionName = 'slide-prev';
	      } else {
	        this.transitionName = 'slide-next';
	      }
		}
	}
```
#### swipe() 

터치 관련 사용자 이벤트가 발생하면 slide 함수를 호출합니다.

```
	test(dir, evt) {
      if (dir === 'left') {
        this.slide(1);
      } else {
        this.slide(-1);
      }
    },
```

## 4. Grid
각 항목의 형태가 카드인 목록

### 마크업 및 CSS
li 기반입니다.
```
  <li class="report-card" :class="{dimmed: !item.isIntegrated}" @click="intoDetailPage(item.id)">
    <div class="info-intg-desc">
      <div>
        <img :class="item.name" :src="`img_${item.name}.svg`" />
      </div>
      <p class="info-intg-text">{{ item.description }}</p>
    </div>
  </li>
  ...
  <style>
  .report-card {
	position: relative;
	width: 256px;
	height: 340px;
	padding: 20px 23px;
	margin: 20px 16px;
	background: #fff;
	border: 1px solid #e1e1e1;
	border-radius: 3px;
	cursor: pointer;
  }
  ...
  @media only screen and (max-width: 1199px) {
	.report-card {
		width: 100%;
		height: auto;
		margin: 0;
	}
	.report-card + .report-card {
		margin-top: 10px;
	}
	.info-intg-desc {
		display: flex;
		align-items: center;
	}
	.info-intg-text {
		margin: 0 0 0 42px;
	}
	.info-intg-status {
		margin-bottom: 30px;
	}
  }
  ...
  </style>
```

ul로 감싸서 사용하도록 개발하였습니다.
```
<ul class="card-list">
    <the-card-workflow-templates
      class="template-card"
      v-for="(template, index) in filteredTemplates"
      :key="index"
      :propsWorkflowTemplate="template"
      :reloadFunc="getTemplateList"
      :templateType="propsTemplateType"
      @chooseStart="$emit('loadingStart')"
      @chooseEnd="$emit('loadingEnd')"
    />
</ul>
```


## 5. Table

테이블 UI를 개발하고, 브라우저 너비 관련 Column Group 기능을 추가하였습니다.
```
      <colgroup v-if="useDataSet">
        <col style="width:66px;" />
        <col v-show="header.name.isVisible" />
        <col v-show="header.totalContacts.isVisible" />
        <col v-show="header.active.isVisible" />
        <col v-show="header.status.isVisible" />
        <col v-show="header.dataSet.isVisible" />
        <col v-show="header.createdBy.isVisible" />
        <col v-show="header.modifiedDate.isVisible" />
      </colgroup>
```
Watch에 의해 동작합니다.



## 6. 계층형 DIV

1개의 부모가 N개의 자식을 갖고 N개의 자식은 M개의 자식을 갖는 계층형 DIV입니다.
유저가 가진 데이터를 비교연산(And, Or)할 수 있도록 제작도구를 제공하려는 목적으로 만들었습니다.

- gif 첨부 요망

### 마크업

최상위 부모 A, A의 자식 B, 자식 B의 자식을 C라고 할때,

#### 최상위 부모 A

data로 자식 B를 요소로 갖는 배열 "conditionGroup"을 갖습니다. 
v-for를 이용하여 렌더링하며, 자식 컴포넌트에게 해당하는 conditionGroup 요소 1개를 Props로 전달합니다.
```
<div v-if="branch.conditionGroups.length > 0">
  <the-condition-group
    v-for="(conditionGroup, index) in branch.conditionGroups"
    :id="index"
    :val="conditionGroup"
    :disableEdit="disableEdit"
    :isReachedLimit="isReachedLimit"
    :key="index + Math.random() * (10 - 1) + 10"
    @delete-group="deleteConditionGroup"
    @update-group="updateConditionGroup"
  />
  <button class="btn btn-type02 size-type01 color-type03" :disabled="disableEdit || isReachedLimit" @click="addConditionGroup(null)"><span :class="{dimmed: disableEdit}">+ Add Group</span></button>
</div>
```

#### A의 자식 B

props로 자식 A를 요소로 갖는 배열 "conditionGroup.conditions"를 갖습니다.
v-for를 이용하여 렌더링하며, 자식 컴포넌트에게 해당하는 condition 요소 1개를 Props로 전달합니다.

```
  <div v-if="conditionGroup.conditions && conditionGroup.conditions.length > 0">
    <the-condition
      v-for="(condition, index) in conditionGroup.conditions"
      :id="index"
      :val="condition"
      :disableEdit="disableEdit"
      :isAndShowed="!isCompletedWaitFor"
      :isIgnoreEventConditionRemove="isIgnoreEventConditionRemove"
      :key="index + Math.random() * (10 - 1) + 10"
      @delete-condition="deleteConditionDatum"
    />
  </div>
```

#### B의 자식 C

계층의 최하단에 존재하는 자식 C는 본인이 갖는 String을 Computed하여 렌더링합니다. (getValidProcessedText)

```
  <div class="condition-box">
    <div class="condition-body" @mouseenter="changeBGColorStart" @mouseleave="changeBGColorEnd" :class="{dimmed: disableEdit}">
      <div class="valid" @click="clickedCondition">
        {{ getValidProcessedText }}
        <span class="invalid" v-if="invalidFlag">Invalid.</span>
      </div>
    </div>
  </div>
```


## 7. 라벨 입력란

Chip이라는 이름으로도 알려진 컴포넌트를 개발함과 동시에 텍스트 입력 기능을 포함하도록 개발하였습니다.

- gif 첨부 요망

### 마크업

- 라벨
```
  <div :class="{dimmed: disabled}">
    <span class="label">{{ labelText }}</span>
    <button class="btn-delete ico-x" style="cursor: default;"></button>
  </div>
```

- 라벨 텍스트
Contentediable의 Span을 사용하여 개발하였습니다.
```
<ul @click="focusInput" v-click-outside="addLabel" class="select-combo-item">
    <li class="place-holder" v-if="labelList && labelList.length < 1 && placeHolder !== '' && placeHolderFlag">{{ placeHolder }}</li>
    <li v-for="label in labelList" :key="label.id">
      <the-label v-bind:labelText="label.text" @remove-label="removeLabel" :disabled="disabled" />
    </li>
    <li class="add-input">
      <span id="label-input" contenteditable="true" ref="labelInputBox" @click="clickInputBox" @keyup="addLabel" ></span>
    </li>
</ul>
```

## 8. 스플릿

Split 기능으로 구분된 영역을 확장/축소 하는 컴포넌트를 개발하였습니다.


## 9. 셀렉트 콤보

체크박스, 라디오박스, 검색란이 포함된 Select box를 개발하였습니다.


## 10. SMS Editor

- 정규표현식 활용한 불변(immutable) 텍스트 처리

## 11. 플로우차트

플로우차트 제작도구 개발

### 플로우차트 에디터 기능

#### 플로우차트 컨테이너

##### 1. 실시간 저장 
그래프가 움직일때, 노드가 최신화될때마다 저장되도록 구현

##### 2. 그래프 커스터마이징
기존 그래프 컨트롤러에서 기획에 맞지 않는 부분 변경 및 추가 구현
- 기존 노드 기본 도형 -> 바꾼 노드 (마크업, 스타일, 아이콘 추가)
- 문자열의 위치에 대한 스타일, 높이값 등 제어
- 임포드 익스포트 방식 변경 (인코딩 디코딩 방식 변경)
- 패널 추가하여 데이터 유형 다양화 (JSON Schema)
- 마우스 이벤트 핸들러 추가
- Undo/Redo: 발생되는 Event를 쌓아서 처리

##### 기타 사용성
- select region 추가
- 연결 제약조건 추가
- 패닝 보완 : 라이브 프리뷰 + 뷰포트 이동 방식
- 자동 포커싱 : 알럿 클릭 시 포커싱
- 스크롤 바 추가

#### 플로우차트 컨테이너 유틸
    - 줌인/아웃
	- 미니맵 (플로팅 컴포넌트)
	- 마우스 오른쪽 클릭 콘텍스트 메뉴 (플로팅 컴포넌트)
	   - 정렬
	   - 복사/붙여넣기/복제/잘라내기
	   - 언두/리두
	- 실시간 경고창 (플로팅 컴포넌트)
	- 플로우차트 노드 수정도구


### 플로우차트 리포터 기능
#### 플로우차트 컨테이너
- 스타일 셋 새로 적용
- 통계 수치 오버레이 추가

### 플로우차트 프리뷰 기능 
#### 플로우차트 컨테이너
- 스타일 셋 새로 적용
- 수정 기능 제거

### 회고

#### 번거로웠던 것
- Base URL 없이 사용하기 위해서 xlink:href 대신 href로 변경
- 클래스를 사용하지 않는 스타일 제어, 인코딩 디코딩 방식 변경
- FF 관련 크로스 브라우징
- 4K 모니터와 GPU 관련 브라우저의 렌더링 깨짐 현상 (마우스 커서, 팝업 모서리 등)
- Vue 툴팁을 사용하기 번거로움
- 노드간의 연결 지점을 아무렇게나 만들지 못한 점
- 메모리 누수 걱정

## 12. 패널
비동기로 패널 불러오기

```
    getAsyncComponent(componentName) {
      let componentPath = Object.values(this.$global.panels).find(panel => panel.name === componentName).path;
      return () => ({
        component: import('@/components' + componentPath),
        loading: this.loading,
        error: this.error,
        delay: this.delay,
        timeout: this.timeout,
      });
    },
```

## 13. 커스텀 디렉티브 구현

### 클릭아웃사이드
Select Combo를 새로개발하면서 사용자의 마우스 UI 이벤트의 적합한 처리를 위해

### 스크롤엔디드
무한 스크롤(Infinite scroll) 구현을 위해
Observer 사용
- 단점: 어떤 이유에서라도 hidden 없이 height 값대로 화면에 보여지는 상태이어야 함

### 툴팁
사용자 마우스 커서에서 표시되도록 구현, 밀리는 현상 존재할 경우 placement 자체 조정

### 텍스트 하이라이터
정규표현식 이용하여, 문자열의 검색된 키워드를 포함하는 부분만 볼드체로 변경