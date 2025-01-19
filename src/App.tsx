import { columnHelper } from "./Utils/helpers";
import Table from "./Components/Table";
import { ColumnDef } from "@tanstack/react-table";
import { Country } from "./Utils/types";
import { AppContainer, ErrorMessage } from "./styles";
import SearchInput from "./Components/SearchInput";
import { useState } from "react";
import { useGetCountries } from "./Hooks/useGetCountries";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { countries, isLoading, error } = useGetCountries({
    name: searchQuery,
  });

  const columns = [
    columnHelper.accessor((row) => row.flag, {
      id: "flag",
      cell: (info) => info.getValue(),
      header: () => <span>Flag</span>,
      enableSorting: false,
    }),
    columnHelper.accessor((row) => row.name.common, {
      id: "name",
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.population, {
      id: "population",
      cell: (info) => info.getValue(),
      header: () => <span>Population</span>,
    }),
    columnHelper.accessor((row) => row.region, {
      id: "region",
      cell: (info) => info.getValue(),
      header: () => <span>Region</span>,
    }),
  ];

  return (
    <AppContainer>
      <h1>Country List</h1>
      {error ? <ErrorMessage>Failed to fetch data: {error.message}</ErrorMessage> : null}
      <SearchInput setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table data={countries} columns={columns as ColumnDef<Country>[]} />
      )}
    </AppContainer>
  );
}

export default App;
