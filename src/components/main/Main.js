import Content from "../content_block/Content";
import Form from "../form/Form";
import MainStyled from "./MainStyled";

const Main = ({ selectFilmName }) => {
  return (
    <MainStyled>
      <Form />
      <Content selectFilmName={selectFilmName} />
    </MainStyled>
  );
};

export default Main;
