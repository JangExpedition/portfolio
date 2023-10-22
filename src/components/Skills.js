import { useEffect, useRef } from "react";

import { Events, Engine, Runner, Render, Mouse, MouseConstraint, Composite, Bodies } from "matter-js";

import IconCSS from "../images/icon_CSS.png";
import IconHTML from "../images/icon_HTML.png";
import IconJS from "../images/icon_JS.png";
import IconREACT from "../images/icon_REACT.png";
import IconTHREE from "../images/icon_THREE.png";

const Skills = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasWidth = 1000;
    const canvasHeight = 1000;

    const gravityPower = 0.8;
    let gravityDeg = 0;

    let engine, runner, render, mouse, mouseConstraint;

    initScene();
    initMouse();
    initGround();
    initImageBoxes();

    Events.on(runner, "tick", () => {
      gravityDeg += 1;
      engine.world.gravity.x = gravityPower * Math.cos((Math.PI / 180) * gravityDeg);
      engine.world.gravity.y = gravityPower * Math.sin((Math.PI / 180) * gravityDeg);
    });

    function initScene() {
      engine = Engine.create();
      render = Render.create({
        canvas: canvas,
        engine: engine,
        options: { width: canvasWidth, height: canvasHeight, wireframes: false, background: "#1b1b19" },
      });
      runner = Runner.create();

      Render.run(render);
      Runner.run(runner, engine);
    }

    function initMouse() {
      mouse = Mouse.create(canvas);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
      });

      Composite.add(engine.world, mouseConstraint);
    }

    function initGround() {
      const segments = 32;
      const deg = (Math.PI * 2) / segments;
      const width = 50;
      const radius = canvasWidth / 2 + width / 2;
      const height = radius * Math.tan(deg / 2) * 2;

      for (let i = 0; i < segments; i++) {
        const theta = i * deg;
        const x = radius * Math.cos(theta) + canvasWidth / 2;
        const y = radius * Math.sin(theta) + canvasHeight / 2;

        addRect(x, y, 50, height, { isStatic: true, angle: theta });
      }
    }

    function initImageBoxes() {
      const scale = 0.7;
      const type = { w: 250 * scale, h: 250 * scale };
      const icons = [
        { name: "JS", icon: IconJS },
        { name: "CSS", icon: IconCSS },
        { name: "HTML", icon: IconHTML },
        { name: "REACT", icon: IconREACT },
      ];

      icons.forEach((icon) => {
        addRect(canvasWidth / 2, canvasHeight / 2, type.w, type.h, {
          chamfer: { radius: icon.name === "REACT" ? 75 : 20 },
          render: { sprite: { texture: icon.icon, xScale: scale, yScale: scale } },
        });
      });
    }

    function addRect(x, y, w, h, options = {}) {
      const rect = Bodies.rectangle(x, y, w, h, options);
      Composite.add(engine.world, rect);
    }
  }, []);

  return (
    <section className="Skills">
      <h2 className="first-menu-name">
        Skills<span className="point-color">.</span>
      </h2>
      <div className="icons">
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  );
};

export default Skills;
