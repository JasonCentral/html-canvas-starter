import { timeout, randInt } from "./util.js";

let colorArr = ["#10454F", "#506266", "#818274", "#A3AB78", "#BDE038"];

function pickRandomColor() {
  return colorArr.at(randInt(0, colorArr.length - 1));
}

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6) + "";
}

async function fetchColorTheme(hex) {
  try {
    const res = await Promise.race([
      fetch(`https://www.thecolorapi.com/scheme?hex=${hex}`),
      timeout(500),
    ]);
    const data = await res.json();
    const colors = data.colors.map((color) => color.hex.value);

    if (!colors.every((hexColor) => /^#[0-9A-F]{6}$/i.test(hexColor))) {
      throw new Error("Some hex values are corrupted.");
    }

    colorArr = colors;
  } catch (err) {
    console.error(err);
  }
}

async function fetchRandomColorTheme() {
  await fetchColorTheme(randomHexColorCode());
}

export { pickRandomColor, fetchRandomColorTheme };
