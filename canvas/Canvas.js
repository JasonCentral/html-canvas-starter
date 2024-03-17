import { PI } from "../util/util.js";

class Canvas {
  #canvas;
  #context;

  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = canvas.getContext("2d");
  }

  drawLine(start, end) {
    this.#context.beginPath();
    this.#context.moveTo(...start);
    this.#context.lineTo(...end);
    this.#context.stroke();
  }

  drawArc(startPos, radius, startAngle, endAngle, drawCC = false) {
    this.#context.beginPath();
    this.#context.arc(...startPos, radius, startAngle, endAngle, drawCC);
    this.#context.stroke();
  }

  drawCircle(startPos, radius, fill = false, color = "black") {
    this.drawArc(startPos, radius, 0, 2 * PI, false);
    this.#context.fillStyle = color;
    fill && this.#context.fill();
  }

  drawText(pos, text) {
    this.#context.fillText(text, ...pos);
  }

  resize() {
    //   const tempImage = context.getImageData(0, 0, canvas.width, canvas.height);
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;
    //   context.putImageData(tempImage, 0, 0);
  }

  clear() {
    this.#context.reset();
  }
}

export default Canvas;
