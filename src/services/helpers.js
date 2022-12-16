export const keyValuePairsIntoArray = (obj, str) => {
  if (obj !== null && obj !== undefined && str)
    return Object.entries(obj)
      .filter(([key, val]) => key.startsWith(str) && val !== null)
      .map(([_, val]) => val);
};

export const idGenerator = () => {
  return Math.random() * 1000000000000;
};
