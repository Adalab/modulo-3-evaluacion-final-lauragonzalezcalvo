import CharacterCard from "./CharacterCard";
const CharacterList = ({ characters, name }) => {
  const elementList = characters.map((character) => {
    return (
      <CharacterCard character={character} key={character.id}></CharacterCard>
    );
  });

  const messageError = () => {
    if (characters.length !== 0) {
      return elementList;
    } else {
      return `No hay ningún personaje que coincida con la palabra ${name}.`;
    }
  };

  console.log(characters);

  return (
    <section className="characters">
      <ul className="characters___List">{messageError()}</ul>
    </section>
  );
};
export default CharacterList;
