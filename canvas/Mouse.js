export default class Mouse {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    document.addEventListener("mousemove", (evt) =>
      this.updatePosition(evt.clientX, evt.clientY)
    );
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
  }

  get pos() {
    return [this.x, this.y];
  }
}
