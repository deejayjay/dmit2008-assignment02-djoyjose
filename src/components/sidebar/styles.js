import styled from "styled-components";

const SideBarStyles = styled.div`
  font-family: Roboto, sans-serif;
  border-right: 1px solid #bcbcbc;
  font-weight: 400;
  margin-top: 4rem;
  /* max-height: none; */
  position: absolute;
  background-color: #ffffff;
  z-index: 10;
  top: -48px;
  left: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease-in;

  @media only screen and (min-width: 768px) {
    display: block;
    position: static;
    z-index: 0;
    min-width: 15rem;
  }
`;

const SideBarItems = styled.ul``;

const SideBarItem = styled.li`
  padding: 0.75rem 3rem 0.75rem 1rem;
`;

export { SideBarStyles, SideBarItems, SideBarItem };
