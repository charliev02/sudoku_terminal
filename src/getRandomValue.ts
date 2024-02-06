const getRandomValue = (
  valuesToAvoid: number[] = [],
  arrayValues: number[]
): number => {
  // console.debug('🚀 ~ valuesToAvoid:', valuesToAvoid);
  const availableValues = arrayValues.filter(
    value => !valuesToAvoid.includes(value)
  );
  // console.debug('🚀 ~ availableValues:', availableValues);

  const value =
    availableValues[Math.floor(Math.random() * availableValues.length)] || 0;
  // console.debug('🚀 ~ will return:', value);
  return value;
};

export default getRandomValue;
