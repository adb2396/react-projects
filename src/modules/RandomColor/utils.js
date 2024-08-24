function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

export function generateHexColor() {
  const hexVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexVals[getRandomNumber(hexVals.length)];
  }

  return color;
}

export function generateRGBColor() {
  const r = getRandomNumber(256);
  const g = getRandomNumber(256);
  const b = getRandomNumber(256);

  return `rgb(${r}, ${g}, ${b})`;
}
