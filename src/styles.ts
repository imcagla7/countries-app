import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 50px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
