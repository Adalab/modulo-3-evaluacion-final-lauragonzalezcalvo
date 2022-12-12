const CharacterCard = ({ character }) => {
  console.log(character);
  return (
    <li className="characters___Articles">
      <article className="characters___Articles___Item">
        <img
          className="characters___Articles___Item--img"
          src={character.image}
          alt={`Foto de ${character.name}`}
        />
        <h3 className="characters___Articles___Item--h3">{character.name}</h3>
        <p className="characters___Articles___Item--p">{character.species}</p>
      </article>
    </li>
  );
};
export default CharacterCard;
