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
`;
export default FilmEntitiesStyled;
