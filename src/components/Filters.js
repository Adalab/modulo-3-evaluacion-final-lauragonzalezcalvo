import FilterByName from "./FilterByName";

const Filter = (props) => {
  return (
    <form onSubmit={props.handleForm}>
      <FilterByName
        name={props.name}
        handleSearchName={props.handleSearchName}
      ></FilterByName>
    </form>
  );
};
export default Filter;
