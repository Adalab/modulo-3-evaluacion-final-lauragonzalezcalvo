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
        // value={props.userCityValue}
        onInput={handleName}
        // {/*Por qué si lo llamamos userCityValue nos deja escribir en el input y si lo llamamos igual no userCity*/}
      ></input>
    </>
  );
};
export default FilterByName;
