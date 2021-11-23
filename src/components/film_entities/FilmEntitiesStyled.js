import styled from "styled-components";

const FilmEntitiesStyled = styled.div`
  margin-top: 20px;

  .entitiesInfo_wrapper:not(:last-child) {
    padding-bottom: 20px;
  }

  .entitiesInfo_list_wrapper:not(:last-child) {
    margin-bottom: 20px;
  }

  .entitiesInfo_title {
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  /* .characters_item {
    display: flex;
    align-items: flex-start;
    padding: 5px;

    cursor: pointer;
  } */

  /* .characters_link_text:hover {
    color: #0066ff;
  } */

  /* .characters_item:not(:last-child) {
    margin-bottom: 10px;
  }

  .entitiesInfo_box {
    margin-left: 20px;
  }

  .entitiesInfo_items:not(:last-child) {
    margin-bottom: 5px;
  } */
`;
export default FilmEntitiesStyled;
