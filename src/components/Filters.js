import FilterByName from "./FilterByName";

const Filter = (props) => {
  return (
    <form onSubmit={props.handleForm}>
      <FilterByName></FilterByName>
    </form>
  );
};
export default Filter;
