import Content from "../main_block_content/Content";
import FilmEntities from "../film_entities/FilmEntities";
import Form from "../form/Form";
import MainBlockStyled from "./MainBlockStyled";

const Main = ({ selectFilmName }) => {
  return (
    <MainBlockStyled>
      <Form />
      <Content selectFilmName={selectFilmName} />
      <FilmEntities selectFilmName={selectFilmName} />
    </MainBlockStyled>
  );
};

export default Main;
