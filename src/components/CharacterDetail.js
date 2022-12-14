import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return true;
  }
  return (
    <section className="characterSection">
      <div className="goBack">
        <Link className="goBack-icon" to="/">
          Go back
        </Link>
      </div>
      <section className="character">
        <article className="character__DetailItem">
          <img
            className="character__DetailItem-img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
          />
          <section className="charInfo">
            <h3 className="charInfo-h3">{props.character.name}</h3>
            <p className="charInfo-p">{`Specie: ${props.character.species}`}</p>
            <p>{`Origin: ${props.character.origin.name}`}</p>
            <p className="charInfo-p">{`Episodie: ${props.character.episode.length}`}</p>
            <p className="charInfo-p">{`Status: ${props.character.status}`}</p>
          </section>
        </article>
      </section>
    </section>
  );
};
export default CharacterDetail;
