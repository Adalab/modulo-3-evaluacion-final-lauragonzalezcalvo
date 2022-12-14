import { Link } from "react-router-dom";
import "../styles/components/CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <li className="characters___Articles">
      <Link className="characters__Link" to={`/character/${character.id}`}>
        <article className="characters___Articles___Item">
          <img
            className="characters___Articles___Item--img"
            src={character.image}
            alt={`Foto de ${character.name}`}
          />
          <h3 className="characters___Articles___Item--h3">{character.name}</h3>
          <p className="characters___Articles___Item--p">{character.species}</p>
        </article>
      </Link>
    </li>
  );
};
export default CharacterCard;
