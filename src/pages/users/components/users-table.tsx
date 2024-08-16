import { useState, useMemo, useEffect, useReducer } from "react";
import {
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import { TableLegend, TableTemplate } from "@/components/index";
import { columns } from "./users-column";
import { UserInfo } from "@/types";
import { fetchUsers } from "@/lib/utils";
import { useMediaQuery } from "@/hooks";

export default function UsersTable() {
  const isWindowAbove1600 = useMediaQuery(1600);
  const isWindowAbove1000 = useMediaQuery(1000);
  const isWindowAbove640 = useMediaQuery(640);
  const rerender = useReducer(() => ({}), {})[1];
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [usersData, setUsersData] = useState<UserInfo[]>([]);
  const [globalFilter, setGlobalFilterValue] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    createdAt: isWindowAbove1600,
    userPhoneNumber: isWindowAbove1000,
    userEmail: isWindowAbove1600,
    orgName: isWindowAbove640,
  });

  const defaultData = useMemo(() => [], []);

  useEffect(() => {
    const getUsers = async () => {
      const users = (await fetchUsers()) as UserInfo[];

      setUsersData(users);
    };

    getUsers();
  }, []);

  useEffect(() => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      createdAt: isWindowAbove1600,
      userPhoneNumber: isWindowAbove1000,
      userEmail: isWindowAbove1600,
      orgName: isWindowAbove640,
    }));
  }, [isWindowAbove1600, isWindowAbove1000, isWindowAbove640]);

  const table = useReactTable({
    data: usersData ?? defaultData,
    columns: useMemo(() => columns, []),
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
    },
    columnResizeMode: "onChange",
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilterValue,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      setGlobalFilterValue,
      setColumnFilters,
      rerender,
      usersData,
    },
  });

  return (
    <div className='table-wrapper mt-40 '>
      <TableTemplate columnsLength={columns.length} table={table} />
      <TableLegend table={table} pageSizesArr={[5, 10, 15, 20, 30]} />
    </div>
  );
}
