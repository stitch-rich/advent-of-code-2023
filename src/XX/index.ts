// import { readFile } from 'node:fs/promises';

export const solve = async (input: string): Promise<number> => {
  return input.length;
};

// const run = async (): Promise<{
//   answer1: number
//   answer2: number
// }> => {
//   const input = await readFile('./src/XX/input.txt', {
//     encoding: 'utf-8',
//   });
//   const answer1 = await solve(input);
//   const answer2 = await solve(input);

//   return {
//     answer1,
//     answer2,
//   };
// };

// run().then((res) => {
//   console.log(res);
// });