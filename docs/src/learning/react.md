## Vue와 React의 차이

Tic-Tac-To 기본앱을 따라해보며 느낀 차이점

| 컴포넌트     | Vue                                                | React                                                       |
|----------|----------------------------------------------------|-------------------------------------------------------------|
| 생성       | ```export default { name: 'XXXX'}```  이외 다양한 방법 존재 | ```class XXXX extends React.Component```  클래스 기반 컴포넨테이션이 기본 |
| 렌더링      | ```<template />``` 감싸진 HTML 노드를 자동으로 렌더링           | ```render()``` 이용 |
| Props 정의 | 정의한 default에 props 프로퍼티 추가 | 클래스의 생성자를 정의하고 super(props) 전달 |
| Data 정의  | 정의한 default에 data 프로퍼티 추가 | 클래스에 "state" object 추가 |



