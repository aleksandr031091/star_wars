import { useDispatch } from "react-redux";
import { getSearchOperation } from "../../redux/films/filmsOperations";
import FrormStyled from "./FrormStyled";

const Form = () => {
  const dispatch = useDispatch();

  const onHandle = () => {
    dispatch(getSearchOperation("attack"));
  };

  const onHandleSearch = () => {};

  return (
    <FrormStyled>
      <button onClick={onHandle}>click</button>
      <input onChange={onHandleSearch} className="input_search" type="text" />
    </FrormStyled>
  );
};

export default Form;
