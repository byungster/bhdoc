# HTML/CSS/Javascript
<br />
<br />
<br />

## Javascript

- Javascript 런타임 구성요소
![](https://blog.kakaocdn.net/dn/dZ8YBt/btqwhxzE1py/RQNPdMhyWbLZ3zDAptsVhK/img.png)

## 1. Execution Context

- 의미  
브라우저의 js 코드의 해석과정에서, 수행이 가능한 특정 단위로 구분지어진 환경 및 형상을 뜻함

- 쓰임새  
실행 컨텍스트는 호출 스택에 쌓이게 됨.

- 구성 요소
  - VO (Variable Object)
  - Scope Chain
  - This
    
### 1.1 VO (Variable Object)
- 실행 컨텍스트가 생성되면, JS 엔진은 실행에 필요한 정보를 담을 객체를 생성
- 필요한 정보?
  1. 변수
  2. 매개변수, 인수정보
  3. 함수 선언(함수 표현식 제외)
  4. 정보 1,2,3은 코드가 실행될 때 JS 엔진에 의해 참조되며, 코드에 의한 접근이 불가능

#### 1.1.1 Global Object ( 전역 컨텍스트 )
전역 객체는 전역에 선언된 변수와 함수를 Property로 갖음  
함수 컨텍스트와 달리 매개변수, 인수가 없음  

#### 1.1.2 Active Object ( 함수 컨텍스트 )
함수 컨텍스트는 전역 컨텍스트와 달리 매개변수와 인수 필요 (arguments 프로퍼티)  

### 1.2 Scope, Scope Chain
  - 현재 컨텍스트가 참조하여 값을 얻을 수 있는 변수 및 함수의 범위 (일련의 바구니 내지 컨테이너)
  - 현재 컨텍스트를 시작으로 상위 컨텍스트 및 전역 컨텍스트를 가리킨다
  - 특정 변수에 담긴 값을 읽는다 -> 순차로 컨텍스트의 Variable Look up 진행

### 1.3 This

- what is THIS ?  
  - 실행 컨텍스트(GO, AO)를 가리키는 Syntax

- this가 결정되는 방식  
  - 일반적으로 this가 가리키는 객체는, 어디에서 호출 되었냐가 아니라 어디에서 선언되었느냐에 따라 결정된다.
  - (실행 중에는 할당할 수 없으며, bind나 array function을 사용하여 원하는 this값을 설정할 수 있다.)

#### 1.3.1 단순 함수 호출
함수의 상위 컨텍스트(전역 컨텍스트)가 this로 결정된다.
```javascript
function firstFunction ( ) {
	console.log( 'this: ', this ) // this: window object
}

firstFunction()
```

#### 1.3.2 특정 Object의 Property인 Method
Object가 this로 결정된다.
```javascript
let obj = {
  firstFunction: function() {
    console.log( 'this: ', this ) // this: {firstFunction: f}
  }    
}

obj.firstFunction()
```

#### 1.3.3 Array Function 
자신을 감싼 Context를 this로 가리킴

#### 1.3.4 기타

##### 1.3.4.1 .bind()
```javascript
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind는 한 번만 동작함!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

##### 1.3.4.2 Array Function
```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

##### 1.3.4.3 Event Handler (Dom, Inline) 
이벤트를 생성시킨 Element가 this임

###### Dom
```javascript
function bluify(e) {
  // 언제나 true
  console.log(this === e.currentTarget);
  // currentTarget과 target이 같은 객체면 true
  console.log(this === e.target);
  this.style.backgroundColor = 'blue';
}
```

###### HTML Inline
```html
<button onclick="alert(this.tagName.toLowerCase());">
  this 표시
</button>
```

::: tip
아래의 경우, 내부 함수에 this이고, 이 경우엔 strict가 아니면 Global을 가져옴  
혹자는 Callback의 this라고도 얘기함
```html
<button onclick="alert((function() { return this; })());">
내부 this 표시
</button>
```
:::

## 2. Closure

함수 내에서 함수를 선언하고 정의하면 클로저라고 얘기를 한다.
하지만 대부분 내장 함수 그 자체를 리턴할 수 있고, 내부 함수의
스코프가 감싸고 있는 함수까지 해당하므로 값을 은닉하거나 private하게 사용할 수 있다.
그러나 내부변수를 참조하는 동안에는 내부 변수가 차지하는 메모리를 GC가 회수하지 않는다.

- 클로저는, 함수를 선언할 때 만들어지는 유효 범위
- 렉시컬 스코프와 관련이 깊고, 렉시컬 스코프는 코드에 함수를 선언하는 위치에 따라, 정의되는 스코프이다. (스코프 체이닝을 이해하고, 내가 스콥을 기술적으로 정의하는 것)
- 실행 콘텍스트의 Scope 체이닝와 동일하게 동작
  - Local
  - Outer
  - Global

### 일반 예제

```javascript
    function makeAdder(x) {
      var y = 1;
      return function(z) {
        y = 100;
        return x + y + z;
      };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);
    //클로저에 x와 y의 환경이 저장됨

    console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
    console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
    //함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
```

### 쓰임새
모듈 패턴, XHR 콜백

## 3. Prototype
Javascript에서 Object를 정의할 수 있는데,
이때 해당 객체의 초기형 내지 시작 모델을 설정할 수 있다 (설정된 경우도 있다.)

- Object는 Null
- String은 Object
- 기타 등등 ..

## 4. Promise, Async Await
주로 비동기 작업에 적합하다.

- Promise
  - 특정 함수의 결과 값을 그냥 return 하지 않고, Promise 인스턴스에 감싸서 던질 수 있음
  - Promise 인스턴스의 생성자의 첫번째 파라피터가 resolve 함수인데, 이 함수에 반환하려던 파라미터를 넣어줘야 함
  - 그러면 의도하는 동작이 이뤄지며, 해당 함수를 사용하는 곳에서는 .then() 함수의 콜백으로 처리해야함

```javascript
return new Promise((resolve,reject)=> {
    
})
```

- async
  - 프로미스를 반환하게 만듦
```javascript
let hello = async function() { return "Hello" };
hello().then((value)=> {console.log(value)}); // "Hello"
```

- await 
  - Then 절을 없애줌 (Catch만 체이닝할 수 있음)
```javascript
let hello = async function() { return "Hello" };
console.log(await hello()) // "Hello"
```


## 5. Garbage Collection
쓸데 없는 메모리 점유를 방지한다.
내부적인 처리라서 우리가 강제할 수는 없으나,
이해하고 간접적인 영향을 주는 방법은 알고 있어야한다.
- How?
  - Major GC
    - 참조관계가 사라지면, 알아서 메모리에서 없앤다. (Reference Counting)
    - Mark and Sweep
      - 접근 불가능한 객체인가? (백색/회색/흑색)
      - 첨엔 전체 Context가 회색이나, 가비지 컬렉터가 탐색하지 못하면 백색이되어, 제거됨
  - Minor GC with Old&New Space
- When?
  - 변수에 대한 재할당 (Primitive Type, Object Type)




## 6. Event Loop
브라우저 메인 콜 스택에 실행 콘텍스트를 밀어 넣는다.
(타스크 큐 및 마이크로타스크 큐에 작업이 있다면!)

- 보통 이벤트 큐에 쌓이는건 Timeout아니면 사용자 입력 이벤트가 쌓인다.
- 아니면 콜백 같은, 기타 비동기 작업 (ReadFile, Then)

::: tip 왜 이러는 걸까요?
메인스레드 하나에서 동작하기 땜에 콜 스택에 쌓이는 EC 중에
당장 처리되지 않는 EC 들은 이벤트 큐에 쌓였다가 콜 스택에 배치되는거임
:::

### 쓰임새
클래스 만들때 사용

## 7. Event Listener
브라우저가 이벤트를 감지하는 방법
```javascript
document.querySelector('button').addEventListener('click', function () {
console.log('clicked');
});
```
이런 코드가 실행된다면, 브라우저는 WEB API's에 콜백함수의 컨텍스트를 옮겨놓고 무한대기함
사용자 이벤트 발생 시 Task Queue로 이동되고, Stack이 비면, 스택으로 밀어넣음

### Event Delegation
이벤트 추적은 어케하냐? 
보통 특정 HTML Element에 이벤트 리스너를 걸어 놓으면,
본인 포함, 자식 Element들에게서 발생하는 모든 이벤트가 걸린다.
Delegation이 발생하니까.

### Event Bubbling
  HTML Element에 Event가 발생할 경우, 본인을 갖는 최상위까지 이벤트가
  거품마냥 올라간다.

```html
<main>
	<section>
		<article>
			<div>
				<form>
					<label for="name">Your Name</label>
					<input type="text" name="name" id="name">
				</form>
			</div>
		</article>
	</section>
  <script>
    var logEvent = function (event) {
	    console.log(event.target);
    };
    document.querySelector('main').addEventListener('input', logEvent, false);
    document.querySelector('section').addEventListener('input', logEvent, false);
    document.querySelector('article').addEventListener('input', logEvent, false);
    document.querySelector('div').addEventListener('input', logEvent, false);
    document.querySelector('form').addEventListener('input', logEvent, false);
  </script>
</main>
```

#### 버블링 멈춰!
클릭 이벤트를 서로 다르게 쓰고 싶단말이지..
```html
<body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
  <button onclick="event.stopPropagation()">클릭해 주세요.</button>
</body>
```

### Event Capturing
- addEventListner의 두번째 인자: useCapture
- 이벤트가 발생한 특정 요소까지 관여하는 모든 요소에게 이벤트를 전달하고 싶다?
```javascript
document.addEventListener('focus', function (event) {
	console.log(event.target);
}, true);
```

# CSS
## 1. Margin 과 Padding의 차이

Element의 내부 상하좌우 간격을 넓힐 것이냐
외부 상하좌우의 간격을 넓힐 것이냐

# 3. HTML


# 출처

- [event loop](https://engineering.linecorp.com/ko/blog/dont-block-the-event-loop/)
- [event delegation, bubbling, capturing](https://gomakethings.com/whats-the-difference-between-javascript-event-delegation-bubbling-and-capturing/)
- [bubbling & capturing](https://ko.javascript.info/bubbling-and-capturing)
- [Garbage Collection](https://ko.javascript.info/garbage-collection)
- [Closure](https://hyunseob.github.io/2016/08/30/javascript-closure/)