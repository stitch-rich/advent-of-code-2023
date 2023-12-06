import { readFile } from 'node:fs/promises';

import { solve } from './index';

describe('puzzle 01 can be solved correctly', () => {
  it('the example text for part 1 passes', async () => {
    const input = await readFile('./src/01/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(142);
  });

  it('the example text for part 2 passes', async () => {
    const input = await readFile('./src/01/example_2.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input, true)).toBe(281);
  });

  it('the live text for part 1 passes', async () => {
    const input = await readFile('./src/01/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(54239);
  });

  it('the live text for part 2 passes', async () => {
    const input = await readFile('./src/01/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input, true)).toBe(55343);
  });
});