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
        {/* {props.character.episode}NUMERO DE EPISODIOS */}
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

// {/* <img
//         className="characters___Articles___Item--img"
//         src={character.image}
//         alt={`Foto de ${character.name}`}
//       />
//       <h3 className="characters___Articles___Item--h3">{character.name}</h3>
//       <p className="characters___Articles___Item--p">{character.species}</p> */}
//       <p className="characters___Articles___Item--p">
//         {character.origin.map((originName) => {
//           return <h4>{originName.name}</h4>;
//         })}
//       </p>
//       {/* <p className="characters___Articles___Item--p">{character.episode}</p>
//      */}

//
