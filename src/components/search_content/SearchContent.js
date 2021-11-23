import { useSelector } from "react-redux";
import { getSearching } from "../../redux/films/filmsSelectors";
import ContentItems from "../content_items/ContentItems";
import SearchContentStyled from "./SearchContentStyled";

const SearchContent = () => {
  const searchResult = useSelector(getSearching);

  const noResultSearch = (arr, str) => {
    const result = arr.filter((arr) => arr.length > 0);

    if (result.length === 0) {
      return str;
    }
    return;
  };

  return (
    <SearchContentStyled>
      <p>{noResultSearch(searchResult, "No results")}</p>
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
