import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//id가 root라는 엘리먼트에 App컴포넌트를 그린다!
//인접한 JSX요소는 반드시 한개의 태그로 감싸야 한다!!
//불가능한 코드 예시!
//ex)ReactDOM.render(<App /><Potato />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
