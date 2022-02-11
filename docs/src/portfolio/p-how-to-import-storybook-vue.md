#  Vue Storybook

다음과 같은 설정을 수행하여, 현재 프로젝트 Vue 컴포넌트를 그대로 보여주면서도
주석으로 추가한 문서화 내용들을 한번에 Doc탭에 띄워서, 문서로 볼 수 있었다.

## 전역 설정 (Configuration)

### 파일 확장자(문서 작성 언어)
    mdx 문법 기반

Vue Component를 만들 때 작성했던 주석은, mdx 문법에 의해 다음과 같이 구문을 작성해야한다.

```

// 위치시킬 디렉토리 
<Meta title="공통 컴포넌트/LabelText" component={TheLabelText} />

// 컴포넌트 이름
<Title of={TheLabelText} />

// 컴포넌트 설명
<Description of={TheLabelText} />

// 메소드와 이벤트에 대한 설명
<ArgsTable of={TheLabelText} />

```


### 사용한 애드온
```
	addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-docs'],
```

### 글로벌 구성

현재 프로젝트와 동일한 글로벌 구성으로 설정하 고자 preview.js를 	커스터마이징하였다.


- 프로젝트에서 사용중인 커스텀 디렉티브 임포트
   - 툴팁, 검색 텍스트 하이라이팅, 터치이벤트, 클릭 아웃사이드

```
		Vue.directive('click-outside', ClickOutside);
		Vue.directive('tooltip', Tooltip);
		Vue.filter('highlight', TextHighlighter.highlight);
		Vue.use(Vue2TouchEvents);
```


	- 프로젝트에서 사용중인 스토어 임포트
	
```	
		import Vuex from 'vuex';
		import storybookStore from '@/stories/store.js';

		// Vuex 추가
		Vue.use(Vuex);
		//https://stackoverflow.com/questions/60710962/cant-read-from-vuex-store-in-storybook
		Vue.prototype.$store = new Vuex.Store(storybookStore);
```

	- 프로젝트에서 사용중인 공통 css 파일 임포트

```
		require('@/../public/publish/commonUi.css');
		require('@/../public/publish/fontOpenSans.css');
```


### 스토리북 퍼블리싱
스토리북을 열면, 처음으로 Document가 표시되길 원했다.
따라서 addon인 Docs의 Docs탭이 먼저 열리도록 onload 수정하였다.

```
		window.removeEventListener('load', clickDocsButtonOnFirstLoad);
	    const docsButtonSelector = window.parent.document.evaluate("//button[contains(., 'Docs')]", window.parent.document, null, XPathResult.ANY_TYPE, null);

    	const button = docsButtonSelector.iterateNext();

    	button.click();
```



## 스토리북에서 문서로 표현하기

### Vue 컴포넌트에 필수 주석 작성하기

#### Component 소개

		Vue 컴포넌트 저작자에게 어떤 컴포넌트인지 설명을 요구한다.

```
		<script>
		/**
		 * 여기에 컴포넌트에 대한 설명을 작성해주세요.
		 *
		 * @displayName SMSTextarea.vue
		 * @description 이 컴포넌트는 SMS의 콘텐츠를 작성기능을 위한 컴포넌트입니다.
		 * @author bhkim
		 * @date 2021-07-07
		 */
		export default {
		  name: 'SMSTextarea'
		  components: {TheAutoResponseBox},
		};
		</script>
```

#### Method
		Vue 컴포넌트가 수행할 행위에 해당하는 Method 저작자에게, 이 Method가 어떤 행위를 수행하는지 설명을 요구한다.

```
		/**
	     * @public
	     *
	     * 워크플로우를 저장하기 위해 사용하는데요!
	     * API에게 GraphModel을 전달합니다.
	     * GraphModel은 Inflate + Base 64 인코딩된 데이터로서, source라는 파라미터로 미들웨어에게 건넵니다.
	     */
	    saveWorkflow(callbackFunc) {
	      let g = this.graph;
	      // Edge가 selected된 상태로 저장이 되면 edge 색도 저장되기에
	      let cells = g.getSelectionCells();
	      if (cells.length && cells[0].edge) {
	        g.resetEdgeState(false, cells[0]);
	      }
	      let callData = {
	        workflowId: g.component.workflowId,
	        workflowName: this.$store.state.header.headerName,
	        source: g.getEncodedGraphModel(g.getModel()),
	        partition_id: this.$store.getters.getPartitionId,
	      };
	      workbenchApi.updateWorkflow(this.$store.getters.getSession, callData).then(
	      	...
	      );
```

#### Emit (이벤트 발생을 부모 컴포넌트에게 알리는 경우)
		Vue 컴포넌트의 주요 이벤트 중에 하나인 Emit의 용도는 무엇인지 설명을 요구한다.

```
		  /**
	       * 현재 입력상태 저장해주세요
	       * @property {Object} conditionDatum - 현재 폼 입력 상태
	       */
	      this.$emit('property-saved', this.conditionDatum);
```
