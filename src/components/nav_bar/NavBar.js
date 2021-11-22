// import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
// import { selectFilm } from "../../redux/films/filmsActions";
import { getFilms } from "../../redux/films/filmsSelectors";
import NavBarStyled from "./NavBarStyled";

const NavBar = ({ setSelectFilmName }) => {
  const films = useSelector(getFilms);

  //   const dispatch = useDispatch();
  const onHandleClickFilm = (e) => {
    setSelectFilmName(e.target.textContent);
    // dispatch(selectFilm(e.target.textContent));
  };

  return (
    <NavBarStyled>
      <ul className="nav_list">
        {films.map((film) => (
          <li
            className="navList_item"
            key={film.episode_id}
            onClick={onHandleClickFilm}
          >
            {film.title}
          </li>
        ))}
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
