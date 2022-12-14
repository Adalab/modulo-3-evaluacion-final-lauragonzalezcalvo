import CharacterCard from "./CharacterCard";
import "../styles/components/SectionListCharacters.scss";

const CharacterList = ({ characters, name }) => {
  characters.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  // revisar cuando se hace el filtro como aparencen los elementos
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

  return (
    <section className="characters">
      <ul className="characters__List">{messageError()}</ul>
    </section>
  );
};
export default CharacterList;
