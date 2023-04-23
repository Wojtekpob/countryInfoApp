function generateCountries(numberToGenerate, countries) {
  if (
    Math.floor(numberToGenerate) != numberToGenerate ||
    numberToGenerate > 10 ||
    numberToGenerate < 2
  ) {
    throw new Error("Input has to be a natural number and be between 2 and 10");
  }
  numberToGenerate = Math.min(countries.length, numberToGenerate);
  const shuffled = countries.slice();
  let i = shuffled.length;
  const minIndex = i - numberToGenerate;
  while (i-- > minIndex) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled.slice(minIndex);
}

export default generateCountries;
