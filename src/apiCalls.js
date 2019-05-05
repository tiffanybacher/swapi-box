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

export const getCardData = (category) => {
  const url = `https://swapi.co/api/${category}/`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Card data failed to load');
      } else {
        return response.json();
      }
    });
}

export const getSubData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Data failed to load');
      } else {
        return response.json();
      }
    });
}