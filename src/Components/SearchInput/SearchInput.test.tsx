import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./";
import '@testing-library/jest-dom'

describe("SearchInput Component", () => {
  test("search input change", () => {
    const mockSetSearchQuery = jest.fn();
    render(<SearchInput setSearchQuery={mockSetSearchQuery} />);
    const input = screen.getByPlaceholderText("Search by country name");
    fireEvent.change(input, { target: { value: "Japan" } });
    expect(input).toHaveValue("Japan");
  });
});
