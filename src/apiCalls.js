export const getRandomFilm = (ranNum) => {
  const url = `https://swapi.co/api/films/${ranNum}/`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Film failed to load');
      } else {
        return response.json();
      }
    });
}