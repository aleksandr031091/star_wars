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
  };

  const onHandleSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <FrormStyled onSubmit={onHandleSubmit}>
      <div>
        <input
          onChange={onHandleSearch}
          className="input_search"
          type="text"
          placeholder="Skywalker"
        />
        <button>click</button>
      </div>
    </FrormStyled>
  );
};

export default Form;
