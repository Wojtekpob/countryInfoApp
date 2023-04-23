/* eslint-disable react/prop-types */
import "./style.css";

const ContinentsList = ({ continents, handleClick }) => {
  return (
    <div>
      {continents.map((continent) => (
        <div className={"continent"} key={"continent " + continent.name}>
          <button
            className={"button"}
            onClick={() => handleClick(continent.name)}
          >
            {continent.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContinentsList;
