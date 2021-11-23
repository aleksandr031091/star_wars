import styled from "styled-components";

const ContentItemsStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px;

  cursor: pointer;
  .entitiesInfo_box {
  }
  .characters_link_text:hover {
    color: #0066ff;
  }

  .characters_item:not(:last-child) {
    margin-bottom: 10px;
  }

  .entitiesInfo_box {
    margin-left: 20px;
  }

  .entitiesInfo_items:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export default ContentItemsStyled;
