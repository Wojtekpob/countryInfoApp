/* eslint-disable react/prop-types */

const ContinentsList = ({ continents, handleClick }) => {
  return (
    <div>
      {continents.map((continent) => (
        <div className={"continent"} key={"continent " + continent.name}>
          {continent.name}
          <button onClick={() => handleClick(continent.name)}>
            choose this continent
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContinentsList;
