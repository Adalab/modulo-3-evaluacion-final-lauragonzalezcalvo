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
  //_____________________________________FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR_______________________________________________

  //_____________________________________________________ RETURN_______________________________________________________________
  return (
    <div className="App">
      <Header></Header>
      <Filters handleForm={handleForm}></Filters>
      <CharacterList characters={data}></CharacterList>
    </div>
  );
}

export default App;
