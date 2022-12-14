import "../styles/components/FilterByName.scss";

const FilterByName = (props) => {
  const handleName = (ev) => {
    props.handleSearchName(ev.target.value);
  };
  return (
    <fieldset className="form__names">
      <label htmlFor="city" className="form__names-label">
        Busca tu personaje
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={props.name}
        onInput={handleName}
        className="form__names-input"
      ></input>
    </fieldset>
  );
};
export default FilterByName;
