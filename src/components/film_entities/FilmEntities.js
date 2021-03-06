import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filmInfo } from "../../helpers/filmInfo";

import { getEntitiesInfoOperation } from "../../redux/films/filmsOperations";
import {
  getFilms,
  getEntitiesInfo,
  getIsSearch,
} from "../../redux/films/filmsSelectors";
import ContentItems from "../content_items/ContentItems";

import FilmEntitiesStyled from "./FilmEntitiesStyled";

const FilmEntities = ({ selectFilmName }) => {
  const films = useSelector(getFilms);
  const film = filmInfo(films, selectFilmName);
  const entitiesInfo = useSelector(getEntitiesInfo);
  const isSearch = useSelector(getIsSearch);
  const [currentLink, setcurrentLink] = useState("");

  const dispatch = useDispatch();

  const onHandleClickLink = (e) => {
    const target = e.target;

    setcurrentLink(target.textContent);
    const str = target.textContent;

    dispatch(getEntitiesInfoOperation(str));
  };

  return (
    <FilmEntitiesStyled>
      {selectFilmName && !isSearch && (
        <div className="entitiesInfo_wrapper">
          <div className="entitiesInfo_list_wrapper">
            <h3 className="entitiesInfo_title">characters</h3>
            <ul className="entitiesInfo_list">
              {film.characters.map((link) => (
                <li
                  className="characters_item"
                  key={film.characters.indexOf(link)}
                >
                  <ContentItems
                    currentLink={currentLink}
                    link={link}
                    object={entitiesInfo}
                    onHandleClickLink={onHandleClickLink}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="entitiesInfo_list_wrapper">
            <h3 className="entitiesInfo_title">starships</h3>
            <ul className="entitiesInfo_list">
              {film.starships.map((link) => (
                <li className="characters_item" key={link}>
                  <ContentItems
                    currentLink={currentLink}
                    link={link}
                    object={entitiesInfo}
                    onHandleClickLink={onHandleClickLink}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="entitiesInfo_list_wrapper">
            <h3 className="entitiesInfo_title">planets</h3>
            <ul className="entitiesInfo_list">
              {film.planets.map((link) => (
                <li className="characters_item" key={link}>
                  <ContentItems
                    currentLink={currentLink}
                    link={link}
                    object={entitiesInfo}
                    onHandleClickLink={onHandleClickLink}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </FilmEntitiesStyled>
  );
};

export default FilmEntities;
