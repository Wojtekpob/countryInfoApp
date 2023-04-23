function sortByCountryName(country1, country2) {
  if (country1.name < country2.name) {
    return -1;
  }
  if (country1.name > country2.name) {
    return 1;
  }
  return 0;
}

function generateCountries(numberToGenerate, countries) {
  if (
    Math.floor(numberToGenerate) != numberToGenerate ||
    numberToGenerate > 10 ||
    numberToGenerate < 2
  ) {
    throw new Error("Input has to be a natural number and be between 2 and 10");
  }
  const shuffled = countries.slice();
  let i = shuffled.length;
  const minIndex = i - numberToGenerate;
  while (i-- > minIndex) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled.slice(minIndex).sort(sortByCountryName);
}

export default generateCountries;
