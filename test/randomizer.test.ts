import { generateRandomInt } from '@/utils/randomizer';

const crypto = require('crypto');
const randomizer = crypto.randomFillSync;
// const crypto = window.crypto
// const randomizer = crypto.getRandomValues;

describe('randomizer', () => {
  it('generates random integers', () => {
  
    for (let i = 0; i < 10000; i++) {
      const randomInteger = generateRandomInt(1, 100, randomizer);
      expect(randomInteger).toBeGreaterThanOrEqual(1);
      expect(randomInteger).toBeLessThan(100);
    }
  });
});
