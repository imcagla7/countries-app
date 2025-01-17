import { useGetCountries } from "./Hooks/useGetCountries";
import { columnHelper } from "./Utils/helpers";
import Table from "./Components/Table";
import { ColumnDef } from "@tanstack/react-table";
import { Country } from "./Utils/types";
import { TableWrapper } from "./styles";

function App() {
  const { countries, isLoading, error } = useGetCountries();
  console.log(countries);

  const columns = [
    columnHelper.accessor((row) => row.flag, {
      id: "flag",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Flag</span>,
    }),
    columnHelper.accessor((row) => row.name.common, {
      id: "name",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.population, {
      id: "population",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Population</span>,
    }),
    columnHelper.accessor((row) => row.region, {
      id: "region",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Region</span>,
    }),
  ];

  if (error) {
    return <>Failed to fetch data {error.message}</>;
  }
  return (
    <TableWrapper>
      <Table data={isLoading ? [] : countries} columns={columns as ColumnDef<Country>[]} />
    </TableWrapper>
  );
}

export default App;
