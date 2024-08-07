import { Table as TableClass, flexRender } from "@tanstack/react-table";

interface TableTemplateProps<TData> {
  table: TableClass<TData>;
  columnsLength: number;
}

export default function TableTemplate<TData>({
  table,
  columnsLength,
}: TableTemplateProps<TData>) {
  return (
    <table className={`table card-box-shadow `}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  // {...{
                  //   style: {
                  //     width: header.getSize(),
                  //   },
                  // }}
                  className='table__header'
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      } `,
                    }}
                  />
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody className='table__body'>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className='table__body-row'
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='table__body-cell'
                  {...{
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columnsLength} className=''>
              No results.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
