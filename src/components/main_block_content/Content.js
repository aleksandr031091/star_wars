import { useSelector } from "react-redux";
import { getFilms, getIsSearch } from "../../redux/films/filmsSelectors";
import { filmInfo } from "../../helpers/filmInfo";
import ContentStyled from "./ContentStyled";
import SearchContent from "../search_content/SearchContent";

const Content = ({ selectFilmName }) => {
  const films = useSelector(getFilms);
  const film = filmInfo(films, selectFilmName);

  const isSearch = useSelector(getIsSearch);

  return (
    <ContentStyled>
      {selectFilmName && !isSearch ? (
        <div>
          <h2 className="film_items">{film.title}</h2>
          <p className="film_items">{film.opening_crawl}</p>
          <p className="film_items">episode: ({film.episode_id})</p>
          <p className="film_items">
            release date: {film.release_date.split("-").reverse().join("-")}
          </p>
          <p className="film_items">director: {film.director}</p>
          <p className="film_items">producer: {film.producer}</p>
        </div>
      ) : (
        <SearchContent />
      )}
    </ContentStyled>
  );
};

export default Content;
