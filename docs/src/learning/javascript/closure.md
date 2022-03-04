# 클로저

## 클로저란?

특정 함수를 선언하거나 정의할때 내부에서 함수를 정의한 뒤,
그 함수는 특정 함수의 스콥을 공유하도록 만드는 것

::: details 즉, 함수 내에서 함수를 정의하여 사용하는 것
대부분 내장 함수는 바깥함수가 호출되면 반환되도록 정의하여 사용

```javascript
function outer() {
  var text = 'variable 1';
  return function inner() {
    return text;
  };
}

var closure = outer();
console.log(closure()); // 'variable 1'\
```

- 위 코드에서 inner() 함수는 outer 함수의 text 변수를 참조하고 있음
- 함수 호출 이후에도 스코프는 살아있게 됨
:::
 
스코프 체이닝을 응용한달까..


## 왜 쓰는건데?

::: details 1. 값의 은닉

내부 함수가 사용하려는 변수를 불변으로 만듦

```javascript
function car(name) {
  let brand = name;
  
  return function() {
    console.log('This car`s brand is ' + brand);
  };
}

var bmw = car('BMW');
var kia = car('KIA');
var volvo = car('Volvo');

bmw(); // 'Hello, 승민'
kia(); // 'Hello, 현섭'
volvo(); // 'Hello, 유근'
```
:::


::: details 2. 특정 유효범위 만들어버리기

먼저 알아야할건, 콜백함수도 스코프 체이닝 된다는 것이다.
```javascript
var i;
for (i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```
그랬을 때 콜백함수 안에서 외장함수의 스코프에 존재하는 값을 참조하면,
콜백함수가 실행될때 쯤엔 이미 참조 중인 값은 변조가 되어버린 상태다.

따라서,
```javascript
var i;
for (i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 100);
  })(i);
}

// 0,1,2,3,4,5,6,7,8,9
```
즉시 실행함수를 활용한 클로저를 작성하여 유효한 스코프를 만들어주면
콜백함수가 실행될 때, 고유한 스콥에 저장된 매개변수에 대한 값을 가져오게 된다. 

::