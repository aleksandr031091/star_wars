import styled from "styled-components";

const FrormStyled = styled.form`
  margin-bottom: 50px;

  .input_search {
    margin-right: 10px;
    padding-left: 5px;
    width: 300px;
    height: 30px;
    color: #000083;
    border: 1px solid #1919a7;
  }

  .btn_search {
    width: 70px;
    height: 30px;
    border: 1px solid #1919a7;
    background-color: transparent;
  }

  .btn_search:hover {
    transform: scale(0.9);
    border: 1px solid #51ff00;

    cursor: pointer;
  }
`;

export default FrormStyled;
