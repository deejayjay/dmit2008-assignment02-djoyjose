import React from "react";
import { IconButton } from "../../ui/IconButton";
import { PanelCardsContainer, PanelStyles, PanelTitle, PanelTitleBar } from "./styles";

function Panels(props) {
  return (
    <>
      <PanelStyles>
        <PanelTitleBar>
          <PanelTitle>Product Listings</PanelTitle>
          <IconButton text="Add Toy" bgColor="#64a64e" color="#333333" iconPosition="before" className="fas fa-plus-square" margin="0 0.5rem 0 0" />
        </PanelTitleBar>
        <PanelCardsContainer>{/* Add Product Cards here */}</PanelCardsContainer>
      </PanelStyles>
    </>
  );
}

export default Panels;
