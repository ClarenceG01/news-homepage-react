import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
// import Main from "./components/main";
// import MainContainer from "./components/main-container";
import  Left from "./components/left";
import Right  from "./components/right";
import  PreviewOne  from "./components/preview-one";
import  PreviewTwo  from "./components/preview-two";
import  PreviewThree  from "./components/preview-three";

function App() {
  return (
    <div className="container">
      <Navbar />
          <Left />
          <Right />
          <PreviewOne />
          <PreviewTwo />
          <PreviewThree />
    </div>
  );
}

export default App;
