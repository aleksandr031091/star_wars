import { useSelector } from "react-redux";
import { getFilms } from "../../redux/films/filmsSelectors";
import ContentStyled from "./ContentStyled";

const Content = ({ selectFilmName }) => {
  const films = useSelector(getFilms);

  const film = films.reduce((acc, film) => {
    if (film.title === selectFilmName) {
      acc = film;
    }
    return acc;
  }, {});

  console.log(film);

  return (
    <ContentStyled>
      <div className="film_info">
        <h2 className="film_title">{film.title}</h2>
        <p className="film_description">{film.opening_crawl}</p>
        <p className="film_episode">episode ({film.episode_id})</p>
        <p className="film_date_release">{film.release_date}</p>
        <p className="film_director">{film.director}</p>
        <p className="film_producer">{film.producer}</p>
      </div>

      <div className="characters_wrapper">
        <h3 className="characters_title">characters</h3>
        <ul className="characters_list">
          {selectFilmName &&
            film.characters.map((link) => (
              <li
                className="characters_item"
                key={film.characters.indexOf(link)}
              >
                {link}
              </li>
            ))}
        </ul>
      </div>
    </ContentStyled>
  );
};

export default Content;
