export function getRandomDivisibleBy500() {
  const min = 1000;
  const max = 5000;
  const step = 500;

  return Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
}
