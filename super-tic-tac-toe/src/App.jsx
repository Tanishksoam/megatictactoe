import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Arena from "./components/Arena";

function App() {
  return (
    <div className=" m-0 p-10 bg-teal-500 w-screen h-screen overflow-hidden">
      <Header />
      <Arena />
    </div>
  );
}

export default App;
