import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { SelectRowsPerPage } from "@/components";
import { SelectOptions } from "@/types";

interface TableLegendProps<TData> {
  table: Table<TData>;
  pageSizesArr: SelectOptions[];
}

export default function TableLegend<TData>({
  table,
  pageSizesArr,
}: TableLegendProps<TData>) {
  const handlePageSizeChange = (selectedValue: string) => {
    table.setPageSize(Number(selectedValue));
  };

  return (
    <div className='table__legend'>
      <section className='table__legend-left'>
        <span className=''>
          Showing
          <strong>
            {table.getPageCount() === 0
              ? 0
              : table.getState().pagination.pageIndex + 1}
          </strong>
          out of {table.getPageCount()}
        </span>
      </section>

      <section className='table__legend-center'>
        <span className=''>Rows per page</span>
        <SelectRowsPerPage
          handleValueChange={handlePageSizeChange}
          selectOptions={pageSizesArr}
          selectedValue={String(table.getState().pagination.pageSize)}
        />
      </section>

      <section className='table__legend-right'>
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className='sr-only'>Go to first page</span>
          <ChevronsLeft className='' />
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className='' />
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className='' />
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className='sr-only'>Go to last page</span>
          <ChevronsRight className='' />
        </button>
      </section>
    </div>
  );
}
