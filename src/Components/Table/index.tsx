import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTr,
  StyledThead,
  StyledTh,
} from "./styles";

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

function Table<T>({ data, columns }: TableProps<T>): JSX.Element {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable>
      <StyledThead>
        {table.getHeaderGroups().map((headerGroup) => (
          <StyledTr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <StyledTh key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </StyledTh>
            ))}
          </StyledTr>
        ))}
      </StyledThead>
      <StyledTbody>
        {table.getRowModel().rows.map((row) => (
          <StyledTr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <StyledTd key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export default Table;
