import { Table, flexRender } from "@tanstack/react-table";
import { ColumnHeaderContent } from "./column-header";
import { useState } from "react";

interface TableTemplateProps<TData> {
  table: Table<TData>;
  columnsLength: number;
}

export default function TableTemplate<TData>({
  table,
  columnsLength,
}: TableTemplateProps<TData>) {
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

  const handleHeaderClick = (columnId: string) => {
    setActiveColumnId((prevId) => (prevId === columnId ? null : columnId));
  };

  return (
    <table className={`table box-shadow `}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} className='table__header'>
                  {!header.isPlaceholder && (
                    <ColumnHeaderContent
                      column={header.column}
                      activeColumnId={activeColumnId}
                      handleHeaderClick={handleHeaderClick}
                      table={table}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </ColumnHeaderContent>
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
