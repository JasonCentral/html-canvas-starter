const PI = Math.PI;

async function timeout(timeoutMS) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), timeoutMS);
  });
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function distSquared(v1, v2) {
  return v1.reduce((acc, _, idx) => acc + (v1[idx] - v2[idx]) ** 2, 0);
}

export { timeout, randInt, rand, distSquared, PI };
