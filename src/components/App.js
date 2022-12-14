//Estilos
import "../styles/App.scss";
//Hooks
import { useEffect, useState } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
//Componentes
import fetchDataApi from "../services/Api";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  //___________________________________________ VARIABLES ESTADO____________________________________________________________________
  //Datos de la Api.
  const [data, setData] = useState([]);
  // Filter nombre
  const [name, setName] = useState("");
  //Filter especie
  const [specie, setSpecie] = useState("");

  //________________________________________________ USEEFFECT_________________________________________________________________________

  useEffect(() => {
    fetchDataApi().then((dataResults) => {
      setData(dataResults);
    });
  }, []);

  //_______________________________________ FUNCIONES HANDLER_______________________________________________________________________

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleSearchName = (value) => {
    setName(value);
  };
  //_____________________________________FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR_______________________________________________
  // Filtro por nombre
  const filteredCharacters = data.filter((searchCharacter) =>
    searchCharacter.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  //------------------------------- OBTENIENDO RUTAS. Accedemos a la propiedad del objeto URL.----------------------
  // const { pathname } = useLocation();
  // //MatchPath. Si consoleamos vemos que dentro de params está el characterId que nos interesa
  // const dataUrl = matchPath("/character/:characterId", pathname);

  // // Vamos a hacer una validación , así conseguimos el id
  // const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  // //Find. para encontrar en el array el elemento con el id. Nos debería devolver un elemento(un objeto en este caso). Lo pasamos a numero con parseInt
  // const characterFoundId = data.find(
  //   (character) => character.id === parseInt(characterId)
  // );
  const CharacterFound = () => {
    const { pathname } = useLocation();
    //MatchPath. Si consoleamos vemos que dentro de params está el characterId que nos interesa
    const dataUrl = matchPath("/character/:characterId", pathname);

    // Vamos a hacer una validación , así conseguimos el id
    const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

    //Find. para encontrar en el array el elemento con el id. Nos debería devolver un elemento(un objeto en este caso). Lo pasamos a numero con parseInt
    const characterFoundId = data.find(
      (character) => character.id === parseInt(characterId)
    );
    if (characterFoundId) {
      return characterFoundId;
    } else {
      return characterFoundId;
    }
  };

  //_____________________________________________________ RETURN_______________________________________________________________
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* Ruta home */}
        <Route
          path="/"
          element={
            <>
              <Filters
                handleForm={handleForm}
                name={name}
                specie={specie}
                handleSearchName={handleSearchName}
              ></Filters>

              <CharacterList
                characters={filteredCharacters}
                name={name}
              ></CharacterList>
            </>
          }
        ></Route>
        {/* Creamos una nueva ruta dinámina .1.Se compone de la parte estática. 2. la dinámica (el id)*/}
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={CharacterFound()} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
