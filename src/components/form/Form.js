import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsSearch } from "../../redux/films/filmsActions";
import { getSearchOperation } from "../../redux/films/filmsOperations";
import FrormStyled from "./FrormStyled";

const Form = () => {
  const [searchState, setSearchState] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!searchState) return;
    dispatch(setIsSearch(true));
    dispatch(getSearchOperation(searchState));
    setSearchState("");
  };

  const onHandleSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <FrormStyled onSubmit={onHandleSubmit}>
      <div>
        <input
          className="input_search"
          type="text"
          value={searchState}
          onChange={onHandleSearch}
          placeholder="Skywalker"
        />
        <button className="btn_search">Search</button>
      </div>
    </FrormStyled>
  );
};

export default Form;
