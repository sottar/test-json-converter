import React from "react";
import ReactDOM from "react-dom";

const render = () => {
  ReactDOM.render(<div>hoge</div>, document.getElementById("app"));
};

render();

const getContent = async () => {
  const currentPath = window.location.pathname;
  console.log(currentPath);
  const contents = await import(`../contents${currentPath}`);
  console.log(contents);
  console.log("pageTitle", contents.default.pageTitle);
  return contents.default;
};

getContent();
