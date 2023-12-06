export const solve = async (input: string, includeText?: boolean): Promise<number> => {
  const numbers: [string, string][] = [
    ['one', 'o1e'],
    ['two', 't2o'],
    ['three', 't3e'],
    ['four', 'f4r'],
    ['five', 'f5e'],
    ['six', 's6x'],
    ['seven', 's7n'],
    ['eight', 'e8t'],
    ['nine', 'n9e'],
  ];
  const calibrationValues = input.split('\n')
    .map(line => {
      let filterLine = line;
      if (includeText) {
        numbers.forEach(([num, val]) => {
          filterLine = filterLine.replaceAll(num, val);
        });
      }
      const values = filterLine.split('').filter(n => !Number.isNaN(parseInt(n, 10)));
      return parseInt(`${ values[0] }${ values[values.length - 1] }`, 10);
    });
  return calibrationValues.reduce((acc, item) => acc + item, 0);
};