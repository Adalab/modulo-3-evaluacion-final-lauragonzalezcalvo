const FilterByName = (props) => {
  const handleName = (ev) => {
    props.handleSearchName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="city">Busca tu personaje</label>
      <input
        type="text"
        id="name"
        name="name"
        value={props.name}
        onInput={handleName}
      ></input>
    </>
  );
};
export default FilterByName;
