
function scale(n, inputScale, outputScale){
  const [inputLow, inputHigh] = inputScale;
  const [outputLow, outputHigh] = outputScale;
  const oldRange = inputHigh - inputLow;
  const newRange = outputHigh - outputLow;
  return ((n - inputLow) * newRange / oldRange) + outputLow;
}

const inputScale = [1, 5];
const outputScale = [0.5, 10];

const value = 1;

console.log(scale(value, inputScale, outputScale))
