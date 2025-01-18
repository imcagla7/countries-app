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

export const ErrorMessage = styled.div`
  background-color: #ffe6e6;
  color: #d8000c;
  border: 1px solid #d8000c;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 15px 0;
`;
