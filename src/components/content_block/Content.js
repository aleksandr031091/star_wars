import { useSelector } from "react-redux";
import { getFilms } from "../../redux/films/filmsSelectors";
import { filmInfo } from "../../helpers/filmInfo";
import ContentStyled from "./ContentStyled";

const Content = ({ selectFilmName }) => {
  const films = useSelector(getFilms);
  const film = filmInfo(films, selectFilmName);

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
    </ContentStyled>
  );
};

export default Content;
