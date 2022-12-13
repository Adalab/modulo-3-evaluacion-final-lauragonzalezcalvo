import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);
  return (
    // <li className="characters___Articles">
    <article className="characters___Articles___Item">
      <img
        className="characters___Articles___Item--img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
      />
      <h3 className="characters___Articles___Item--h3">
        {props.character.name}
      </h3>
      <p className="characters___Articles___Item--p">
        {props.character.species}
      </p>
      <p>{props.character.origin.name}</p>
      <p className="characters___Articles___Item--p">
        {props.character.episode.length}
      </p>
      <p className="characters___Articles___Item--p">
        {props.character.status}
      </p>
      <Link to="/">Volver</Link>
    </article>
    // </li>
  );
};
export default CharacterDetail;
