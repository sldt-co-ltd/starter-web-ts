export const generateRandomInt: ((min: number, max: number, randomizer: (any: any) => void) => number) 
  = function(min: number, max: number, randomizer: (any: any) => void) {
  const bottom: number = Math.ceil(min);
  const top: number = Math.floor(max);
  const width: number = max - min;
  let array = new Uint32Array(1);
  randomizer(array);
  return array[0] % width + min; //최댓값은 제외, 최솟값은 포함
}