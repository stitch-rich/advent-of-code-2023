import {
  forEach, get, reduce, set
} from 'lodash';

const parseGames = (games: string[]) => {
  return games.map(game => {
    const [name, gameSummary] = game.split(':');
    const id = parseInt(name.replace('Game', '').trim(), 10);
    const draws = gameSummary.split(';')
      .map(draw => {
        const balls = draw.split(',');
        return balls.reduce((acc, ball) => {
          const [count, colour] = ball.trim().split(' ');
          const key = colour.toLowerCase();
          return {
            ...acc,
            [key]: parseInt(count, 10),
          };
        }, {
          red: 0,
          green: 0,
          blue: 0,
        });
      });

    return {
      id,
      draws,
    };
  });
};

export const solve1 = async (input: string): Promise<number> => {
  const games = parseGames(input.split('\n'));

  const cubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  return games
    .filter(g => {
      let valid = true;
      g.draws.forEach((d) => {
        forEach(d, (count, key) => {
          const allowance = get(cubes, key);
          if (allowance < count) {
            valid = false;
          }
        });
      });
      return valid;
    })
    .reduce((acc, g) => acc + g.id, 0);
};

export const solve2 = async (input: string): Promise<number> => {
  const games = parseGames(input.split('\n'));

  return games
    .map(g => {
      const cubes = {
        red: 0,
        green: 0,
        blue: 0,
      };
      g.draws.forEach((d) => {
        forEach(d, (count, key) => {
          const current = get(cubes, key);
          if (current < count) {
            set(cubes, key, count);
          }
        });
      });
      return reduce(cubes, (acc, item) => {
        if (acc) {
          return acc * item;
        }
        return item;
      }, 0);
    })
    .reduce((acc, g) => acc + g, 0);
};