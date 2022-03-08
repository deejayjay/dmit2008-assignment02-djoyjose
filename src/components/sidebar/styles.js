import styled from "styled-components";

const SideBarStyles = styled.div`
  font-family: Roboto, sans-serif;
  border-right: 1px solid #bcbcbc;
  font-weight: 400;
  padding-top: 1rem;
  height: calc(100vh - 61px);
  min-height: 700px;
  position: absolute;
  background-color: #ffffff;
  z-index: 10;
  top: -48px;
  left: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease-in;
  border-bottom: 2px solid #ecad0d;
  margin-top: 3rem;

  @media only screen and (min-width: 768px) {
    display: block;
    position: static;
    z-index: 0;
    min-width: 15rem;
    margin-top: 0;
    border-bottom: 2px solid #ffffff;
  }
`;

const SideBarItems = styled.ul`
  .btn-signout {
    font-weight: 700;
  }
`;

const SideBarItem = styled.li`
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #ffffff;
  white-space: nowrap;

  a i {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    border-bottom: 1px solid #ecad0d;

    a {
      color: #5a5a5a;
      i {
        transform: scale(1.2);
      }
    }
  }

  &:first-of-type {
    margin-bottom: 1rem;

    &:hover {
      border-bottom: 1px solid #ffffff;
      background-color: #ecad0d;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    padding: 0.75rem 3rem 0.75rem 1rem;
    color: #5a5a5a;

    &:hover {
      text-decoration: none;
    }
  }
`;

export { SideBarStyles, SideBarItems, SideBarItem };
