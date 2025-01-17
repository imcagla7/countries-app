import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import "./App.css";
import { useGetCountries } from "./Hooks/useGetCountries";
import { columnHelper } from "./Utils/helpers";

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
    // columnHelper.accessor((row) => row.languages, {
    //   id: "languages",
    //   cell: (info) => <i>{info.getValue()}</i>,
    //   header: () => <span>Languages</span>,
    //   footer: (info) => info.column.id,
    // }),
  ];

  const table = useReactTable({
    data: isLoading ? [] : countries,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (error) {
    return <>Failed to fetch data {error.message}</>;
  }
  return (
    <>
      Table:
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
