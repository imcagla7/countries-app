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
  background-color: #ebebeb;
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

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffffff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: #f1f1f1;
  }
`;

export const PageInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PageSizeSelect = styled.select`
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

export const SortIcon = styled.span<{ $isSorted: "asc" | "desc" }>`
font-size: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

& > span {
  transition: color 0.3s ease;
  color: ${(props) => (props.$isSorted === "asc" ? "#000000" : "#fff")};
  &:last-child {
    color: ${(props) => (props.$isSorted === "desc" ? "#000000" : "#fff")};
  }
}
`;
