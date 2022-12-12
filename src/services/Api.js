const fetchDataApi = () => {
  return (
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      // como queremos acceder al results
      .then((responseData) => {
        const dataResults = responseData.results;
        return dataResults;
      })
  );
};
export default fetchDataApi;
