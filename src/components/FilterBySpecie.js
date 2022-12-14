const FilterBySpecie = (props) => {
  return (
    <fieldset className="form__species">
      <label> {props.species} </label>
      <label htmlFor="specie" className="form__species-label">
        Human
      </label>
      <input id="specie" type="checkbox" className="form__species-input" />
      <label htmlFor="specie" className="form__species-label">
        Alien
      </label>
      <input id="specie" type="checkbox" className="form__species-input" />
    </fieldset>
  );
};
export default FilterBySpecie;
