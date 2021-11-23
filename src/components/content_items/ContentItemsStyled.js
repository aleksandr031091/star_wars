import styled from "styled-components";

const ContentItemsStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px;

  cursor: pointer;
  .entitiesInfo_box {
  }
  .link_text:hover {
    color: #0066ff;
  }

  .entitiesInfo_box {
    margin-left: 20px;
  }

  .link_items:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export default ContentItemsStyled;
