import CanvasShape from "./CanvasShape.js";

export default class Circle extends CanvasShape {
  constructor({ canvas, x, y, r, color = "black" }) {
    super(canvas);
    this._x = x;
    this._y = y;
    this._r = r;
    this._color = color;
  }

  draw() {
    if (
      this._x > this._canvas.width + this._r ||
      this._y > this._canvas.height + this._r
    )
      return;
    this._canvas.drawCircle([this._x, this._y], this._r, true, this._color);
  }
}
