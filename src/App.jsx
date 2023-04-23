import { useEffect, useState } from "react";
import "./App.css";
import ContinentsList from "./continentsList/continentsList";
import fetchGraphQLQuery from "./util/fetchGraphQLQuery";
import generateCountries from "./util/generateCountries";
import getCountriesData from "./util/getCountriesData";
import CountryInformationList from "./countryInformationList/CountryInformationList";

function App() {
  const [continents, setContinents] = useState("");
  const [chosenContinent, setChosenContinent] = useState("");
  const [numberOfCountries, setNumberOfCountries] = useState(2);
  const [countryData, setCountryData] = useState("");
  const [helping, setHelping] = useState(true);
  const [firstRun, setFirstRun] = useState(true);

  const handleClick = (continentName) => {
    setChosenContinent(continentName);
  };

  useEffect(() => {
    setTimeout(() => {
      setHelping(!helping);
    }, 1000);
  }, [countryData]);

  const handleCountryGenerate = () => {
    if (chosenContinent == "") {
      throw new Error("First choose the continent");
    }

    let continentCountriesData = findContinentData().countries;

    let countries = generateCountries(
      numberOfCountries,
      continentCountriesData
    );
    setFirstRun(false);
    setCountryData("");
    setCountryData(getCountriesData(countries));
  };

  const findContinentData = () => {
    return continents.find((object) => object.name === chosenContinent);
  };

  useEffect(() => {
    fetchGraphQLQuery().then((data) => {
      setContinents(data.data.continents);
    });
  }, []);

  return (
    <>
      {continents === "" ? (
        <div>loading...</div>
      ) : (
        <ContinentsList
          className="board"
          continents={continents}
          handleClick={handleClick}
        />
      )}
      <div>
        <div className={"bottomDesc"}>
          <h2>Chosen continent: {chosenContinent}</h2>
        </div>
      </div>
      <div className={"bottomDesc"}>
        <h2>Number of countries to generate:</h2>
      </div>

      <div className={"bottomDesc"}>
        <input
          type="number"
          required
          value={numberOfCountries}
          min="2"
          max="10"
          onChange={(e) => setNumberOfCountries(e.target.value)}
        />
      </div>
      <div className={"bottomDesc"}>
        <button
          className="submitButton"
          onClick={() => {
            try {
              handleCountryGenerate();
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          Generate random countries
        </button>
      </div>

      <div>
        {countryData == "" ? (
          <div>{!firstRun && <div>Loading...</div>}</div>
        ) : (
          <CountryInformationList countriesData={countryData} />
        )}
      </div>
    </>
  );
}

export default App;
