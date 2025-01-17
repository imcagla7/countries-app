import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: 1px solid #ddd;
`;

export const StyledThead = styled.thead`
  background-color: #f4f4f4;
  &:hover {
    background-color: #cccccc;
    transition: background-color 0.3s ease;
  }
`;

export const StyledTh = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  font-weight: bold;
`;

export const StyledTbody = styled.tbody`
  tr {
    &:hover {
      background-color: #f1f1f1;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      transform: scale(1.01);
      cursor: pointer;
    }
  }
`;

export const StyledTr = styled.tr`
  transition: background-color 0.3s ease;
`;

export const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;
