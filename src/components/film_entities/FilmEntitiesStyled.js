import styled from "styled-components";

const FilmEntitiesStyled = styled.div`
  padding: 0 30px 0 30px;

  .entitiesInfo_title {
    text-align: center;
    margin-bottom: 10px;
  }

  .characters_wrapper {
    padding-bottom: 10px;
  }

  .characters_item {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    cursor: pointer;
  }

  .characters_link_text:hover {
    color: #0066ff;
  }

  .characters_item:not(:last-child) {
    margin-bottom: 10px;
  }

  .entitiesInfo_box {
    margin-left: 20px;
    text-transform: capitalize;
  }

  .entitiesInfo_items:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export default FilmEntitiesStyled;
