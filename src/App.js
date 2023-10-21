import { useEffect, useRef, useState } from "react";

import MainSection from "./components/MainSection";
import Experience from "./components/Experience";
import Project from "./components/Project";

import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handelResize = () => {
      setClientWidth(document.documentElement.clientWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handelResize);
    };
  }, [clientWidth, scrollY]);

  return (
    <div className="App">
      <MainSection scrollY={scrollY} />
      <Experience scrollY={scrollY} clientWidth={clientWidth} />
      <Project />
    </div>
  );
}

export default App;
