import React from "react";

import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

import ghostImg from "../../static/images/404.svg";
import { PageNotFoundWrapper, PageNotFoundStyles, PageNotFoundLeft, PageNotFoundRight } from "./styles";

function PageNotFound(props) {
  return (
    <>
      <PageNotFoundWrapper>
        <PageNotFoundStyles>
          <PageNotFoundLeft>
            <img src={ghostImg} alt="Page not found error" />
          </PageNotFoundLeft>
          <PageNotFoundRight>
            <h1>Oops!</h1>
            <p>Looks like the page you are trying to reach does not exist!!!</p>
            <p>
              <Link to="/">
                <FaBackspace size="2rem" /> Take me Home.
              </Link>
            </p>
          </PageNotFoundRight>
        </PageNotFoundStyles>
      </PageNotFoundWrapper>
    </>
  );
}

export default PageNotFound;
