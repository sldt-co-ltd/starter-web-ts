export const generateRandomInt: ((min: number, max: number, randomizer: (any: any) => void) => number) 
  = function(min: number, max: number, randomizer: (any: any) => void): number {
  const bottom: number = Math.ceil(min);
  const top: number = Math.floor(max);
  const width: number = max - min;
  let array = new Uint32Array(1);
  randomizer(array);
  return array[0] % width + min; //최댓값은 제외, 최솟값은 포함
}

export const provideRandomizer: (() => ((any: any) => void)) = function(): ((any: any) => void) {
  const crypto = window.crypto
  if (crypto !== undefined) {
    return crypto.getRandomValues;
  }

  const nodeCrypto = require('crypto');
  return nodeCrypto.randomFillSync;
}

export const generateInt: (min: number, max: number) => number 
  = function(min: number, max: number): number {
  return generateRandomInt(min, max, provideRandomizer());
}
