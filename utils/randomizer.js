export const generateInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const width = max - min;
  const crypto = window.crypto || window.msCrypto;
  var array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % width + min; //최댓값은 제외, 최솟값은 포함
}