import Canvas from "./canvas/Canvas.js";
import Circle from "./canvas/Circle.js";
import Mouse from "./canvas/Mouse.js";
import { pickRandomColor } from "./util/colorUtil.js";

const canvas = new Canvas(document.querySelector("canvas"));
const mouse = new Mouse();

function initCanvas() {
  canvas.resize();

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
  function animate() {
    canvas.clear();
    canvas.drawText(mouse.pos, "Mouse");
    requestAnimationFrame(animate);
  }
  animate();
}

initCanvas();
startAnimation();
