/* eslint-disable react/prop-types */
import "./style.css";

function separateList(array) {
  let out = "";
  for (let i = 0; i < array.length; i++) {
    out += array[i];
    if (i < array.length - 1) {
      out += ", ";
    }
  }
  return out;
}

function CountryInformationList({ countriesData }) {
  countriesData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div className={"countryBox"}>
      {countriesData.map((country) => (
        <div key={"country " + country.name}>
          <>
            {country.found && (
              <div className={"country"}>
                <p>
                  <h3>{country.name}</h3>
                </p>
                <p>
                  <h4>Capital: {country.capital}</h4>
                </p>
                <p>
                  <h4>Languages: {separateList(country.languages)}</h4>
                </p>
                <p>
                  <h4>Currency: {country.currency}</h4>
                </p>
                <p>
                  <h4>Region: {country.subregion}</h4>
                </p>
                <p>
                  <h4>Population: {country.population}</h4>
                </p>
              </div>
            )}
            {!country.found && (
              <div>
                <p>
                  <h3>No information found about: {country.name}</h3>
                </p>
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
}

export default CountryInformationList;
