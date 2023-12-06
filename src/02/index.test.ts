import { readFile } from 'node:fs/promises';

import { solve1, solve2 } from './index';

describe('puzzle 02 can be solved correctly', () => {
  it('the example text for part 1 passes', async () => {
    const input = await readFile('./src/02/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve1(input)).toBe(8);
  });

  it('the example text for part 2 passes', async () => {
    const input = await readFile('./src/02/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve2(input)).toBe(2286);
  });

  it('the live text for part 1 passes', async () => {
    const input = await readFile('./src/02/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve1(input)).toBe(2085);
  });

  it('the live text for part 2 passes', async () => {
    const input = await readFile('./src/02/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve2(input)).toBe(79315);
  });
});