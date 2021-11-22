export const filmInfo = (films, selectFilmName) => {
  return films.reduce((acc, film) => {
    if (film.title === selectFilmName) {
      acc = film;
    }
    return acc;
  }, {});
};
