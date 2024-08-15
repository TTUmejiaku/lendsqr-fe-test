import { Column, Table } from "@tanstack/react-table";
import { FilterDropdown } from "./filter-dropdown";
interface ColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  children: React.ReactNode;
  activeColumnId: string | null;
  handleHeaderClick: (columnId: string) => void;
  table: Table<TData>;
}

export function ColumnHeaderContent<TData, TValue>({
  column,
  children,
  handleHeaderClick,
  table,
}: ColumnHeaderProps<TData, TValue>) {
  return (
    <div className='table__column-header '>
      <p
        className='table__column-header-text'
        onClick={() => column?.toggleSorting(column?.getIsSorted() === "asc")}
      >
        {children}
      </p>

      {column?.getCanSort() ? (
        <FilterDropdown
          column={column}
          handleHeaderClick={handleHeaderClick}
          table={table}
        />
      ) : (
        ""
      )}
    </div>
  );
}
