import styled from "styled-components";

const PanelStyles = styled.section`
  width: 100%;
  margin: 1rem;
`;

const PanelTitleBar = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

const PanelTitle = styled.h2`
  color: #5a5a5a;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

const PanelCardsContainer = styled.section`
  box-shadow: 0 0 5px 2px #ababab;
  margin-top: 1rem;
  border-radius: 5px;
  height: 40rem;
`;

export { PanelStyles, PanelTitleBar, PanelTitle, PanelCardsContainer };
