import { useSelector } from "react-redux";
import { getSearching } from "../../redux/films/filmsSelectors";
import SearchContentStyled from "./SearchContentStyled";

const SearchContent = () => {
  const searchResult = useSelector(getSearching());
  console.log(searchResult);
  return <SearchContentStyled></SearchContentStyled>;
};

export default SearchContent;
