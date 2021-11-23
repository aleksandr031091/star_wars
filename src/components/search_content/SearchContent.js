import { useState } from "react";
import { useSelector } from "react-redux";
import { getSearching } from "../../redux/films/filmsSelectors";
import ContentItems from "../content_items/ContentItems";
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
                        <ContentItems object={obj} />
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
