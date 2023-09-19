export function getRandomDivisibleBy500() {
  const min = 0;
  const max = 1500;
  const step = 500;

  return Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
}
