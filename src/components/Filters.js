import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../styles/components/Filters.scss";

const Filter = (props) => {
  return (
    <form onSubmit={props.handleForm} className="form">
      <FilterByName
        name={props.name}
        handleSearchName={props.handleSearchName}
      ></FilterByName>
      <FilterBySpecie
        filterSpecie={props.filterSpecie}
        species={props.species}
        handleFilterSpecies={props.handleFilterSpecies}
      ></FilterBySpecie>
    </form>
  );
};
export default Filter;
