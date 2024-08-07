import { useState, useMemo, useEffect } from "react";
import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import {
  // FilterTableBoolean,
  // SearchTableGlobal,
  // TableLegend,
  TableTemplate,
} from "@/components/index";
import { columns } from "./users-column";
import { UserInfo } from "@/types";
import { fetchUsers } from "@/lib/utils";
import { useMediaQuery } from "@/hooks";

export default function UsersTable() {
  const isWindowAbove1600 = useMediaQuery(1600);
  const isWindowAbove1000 = useMediaQuery(1000);
  const isWindowAbove640 = useMediaQuery(640);
  const [isRerender, setIsRerender] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
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
  }, [isRerender]);

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
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
    onGlobalFilterChange: setGlobalFilterValue,
    meta: {
      isDropdownOpen,
      setIsDropdownOpen,
      isRerender,
      handleRerender: () => setIsRerender(!isRerender),
      closeDropdown: () => setIsDropdownOpen(false),
      openDropdown: () => setIsDropdownOpen(true),
    },
  });

  return (
    <div className='table-wrapper mt-40 '>
      {/* <section className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-5'>
          <SearchTableGlobal
            globalFilterValue={globalFilter}
            setGlobalFilterValue={setGlobalFilterValue}
          />
          <FilterTableBoolean
            table={table}
            tableColumn='active'
            selectOptions={["All", "Active", "Inactive"]}
          />
        </div>
      </section> */}
      <TableTemplate columnsLength={columns.length} table={table} />
      {/* <TableLegend table={table} pageSizesArr={[5, 10, 15, 20, 25, 30]} /> */}
    </div>
  );
}
