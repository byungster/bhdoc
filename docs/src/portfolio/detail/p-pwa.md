# PWA 지원을 위한 컴포넌트 퍼블리싱

## 기기별 CSS

- 태블릿
```css
@media only screen and (max-width: 1199px) {
  .container {
    min-height: auto;
  }
}
```

- 기타 모바일
```css
@media only screen and (max-width: 767px) {


}
```


## 컴포넌트 변환

- 좌측 사이드바, 모바일의 경우 Select 박스로 변환 (v-if 활용)
```html
      <div class="left-box">
        <h2>{{ this.$i18n.t('workbench.templateList.categoryList.title') }}</h2>
        <div v-if="menuDropDownFlag">
          <select v-model="templateType" class="select">
            <option v-for="category in templateCategory" :key="category.index" :value="category.id" :style="{'font-weight': isBoldedText(category.id, templateType)}">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div v-else class="template-menu">
          <ul>
            <li v-for="category in templateCategory" :key="category.index" @click="listTemplates(category.id)">
              <button :class="{'category-name': category.id === templateType}">{{ category.name }}</button>
            </li>
          </ul>
        </div>
      </div>

```


- 헤더의 가로로 나열된 버튼들, 모바일의 경우 Three Dot 버튼으로 변환

```html
        <!-- top right button/component area -->
        <div :class="[{'multi-btn-type': isMobile}, 'btn-console']">
          <button class="btn-console-open ico-more-menu" v-show="isMobile" @click="mobileClickEvent"><span class="sr-only-text">mobile menu open</span></button>
          <div :class="[{active: !mobileButtonFlag}, 'btn-group']" ref="buttonGroup" v-header>
            <span v-for="mainButton in headerInfo.mainButtons" v-bind:key="mainButton.name">
              <component :is="mainButton.component" :disabled="checkDisabled(mainButton.disabled)" :id="mainButton.id" :name="mainButton.name" :buttonType="mainButton.buttonType" @click.native="clickedMainButton(mainButton)" />
            </span>
          </div>
        </div>

```