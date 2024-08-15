import { createColumnHelper, TableMeta } from "@tanstack/react-table";
import { UserInfo } from "@/types";
import { formatDate, isSameDate } from "@/lib";
import { COLOR_MAP } from "@/constants";
import { MoreVertical } from "lucide-react";

const columnHelper = createColumnHelper<UserInfo>();
export const columns = [
  columnHelper.accessor("orgName", {
    id: "orgName",
    size: 100,
    header: "ORGANIZATION",
  }),
  columnHelper.accessor("userName", {
    id: "userName",
    size: 100,
    header: "USERNAME",
  }),
  columnHelper.accessor("profile.email", {
    id: "userEmail",
    header: "Email",
  }),
  columnHelper.accessor("profile.phoneNumber", {
    id: "userPhoneNumber",
    size: 120,
    header: "PHONE NUMBER",
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "DATE JOINED",
    filterFn: (row, columnId, filterValue) => {
      const rowValue = row.getValue<Date>(columnId);
      return isSameDate(rowValue, filterValue);
    },
    cell: ({ row }) => {
      return (
        <p className='table__date'>{formatDate(row.getValue("createdAt"))}</p>
      );
    },
  }),
  columnHelper.accessor("status", {
    id: "status",
    size: 100,
    enableResizing: false,
    header: "Status",
    cell: ({ row }) => {
      const userStatus = row.getValue("status") as string;
      const color = COLOR_MAP[userStatus.toLowerCase()];

      return (
        <div className='table__status' style={{ backgroundColor: color.bg }}>
          <p style={{ color: color.text }}>{userStatus}</p>
        </div>
      );
    },
  }),

  columnHelper.display({
    id: "actions",
    size: 20,
    enableResizing: false,
    enableSorting: false,
    cell: ({ row, table }) => {
      const userInfo = row.original as UserInfo;

      const { openDropdown } = table?.options.meta as TableMeta<UserInfo>;

      console.log(userInfo.userName);
      return <MoreVertical />;
    },
  }),
];
