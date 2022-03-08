/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FaIcon } from "../../ui/FaIcon";

import { SideBarStyles, SideBarItems, SideBarItem } from "./styles";

function SideBar(props) {
  return (
    <>
      <SideBarStyles className="sidebar-wrapper">
        <SideBarItems>
          <SideBarItem>
            <Link className="btn-signout" to="/">
              <FaIcon className="fas fa-sign-out-alt" margin="0 0.75rem 0 0" />
              Sign Out
            </Link>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-list" margin="0 0.75rem 0 0" />
              Categories
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-cube" margin="0 0.75rem 0 0" />
              Brands
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-shipping-fast" margin="0 0.75rem 0 0" />
              Coming Soon
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-hand-holding-usd" margin="0 0.75rem 0 0" />
              Deals
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-coins" margin="0 0.75rem 0 0" />
              Clearance
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-undo" margin="0 0.75rem 0 0" />
              Rollback
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fab fa-playstation" margin="0 0.75rem 0 0" />
              Popular Toys
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-shopping-cart" margin="0 0.75rem 0 0" />
              Orders
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-search-location" margin="0 0.75rem 0 0" />
              Store Locations
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-envelope-open-text" margin="0 0.75rem 0 0" />
              Subscribe to Emails
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-address-card" margin="0 0.75rem 0 0" />
              Contact Us
            </a>
          </SideBarItem>
          <SideBarItem>
            <a href="#">
              <FaIcon className="fas fa-info-circle" margin="0 0.75rem 0 0" />
              About Us
            </a>
          </SideBarItem>
        </SideBarItems>
      </SideBarStyles>
    </>
  );
}

export default SideBar;
