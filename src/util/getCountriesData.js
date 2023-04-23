let countryApiURL = "https://restcountries.com/v3.1/name/";

function fetchData(country) {
  return fetch(countryApiURL + country)
    .then((data) => {
      return data.json();
    })
    .then((countryData) => {
      try {
        return {
          found: true,
          name: countryData[0].name.official,
          capital: countryData[0].capital[0],
          population: countryData[0].population,
          currency: Object.values(countryData[0].currencies)[0].name,
          subregion: countryData[0].subregion,
          languages: Object.values(countryData[0].languages),
        };
      } catch (e) {
        return {
          found: false,
          name: country,
        };
      }
    });
}

function getCountriesData(countries) {
  const countryDataArray = [];
  for (let i = 0; i < countries.length; i++) {
    fetchData(countries[i].name).then((data) => {
      countryDataArray.push(data);
    });
  }
  console.log(countryDataArray);
  return countryDataArray;
}

export default getCountriesData;
