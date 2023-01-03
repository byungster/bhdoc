<template>
    <slick
        ref="slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazeLoadError">
      <a href="/admin1.png" target="_blank"><img src="/admin1.png" title="DB 쿼리 실행 화면"></a>
      <a href="/admin4.png" target="_blank"><img src="/admin4.png" title="DB 쿼리 만드는 과정 (바인딩 값 인식)"></a>
      <a href="/admin2.png" target="_blank"><img src="/admin2.png" title="2016년 미국팀 요청"></a>
      <a href="/admin3.png" target="_blank"><img src="/admin3.png" title="최근까지의 미국팀 요청"></a>
    </slick>
</template>

<script>
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


export default {
  name: 'AdminSlick',
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        dots: true,
        centerMode: true,
        focusOnSelect: true
      },
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log('handleDestroy', event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log('handleEdge', event, slick, direction);
    },
    handleInit(event, slick) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick);
    },
    handleSetPosition(event, slick) {
      console.log('handleSetPosition', event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource);
    },
  },
}
</script>

<style>
button.slick-prev:before, button.slick-next:before {
  background-color: white !important;
  color: #3eaf7c;
  font-size: 25px;
}

.slick-dots li.slick-active button:before {
  color: #3eaf7c;
  opacity: .75;
}

.slick-dots li button:before
{
  color: #3eaf7c !important;
}
</style>
