import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/todoContainer";
import "./App.css";


// ReactDOM.render(<TodoContainer />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);