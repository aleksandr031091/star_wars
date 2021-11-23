import { useEffect, useState } from "react";
import { getAllFilmsOperation } from "../redux/films/filmsOperations";
import { useDispatch } from "react-redux";
import Section from "./section/Section";
import NavBar from "./nav_bar/NavBar";
import MainBlock from "./main_block/MainBlock";

const App = () => {
  const [selectFilmName, setSelectFilmName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilmsOperation());
  }, [dispatch]);

  return (
    <Section>
      <NavBar setSelectFilmName={setSelectFilmName} />
      <MainBlock selectFilmName={selectFilmName} />
    </Section>
  );
};

export default App;
