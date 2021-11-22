import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filmInfo } from "../../helpers/filmInfo";

import { getEntitiesInfoOperation } from "../../redux/films/filmsOperations";
import { getFilms, getEntitiesInfo } from "../../redux/films/filmsSelectors";

import FilmEntitiesStyled from "./FilmEntitiesStyled";

const FilmEntities = ({ selectFilmName }) => {
  const films = useSelector(getFilms);
  const film = filmInfo(films, selectFilmName);
  const entitiesInfo = useSelector(getEntitiesInfo);

  const [currentLink, setcurrentLink] = useState("");

  const dispatch = useDispatch();

  const onHandleClickLink = (e) => {
    const target = e.target.textContent;
    setcurrentLink(target);

    const str = target.split("").splice(22).join("");
    dispatch(getEntitiesInfoOperation(str));
  };

  return (
    <FilmEntitiesStyled>
      {selectFilmName && (
        <div>
          <div className="entitiesInfo_wrapper">
            <h3 className="entitiesInfo_title">characters</h3>
            <ul className="entitiesInfo_list" onClick={onHandleClickLink}>
              {film.characters.map((link) => (
                <li
                  className="characters_item"
                  key={film.characters.indexOf(link)}
                >
                  <p className="characters_link_text">{link}</p>

                  {currentLink === link && entitiesInfo && (
                    <div className="entitiesInfo_box">
                      <p className="entitiesInfo_items">{entitiesInfo.name}</p>
                      <p className="entitiesInfo_items">
                        height: {entitiesInfo.height}
                      </p>
                      <p className="entitiesInfo_items">{entitiesInfo.mass}</p>
                      <p className="entitiesInfo_items">
                        hair color: {entitiesInfo.hair_color}
                      </p>
                      <p className="entitiesInfo_items">
                        skin color: {entitiesInfo.skin_color}
                      </p>
                      <p className="entitiesInfo_items">
                        eye color: {entitiesInfo.eye_color}
                      </p>
                      <p className="entitiesInfo_items">
                        gender: {entitiesInfo.gender}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="entitiesInfo_wrapper">
            <h3 className="entitiesInfo_title">starships</h3>
            <ul className="entitiesInfo_list" onClick={onHandleClickLink}>
              {film.starships.map((link) => (
                <li className="characters_item" key={link}>
                  <p className="characters_link_text">{link}</p>
                  {currentLink === link && entitiesInfo && (
                    <div className="entitiesInfo_box">
                      <p className="entitiesInfo_items">
                        name: {entitiesInfo.name}
                      </p>
                      <p className="entitiesInfo_items">
                        model: {entitiesInfo.model}
                      </p>
                      <p className="entitiesInfo_items">
                        starship class:
                        {entitiesInfo.starship_class}
                      </p>
                      {entitiesInfo.passengers === "unknown" ? null : (
                        <p className="entitiesInfo_items">
                          passanger: {entitiesInfo.passengers}
                        </p>
                      )}

                      <ul className="entitiesInfo_items">
                        {entitiesInfo.films.map((link) => (
                          <li key={link}>{link}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="entitiesInfo_wrapper">
            <h3 className="entitiesInfo_title">planets</h3>
            <ul className="entitiesInfo_list" onClick={onHandleClickLink}>
              {film.planets.map((link) => (
                <li className="characters_item" key={link}>
                  <p className="characters_link_text">{link}</p>
                  {currentLink === link && entitiesInfo && (
                    <div className="entitiesInfo_box">
                      <p className="entitiesInfo_items">
                        name: {entitiesInfo.name}
                      </p>
                      <p className="entitiesInfo_items">
                        diameter: {entitiesInfo.diameter}
                      </p>
                      <p className="entitiesInfo_items">
                        population: {entitiesInfo.population}
                      </p>
                      <p className="entitiesInfo_items">
                        gravity: {entitiesInfo.gravity}
                      </p>
                      <p className="entitiesInfo_items">
                        rotation period: {entitiesInfo.rotation_period}
                      </p>
                      <ul className="entitiesInfo_items">
                        films:
                        {entitiesInfo.films.map((link) => (
                          <li key={link}>{link}</li>
                        ))}
                      </ul>
                      <ul className="entitiesInfo_items">
                        residents:
                        {entitiesInfo.residents &&
                          entitiesInfo.residents.map((link) => (
                            <li key={link}>{link}</li>
                          ))}
                      </ul>
                    </div>
                  )}
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
