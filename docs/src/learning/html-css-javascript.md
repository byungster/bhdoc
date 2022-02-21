# HTML/CSS/Javascript
<br />
<br />
<br />

# Javascript

## 1. Execution Context

- 의미  
브라우저에 내장된 자바스크립트 엔진이 자바스크립트 코드를 
실행 가능하도록 형상화하고 구분한 것을 뜻함

- 쓰임새  
실행 컨텍스트는 호출 스택에 쌓이게 되며 이벤트 루프에 의해 실행됨

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

### 1.2 Scope Chain
  - 현재 컨텍스트가 참조할 수 있는 레퍼런스의 리스트
  - 현재 컨텍스트를 시작으로 상위 컨텍스트 및 전역 컨텍스트를 가리킨다
  - 특정 변수에 담긴 값을 읽는다 -> 순차로 컨텍스트의 Variable Look up 진행


### 1.3 This

- what is THIS ?  
  - 실행 컨텍스트(GO, AO)를 가리키는 Syntax

- this가 결정되는 방식  
  - 일반적으로 this의 객체는 함수가 호출 되었을 때
  - 어떻게 호출되었느냐에 따라 동적으로 결정된다.
  - (실행 중에는 할당할 수 없으며, bind나 array function을 사용하여 원하는 this값을 설정할 수 있다.)

#### 함수 호출
함수의 상위 컨텍스트(전역 컨텍스트)가 this로 결정된다.
```javascript
function firstFunction ( ) {
	console.log( 'this: ', this ) // this: window object
}

firstFunction()
```

#### Object의 Method
Object가 this로 결정된다.
```javascript
function firstFunction ( ) {
	console.log( 'this: ', this ) // this: {firstFunction: f}
}

firstFunction()
```

#### Array Function 
자신을 감싼 Context를 this로 가리킴

::: tip 예외  
arrow function의 경우, 자신을 감싼 정적인 범위를 가리킨다.
::: 


#### 기타

##### .bind()
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

##### Array Function
```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

##### Event Handler (Dom, Inline) 
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

###### Inline
```javascript
<button onclick="alert(this.tagName.toLowerCase());">
  this 표시
</button>
```

::: tip
아래의 경우, 내부 함수에 this이고, 이 경우엔 strict가 아니면 Global을 가져옴  
혹자는 Callback의 this라고도 얘기함
```javascript
<button onclick="alert((function() { return this; })());">
내부 this 표시
</button>
```

:::






arrow function의 경우 this가 일반 함수와는 다르게 바인딩되기 때문에 조심해서 사용해야한다. 또한 arrow function을 call(), bind(), apply()를 사용해 호출할 때 this를 지정해주더라도 무시하기 때문에 주의해서 사용해야한다.

# 2. CSS

## Margin 과 Padding의 차이

Element의 내부 상하좌우 간격을 넓힐 것이냐
외부 상하좌우의 간격을 넓힐 것이냐

# 3. HTML
