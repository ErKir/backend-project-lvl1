// progression func
const generateProgression = (startNum, step, numberOfItems) => {
  let progression = [startNum];
  for (let i = 0; i < numberOfItems; i += 1) {
    const newItem = progression[i] + step;
    progression = [...progression, newItem];
  }
  return progression;
};

export default generateProgression;
