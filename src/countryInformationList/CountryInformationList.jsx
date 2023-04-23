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
  return (
    <div className={"countryBox"}>
      {countriesData.map((country) => (
        <div className={"country"} key={"country " + country.name}>
          <>
            {country.found && (
              <div>
                <p>{country.name}</p>
                <p>Capital: {country.capital}</p>
                <p>Languages: {separateList(country.languages)}</p>
                <p>Currency: {country.currency}</p>
                <p>Region: {country.subregion}</p>
                <p>Population: {country.population}</p>
              </div>
            )}
            {!country.found && (
              <div>
                <p>No information found about: {country.name}</p>
                <p>Capital: </p>
                <p>Languages: </p>
                <p>Currency: </p>
                <p>Region: </p>
                <p>Population: </p>
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
}

export default CountryInformationList;
