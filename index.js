import Canvas from "./canvas/Canvas.js";
import Circle from "./canvas/Circle.js";
import Mouse from "./canvas/Mouse.js";
import { pickRandomColor } from "./util/colorUtil.js";

const canvas = new Canvas(document.querySelector("canvas"));
const mouse = new Mouse();

function initCanvas() {
  canvas.resize();

  let canvasResizeEvent;
  window.addEventListener("resize", function () {
    clearTimeout(canvasResizeEvent);
    canvasResizeEvent = setTimeout(canvas.resize.bind(canvas), 100);
  });

  document.addEventListener("click", function (evt) {
    console.log(`${evt.x}, ${evt.y}`);
    console.log(`${mouse.x}, ${mouse.y}`);
  });
}

function startAnimation() {
  const ball = new Circle({
    canvas,
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 50,
    color: "red",
  });

  function animate() {
    canvas.clear();
    canvas.drawText(mouse.pos, "Mouse");
    ball.draw();
    requestAnimationFrame(animate);
  }
  animate();
}

initCanvas();
startAnimation();
