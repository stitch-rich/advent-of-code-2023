import { readFile } from 'node:fs/promises';

import { solve } from './index';

describe('puzzle XX can be solved correctly', () => {
  it('the example text for part 1 passes', async () => {
    const input = await readFile('./src/XX/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(11);
  });

  it('the example text for part 2 passes', async () => {
    const input = await readFile('./src/XX/example.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(11);
  });

  it('the live text for part 1 passes', async () => {
    const input = await readFile('./src/XX/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(21);
  });

  it('the live text for part 2 passes', async () => {
    const input = await readFile('./src/XX/input.txt', {
      encoding: 'utf-8',
    });
    expect(await solve(input)).toBe(21);
  });
});