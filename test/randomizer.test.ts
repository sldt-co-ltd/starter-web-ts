import { generateInt } from '@/utils/randomizer';

describe('randomizer', () => {
  it('generates random integers', () => {
  
    for (let i = 0; i < 10000; i++) {
      const randomInteger = generateInt(1, 100);
      expect(randomInteger).toBeGreaterThanOrEqual(1);
      expect(randomInteger).toBeLessThan(100);
    }
  });
});
