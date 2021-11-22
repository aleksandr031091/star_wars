import styled from "styled-components";

const marginItems = "10px";

const ContentStyled = styled.div`
  padding: 0 30px 20px 30px;
  border: 1px solid black;

  .film_info {
    /* margin-bottom: 50px; */
  }

  .film_title {
    margin-bottom: ${marginItems};
    text-align: center;
  }

  .film_description {
    margin-bottom: ${marginItems};
  }

  .film_episode {
    margin-bottom: ${marginItems};
  }

  .film_date_release {
    margin-bottom: ${marginItems};
  }

  .film_director {
    margin-bottom: ${marginItems};
  }

  .film_producer {
    margin-bottom: ${marginItems};
  }
`;

export default ContentStyled;
