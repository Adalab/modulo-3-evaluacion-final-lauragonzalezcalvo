import CharacterCard from "./CharacterCard";
import "../styles/components/CharacterList.scss";

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
      return (
        <li className="characters__message">
          <article className="characters__message-text">
            <p>
              {`No hay ningún personaje que coincida con la palabra ${name}.`}
            </p>
          </article>
        </li>
      );
    }
  };

  return (
    <section className="characters">
      <ul className="characters__List">{messageError()}</ul>
    </section>
  );
};
export default CharacterList;
