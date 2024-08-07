import React from "react";
import { Column } from "@tanstack/react-table";
import { filterIcon } from "@/assets/svgs";

interface ColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  children: React.ReactNode;
}

export function ColumnHeaderContent<TData, TValue>({
  column,
  children,
}: ColumnHeaderProps<TData, TValue>) {
  return (
    <div className='table__column-header '>
      {/* <p className=''></p> */}
      {children}
      {column?.getCanSort() ? (
        <img
          src={filterIcon}
          onClick={() => column?.toggleSorting(column?.getIsSorted() === "asc")}
        />
      ) : (
        ""
      )}
    </div>
  );
}
