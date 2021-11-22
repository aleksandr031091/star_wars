import Content from "../content_block/Content";
import FilmEntities from "../film_entities/FilmEntities";
import Form from "../form/Form";
import MainStyled from "./MainStyled";

const Main = ({ selectFilmName }) => {
  return (
    <MainStyled>
      <Form />
      <Content selectFilmName={selectFilmName} />
      <FilmEntities selectFilmName={selectFilmName} />
    </MainStyled>
  );
};

export default Main;
