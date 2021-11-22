import styled from "styled-components";

const NavBarStyled = styled.div`
  padding: 20px;
  width: 350px;

  text-align: center;
  box-shadow: 8px 0px 23px -7px rgba(34, 60, 80, 0.31);

  .nav_list {
  }

  .navList_item {
    padding: 5px;
    font-size: 20px;
    color: #0099ff;
    cursor: pointer;
  }

  .navList_item:not(:last-child) {
    margin-bottom: 15px;
  }

  .navList_item:hover {
    background-color: #e0ffe0;
    border-radius: 10px;
    box-shadow: 0px 8px 23px -7px rgba(175, 199, 96, 0.53);
  }
`;

export default NavBarStyled;
