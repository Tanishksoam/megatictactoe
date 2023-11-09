import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" m-0 p-10 bg-teal-500 w-screen h-screen">
      <Header />
    </div>
  );
}

export default App;
