import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { forwardRef } from "react";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

interface TableLegendProps<TData> {
  table: Table<TData>;
  pageSizesArr: number[];
}

export default function TableLegend<TData>({
  table,
  pageSizesArr,
}: TableLegendProps<TData>) {
  const handlePageSizeChange = (selectedValue: string) => {
    table.setPageSize(Number(selectedValue));
  };

  return (
    <div className='table__legend '>
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
        <Select.Root
          value={String(table.getState().pagination.pageSize)}
          onValueChange={handlePageSizeChange}
        >
          <Select.Trigger className='SelectTrigger '>
            <Select.Value placeholder='Select load limit' />
            <Select.Icon className='SelectIcon'>
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className='SelectContent'>
              <Select.Viewport className='SelectViewport'>
                {pageSizesArr.map((pageSize) => (
                  <SelectItem key={pageSize} value={String(pageSize)}>
                    {pageSize}
                  </SelectItem>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
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

const SelectItem = forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className='SelectItemIndicator'>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
