# API 연동

## Axios 인터셉터 

### 500번대 에러 핸들링 
	부적합 응답에 대한 핸들링

```javascript
axios.interceptors.response.use(
	res => {
	...
	},
	error => {
		if (error.toString().match(/5[0-9][0-9]/)) {
			console.error('Response Interceptor ', error);
			store.commit('setPopup', errorPopupProps);
		} else {
			console.log(error);
		}
		return Promise.reject(error);
	},
);
```

### Cancel 토큰 핸들링
	페이지 전환 시, 직전까지의 API 콜 중 응답대기 상태의 Call을 Cancel

```javascript
// Request Interceptor
axios.interceptors.request.use(config => {
  // 요청 데이터의 헤더에 이미 붙어 있는 cancel 토큰이 없는데, 스토어에는 토큰이 있으면,
  let storedCancelTokenSource = store.getters['getCancelTokenSource'];
  if (!config.cancelToken && storedCancelTokenSource) {
	// 스토어에 있는 cancel 토큰을 붙인다.
	config.cancelToken = storedCancelTokenSource.token;
  }
  return config;
});
```

## API Request 공통 핸들러 구현

### 환경변수 설정 (.env 파일)
- 각 모드 별 API 도메인, 포트 설정 
- 개발, 스테이징, 프로덕션 모드
- Default 파라미터 구성
   - Database Type
   - API Key

```javascript
APP_BACK_END_DOMAIN = XXXXX.XXX.com
APP_BACK_END_PORT=3031
APP_CRYPTO_KEY=XXXXX
APP_DB_TYPE= XXX
```


### API Caller 구현
- Default Parameter
    - 사용자 정보(ID, Timezone 등)
    - Get,Post,Put,Delete 공통 사용 파라미터 반드시 포함되도록 구현

```javascript
 request(url, method, addParameter = {}) {
   let parameter = {
         oId: this.session.oem.oId,
         mId: this.session.member.mId,
         pId: this.session.user.pId,
         timezone: this.session.member.timezoneArea,
         ...addParameter
   };

   this.axios[method](`${this.PREFIX}/${url}`, parameter);
 }

```


