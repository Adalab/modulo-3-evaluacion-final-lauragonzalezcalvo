// import rickandmortyLogo from '../images/rickandmortyLogo.png';
//Estilos
import "../styles/App.scss";
//Hooks
import { useEffect, useState } from "react";
//Componentes
import fetchDataApi from "../services/Api";
import Header from "./Header";
import Filters from "./Filters";

import CharacterList from "./CharacterList";

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
  const filteredCharacters = data.filter((searchCharacter) =>
    searchCharacter.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  //_____________________________________________________ RETURN_______________________________________________________________
  return (
    <div className="App">
      <Header></Header>
      <Filters
        handleForm={handleForm}
        handleSearchName={handleSearchName}
      ></Filters>
      <CharacterList characters={filteredCharacters}></CharacterList>
    </div>
  );
}

export default App;
