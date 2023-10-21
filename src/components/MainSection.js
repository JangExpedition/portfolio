import { useEffect, useRef } from "react";

const MainSection = ({ scrollY, clientWidth }) => {
  const pointSpan1 = useRef();
  const pointSpan2 = useRef();
  const pointSpan3 = useRef();
  const pointSpans = [pointSpan1, pointSpan2, pointSpan3];

  useEffect(() => {
    const scrollPoints = [100, 200, 300, 400];

    if (scrollY < scrollPoints[0]) {
      pointSpans.forEach((span) => span.current.classList.remove("point-color"));
    } else {
      scrollPoints.some((position, index) => {
        if (scrollY < position) {
          pointSpans[index - 1].current.classList.add("point-color");
          return true;
        }
        return false;
      });
    }
  }, [scrollY]);

  return (
    <section className="MainSection">
      <div className="main-image-wrapper">
        <img id="main-image" src={process.env.PUBLIC_URL + "/dev-jangcccci.png"} alt="main image" />
      </div>
      <h1 className="hello">
        안녕하세요,
        <br />
        저는 장원정입니다<span className="point-color">.</span>
      </h1>
      <p id="about-me">About Me</p>
      <div className="image-wrapper">
        <img id="down-arrow" src={process.env.PUBLIC_URL + "/down-arrow.png"} alt="" />
      </div>
      <div>
        <p id="introduce">
          <span ref={pointSpan1}>아름다운 UI</span>와 <span ref={pointSpan2}>재미있는 인터랙션</span>을 통해 사용자에게{" "}
          <span ref={pointSpan3}>특별한 경험</span>을 만들어주고 싶습니다.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
