export const deepClone = (object: Object) => {
  return JSON.parse(JSON.stringify(object));
};

export const selectRandomFromList = (list: Array<any>) => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  return list[getRandomInt(list.length)];
};

export const roundDown = (n: number) => Math.floor(n);
