import CharacterCard from "./CharacterCard";
const CharacterList = ({ characters }) => {
  const elementList = characters.map((character) => {
    return (
      <CharacterCard character={character} key={character.id}></CharacterCard>
    );
  });

  return (
    <section className="characters">
      <ul className="characters___List">{elementList}</ul>;
    </section>
  );
};
export default CharacterList;
