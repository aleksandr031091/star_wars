import { useEffect, useState } from "react";
import { getAllFilmsOperation } from "../redux/films/filmsOperations";
import { useDispatch } from "react-redux";
import Section from "./section/Section";
import NavBar from "./nav_bar/NavBar";
import Main from "./main/Main";

const App = () => {
  const [selectFilmName, setSelectFilmName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilmsOperation());
  }, [dispatch]);

  return (
    <Section>
      <NavBar setSelectFilmName={setSelectFilmName} />
      <Main selectFilmName={selectFilmName} />
    </Section>
  );
};

export default App;
