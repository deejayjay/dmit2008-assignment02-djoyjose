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
            <div>
              <h1>Page Not Found</h1>
              <p>Trust me, you don't want to be here...</p>
              <p>
                <Link to="/">
                  <FaBackspace size="2rem" /> Take me Home.
                </Link>
              </p>
            </div>
          </PageNotFoundRight>
        </PageNotFoundStyles>
      </PageNotFoundWrapper>
    </>
  );
}

export default PageNotFound;
