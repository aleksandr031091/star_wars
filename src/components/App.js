import { useEffect, useState } from "react";
import { getAllFilmsOperation } from "../redux/films/filmsOperations";
import { useDispatch } from "react-redux";
import Main from "./main/Main";
import NavBar from "./nav_bar/NavBar";
import MainBlock from "./main_block/MainBlock";

const App = () => {
  const [selectFilmName, setSelectFilmName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilmsOperation());
  }, [dispatch]);

  return (
    <Main>
      <NavBar setSelectFilmName={setSelectFilmName} />
      <MainBlock selectFilmName={selectFilmName} />
    </Main>
  );
};

export default App;
