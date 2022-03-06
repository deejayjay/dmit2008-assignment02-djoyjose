import React from "react";
import { FaIcon } from "../../ui/FaIcon";

import { SideBarStyles, SideBarItems, SideBarItem } from "./styles";

function SideBar(props) {
  return (
    <>
      <SideBarStyles className="sidebar-wrapper">
        <SideBarItems>
          <SideBarItem>
            <FaIcon className="fas fa-list" margin="0 0.75rem 0 0" />
            Categories
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-cube" margin="0 0.75rem 0 0" />
            Brands
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-shipping-fast" margin="0 0.75rem 0 0" />
            Coming Soon
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-hand-holding-usd" margin="0 0.75rem 0 0" />
            Deals
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-coins" margin="0 0.75rem 0 0" />
            Clearance
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-undo" margin="0 0.75rem 0 0" />
            Rollback
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fab fa-playstation" margin="0 0.75rem 0 0" />
            Popular Toys
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-shopping-cart" margin="0 0.75rem 0 0" />
            Orders
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-search-location" margin="0 0.75rem 0 0" />
            Store Locations
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-envelope-open-text" margin="0 0.75rem 0 0" />
            Subscribe to Emails
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-address-card" margin="0 0.75rem 0 0" />
            Contact Us
          </SideBarItem>
          <SideBarItem>
            <FaIcon className="fas fa-info-circle" margin="0 0.75rem 0 0" />
            About Us
          </SideBarItem>
        </SideBarItems>
      </SideBarStyles>
    </>
  );
}

export default SideBar;
