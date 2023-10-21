import { useEffect, useRef } from "react";

const Experience = ({ scrollY, clientWidth }) => {
  const leftSlider = useRef();
  const rightSlider = useRef();

  useEffect(() => {
    if (clientWidth > 320) {
      if (scrollY < 400) {
        leftSlider.current.classList.remove("leftToRight");
        rightSlider.current.classList.remove("rightToLeft");
      } else if (scrollY >= 400) {
        leftSlider.current.classList.add("leftToRight");
        rightSlider.current.classList.add("rightToLeft");
      }
    } else {
      if (scrollY < 400) {
        leftSlider.current.classList.remove("leftToRight");
        rightSlider.current.classList.remove("rightToLeft");
      } else if (scrollY >= 400) {
        leftSlider.current.classList.add("leftToRight");
        rightSlider.current.classList.add("rightToLeft");
      }
    }
  }, [scrollY]);

  return (
    <section id="experience" className="row">
      <div id="left-slider" className="row-left" ref={leftSlider}>
        <h2 className="first-menu-name">
          Work<span className="point-color">.</span>
        </h2>
        <div className="row">
          <div className="row-left">
            <h3 className="second-menu-name">
              (주)제이<span className="point-color">.</span>
            </h3>
            <p>SI 개발자</p>
            <p className="time">2023.05.30 ~ 현재</p>
          </div>
          <div className="row-right">
            <div className="wrapper">
              <h3 className="second-menu-name">LUTRONIC</h3>
              <p className="time">2023.07.01 ~ 현재</p>
              <h4 className="third-menu-name">PDM 시스템 고도화</h4>
            </div>
            <div className="wrapper">
              <h3 className="second-menu-name">FURSYS</h3>
              <p className="time">2023.05.30 ~ 2023.06.30</p>
              <h4 className="third-menu-name">PLM 시스템 구축</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="right-slider" className="row-right" ref={rightSlider}>
        <h2 className="first-menu-name">
          Education<span className="point-color">.</span>
        </h2>
        <h3 className="second-menu-name">KH 정보교육원</h3>
        <p>JAVA기반 공공데이터 융합 개발자 양성과정</p>
        <p className="time">2023.09 ~ 2023.04</p>
      </div>
    </section>
  );
};

export default Experience;
