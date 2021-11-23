import styled from "styled-components";

const FilmEntitiesStyled = styled.div`
  padding: 0 30px 0 30px;
  /* height: 100%;
  overflow-y: scroll; */

  .entitiesInfo_wrapper {
    padding-bottom: 20px;
  }

  .entitiesInfo_list_wrapper:not(:last-child) {
    margin-bottom: 20px;
  }

  .entitiesInfo_title {
    margin-bottom: 10px;
    text-transform: capitalize;
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
    /* text-transform: capitalize; */
  }

  .entitiesInfo_items:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export default FilmEntitiesStyled;
