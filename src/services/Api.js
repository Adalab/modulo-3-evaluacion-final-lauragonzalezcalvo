const fetchDataApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((responseData) => {
      const dataResults = responseData.results;
      return dataResults;
    });
};

export default fetchDataApi;
