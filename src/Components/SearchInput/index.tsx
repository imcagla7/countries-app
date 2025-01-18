import { useEffect, useState } from "react";
import { SearchContainer, StyledInput } from "./styles";
import { useDebounce } from "../../Hooks/useDebounce";

type SearchInputProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchInput({ setSearchQuery }: SearchInputProps): JSX.Element {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue, setSearchQuery]);

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        placeholder="Search by country name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchContainer>
  );
}

export default SearchInput;
