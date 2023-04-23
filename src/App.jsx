import { useEffect, useState } from "react";
import "./App.css";
import fetchGraphQueryContinents from "./util/fetchGraphQueryContinents";
import ContinentsList from "./continentsList/continentsList";

function App() {
  const [continents, setContinents] = useState("");
  const [chosenContinent, setChosenContinent] = useState("");

  const handleClick = (continentName) => {
    setChosenContinent(continentName);
  };

  useEffect(() => {
    fetchGraphQueryContinents().then((data) => {
      setContinents(data.data.continents);
    });
  }, []);

  return (
    <>
      {continents === "" ? (
        <div>loading</div>
      ) : (
        <ContinentsList continents={continents} handleClick={handleClick} />
      )}
      <div>{chosenContinent}</div>
    </>
  );
}

export default App;
