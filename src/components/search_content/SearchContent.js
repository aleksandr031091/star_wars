import { useSelector } from "react-redux";
import { getSearching } from "../../redux/films/filmsSelectors";
import SearchContentStyled from "./SearchContentStyled";

const SearchContent = () => {
  const searchResult = useSelector(getSearching);

  return (
    <SearchContentStyled>
      <ul>
        {searchResult &&
          searchResult.map(
            (arr) =>
              arr.length !== 0 && (
                <li className="list_items" key={searchResult.indexOf(arr)}>
                  <ul>
                    {arr.map((obj) => (
                      <li
                        className="items"
                        key={(obj.title && obj.title) || obj.name}
                      >
                        <p>{obj.title && obj.title}</p>
                        <p className="">name: {obj.name}</p>
                        <p className="">height: {obj.height}</p>
                        {obj.mass === "unknown" ? null : (
                          <p className="">mass: {obj.mass}</p>
                        )}
                        <p className="">hair color: {obj.hair_color}</p>
                        <p className="">skin color: {obj.skin_color}</p>
                        <p className="">eye color: {obj.eye_color}</p>
                        <p className="">gender: {obj.gender}</p>
                        <p className="">model: {obj.model}</p>
                        <p className="">
                          starship class:
                          {obj.starship_class}
                        </p>
                        {obj.passengers &&
                        obj.passengers === "unknown" ? null : (
                          <p className="">passanger: {obj.passengers}</p>
                        )}
                        <p className="entitiesInfo_items">
                          diameter: {obj.diameter}
                        </p>
                        <p className="entitiesInfo_items">
                          population: {obj.population}
                        </p>
                        <p className="entitiesInfo_items">
                          gravity: {obj.gravity}
                        </p>
                        <p className="entitiesInfo_items">
                          rotation period: {obj.rotation_period}
                        </p>
                        {obj.films && (
                          <ul className="">
                            films:
                            {obj.films.map((link) => (
                              <li className="characters_link_text" key={link}>
                                {link}
                              </li>
                            ))}
                          </ul>
                        )}

                        {obj.residents && (
                          <ul className="">
                            residents:
                            {obj.residents.map((link) => (
                              <li className="characters_link_text" key={link}>
                                {link}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              )
          )}
      </ul>
    </SearchContentStyled>
  );
};

export default SearchContent;
