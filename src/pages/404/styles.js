import styled from "styled-components";

const PageNotFoundWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNotFoundStyles = styled.section`
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: 1280px) {
    width: 70%;
    max-width: 60rem;
  }
`;

const PageNotFoundLeft = styled.div`
  text-align: center;
  img {
    width: 15rem;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 20rem;
    }
  }
`;

const PageNotFoundRight = styled.div`
  font-family: "Shadows Into Light", cursive;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;

    a {
      color: #ecad0d;
      display: inline-block;
      margin-top: 1.5rem;

      &:hover {
        text-decoration: none;
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;

export { PageNotFoundWrapper, PageNotFoundStyles, PageNotFoundLeft, PageNotFoundRight };
