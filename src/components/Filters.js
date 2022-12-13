import FilterByName from "./FilterByName";

const Filter = (props) => {
  return (
    <form onSubmit={props.handleForm}>
      <FilterByName handleSearchName={props.handleSearchName}></FilterByName>
    </form>
  );
};
export default Filter;
