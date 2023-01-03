<template>
  <div class="profile-wrapper">
    <img src="/my-picture3.png" style="width: 265px;float: left;margin-right: 20px">
    <table>
      <tr>
        <td>FE, while</td>
        <td>2015. 11 ~ {{ currentDT }}</td>
      </tr>
      <tr>
        <td>Home</td>
        <td>경기도 하남</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>byungho222@gmail.com</td>
      </tr>
      <tr>
        <td>Github</td>
        <td><a href="https://github.com/byungster">@byungster</a></td>
      </tr>
      <tr>
        <td>Velog</td>
        <td><a href="https://velog.io/@bhkim">@bhkim</a></td>
      </tr>
      <tr>
        <td>Twitter</td>
        <td><a href="https://twitter.com/byungster222">@byungster222</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyProfile.vue",
  data: () => {
    return {
      currentDT: '',
    }
  },
  created() {
    this.currentDT = this.getCurrentDateTime();
    setInterval(() => {
      this.currentDT = this.getCurrentDateTime();
    }, 1000);
  },
  methods: {
    getCurrentDateTime() {
      // const now = new Date(); // 현재 시간
      // const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
      // const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
      // const d = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
      // return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDay()}, ${d.getHours().toLocaleString()}:${d.getMinutes()}:${d.getSeconds().toLocaleString()}`;
      return new Date().toLocaleString('ko-KR')
    }
  }
}
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
</style>
