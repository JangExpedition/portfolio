import { useEffect, useState } from "react";

import MainSection from "./components/MainSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import "./App.css";
import Skills from "./components/Skills";

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
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
