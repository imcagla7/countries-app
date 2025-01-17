import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;