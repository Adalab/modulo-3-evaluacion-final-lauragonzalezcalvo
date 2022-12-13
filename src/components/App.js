// import rickandmortyLogo from '../images/rickandmortyLogo.png';
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
  //Datos de la Api. Lo guardamos como un array vacío
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  //_____________________________________________ USEEFFECT_________________________________________________________________________
  // Nos permite hacer la petición al servidor una vez para que no se ejecute constantemente.
  useEffect(() => {
    fetchDataApi().then((dataResults) => {
      setData(dataResults);
    });
  }, []);

  //_______________________________________ FUNCIONES HANDLER_______________________________________________________________________
  //Para evitar el envío del formulario.
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  //Para modificar nuestra variable estado, que recoge el valor de nuestro input
  const handleSearchName = (value) => {
    setName(value);
  };
  //_____________________________________FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR_______________________________________________
  // Vamos a filtrar por nombre
  //FALTA Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".

  const filteredCharacters = data.filter((searchCharacter) =>
    searchCharacter.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
  //-------------- OBTENIENDO RUTAS.Se puede poner url.pathname. Accedemos a la propiedad del objeto URL.----------------------
  const { pathname } = useLocation();
  //MatchPath. Si consoleamos vemos que dentro de params está el characterId que nos interesa
  const dataUrl = matchPath("/character/:characterId", pathname);

  // Vamos a hacer una validación por que no todas las rutas tienen un id.Y nos aparece null en la home. Así conseguimos el id
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  //Find. para encontrar en el array el elemento con el id. Nos debería devolver un elemento. Lo pasamos a numero con parseInt
  const characterFoundId = data.find(
    (character) => character.id === parseInt(characterId)
  );

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
                handleSearchName={handleSearchName}
              ></Filters>
              <CharacterList characters={filteredCharacters}></CharacterList>
            </>
          }
        ></Route>
        {/* Creamos una nueva ruta dinámina .1.Se compone de la parte estática. 2. Y la dinámica (el id)*/}
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFoundId} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
