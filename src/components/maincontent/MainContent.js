import React from "react";
import { Panels } from "../panels";
import { SideBar } from "../sidebar";
import { MainContentStyles, MainContentWrapper } from "./styles";

function MainContent(props) {
  return (
    <>
      <MainContentStyles>
        <MainContentWrapper>
          <SideBar />
          <Panels />
        </MainContentWrapper>
      </MainContentStyles>
    </>
  );
}

export default MainContent;
