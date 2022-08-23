## Vue와 React의 차이

Tic-Tac-To 기본앱을 따라해보며 느낀 차이점

| 컴포넌트     | Vue                                                               | React                                                                 |
|----------|-------------------------------------------------------------------|-----------------------------------------------------------------------|
| 생성       | ```export default { name: 'XXXX'}```  이외 다양한 방법 존재                | ```class XXXX extends React.Component```<br/>클래스 기반 컴포넨테이션 또는 함수 컴포넌트 |
| 렌더링      | ```<template />``` 감싸진 HTML 노드를 자동으로 렌더링                          | ```render()``` 이용                                                     |
| Props 정의 | JS에 정의한 default에 props 프로퍼티 추가  특정 Element에 v-bind 이용하여 속성으로 바인딩  | - 클래스의 생성자를 정의하고 super(props) 전달 <br> - 특정 Element에 속성으로 바인딩          |
| Data 정의  | JS에 정의한 default에 data 프로퍼티 추가                                     | 클래스에 "state" object 추가                                                |
 | Event 발생 | - Element에 정의한 on:XXXX를 $emit() <br> - on:XXXX 속성에 바인딩된 함수가 호출된다. | - 부모의 Element에 정의한 속성(Props)를 호출 <br> - 해당 Attribute에 바인딩된 함수가 호출된다.  | 

