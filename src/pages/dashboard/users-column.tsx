import { createColumnHelper, TableMeta } from "@tanstack/react-table";
import { UserInfo } from "@/types";
import { formatDate } from "@/lib/utils";
import { ColumnHeaderContent } from "@/components";
import { COLOR_MAP } from "@/constants";
import { MoreVertical } from "lucide-react";

const columnHelper = createColumnHelper<UserInfo>();
export const columns = [
  columnHelper.accessor("orgName", {
    id: "orgName",
    size: 100,
    header: ({ column }) => {
      return (
        <ColumnHeaderContent column={column}>ORGANIZATION</ColumnHeaderContent>
      );
    },
  }),
  columnHelper.accessor("userName", {
    id: "userName",
    size: 100,
    header: ({ column }) => {
      return (
        <ColumnHeaderContent column={column}>USERNAME</ColumnHeaderContent>
      );
    },
  }),
  columnHelper.accessor("profile.email", {
    id: "userEmail",
    header: ({ column }) => {
      return <ColumnHeaderContent column={column}>Email</ColumnHeaderContent>;
    },
  }),
  columnHelper.accessor("profile.phoneNumber", {
    id: "userPhoneNumber",
    size: 120,
    header: ({ column }) => {
      return (
        <ColumnHeaderContent column={column}>PHONE NUMBER</ColumnHeaderContent>
      );
    },
  }),
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <ColumnHeaderContent column={column}>DATE JOINED</ColumnHeaderContent>
      );
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
    header: ({ column }) => {
      return <ColumnHeaderContent column={column}>Status</ColumnHeaderContent>;
    },
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

  // columnHelper.display({
  //   id: "actions",
  //   header: ({ column }) => {
  //     return <ColumnHeaderContent column={column}>Action</ColumnHeaderContent>;
  //   },
  //   enableSorting: false,
  //   cell: ({ row, table }) => {
  //     const userInfo = row.original as UsersDetails;
  //     const { firstname, lastname, active, id } = userInfo;
  //     const firstName = firstname ? firstname : "";
  //     const lastName = lastname ? lastname : "";
  //     const fullName = `${firstName} ${lastName}`;

  //     const { isDropdownOpen, closeDropdown, openDropdown, handleRerender } =
  //       table?.options.meta as TableMeta<UsersDetails>;

  //     return (
  //       <Popover>
  //         <PopoverTrigger asChild>
  //           <Button
  //             variant='ghost'
  //             className='h-8 w-8 p-0'
  //             onMouseEnter={() => {
  //               if (openDropdown) {
  //                 openDropdown();
  //               }
  //             }}
  //           >
  //             <span className='sr-only'>Open menu</span>
  //             <MoreVertical className='h-4 w-4' />
  //           </Button>
  //         </PopoverTrigger>
  //         <PopoverContent
  //           className={`p-0  ${isDropdownOpen ? "block" : "hidden"}`}
  //         >
  //           <ul>
  //             <li
  //               className='p-4 cursor-pointer hover:bg-accentBlue'
  //               onClick={() => {
  //                 if (closeDropdown) {
  //                   closeDropdown();
  //                 }
  //               }}
  //             >
  //               <ViewUserModal {...userInfo} />
  //             </li>
  //             <Separator />
  //             <li
  //               className='p-4 cursor-pointer hover:bg-accentBlue'
  //               onClick={() => {
  //                 if (closeDropdown) {
  //                   closeDropdown();
  //                 }
  //               }}
  //             >
  //               <ChangeRoleModal
  //                 userId={row.original.id}
  //                 handleRerender={handleRerender!}
  //               />
  //             </li>
  //             <Separator />
  //             <li className='p-4 cursor-pointer hover:bg-accentBlue'>
  //               <Link
  //                 href={`/dashboard/user-management/${row.original.id}`}
  //                 onClick={() => {
  //                   if (closeDropdown) {
  //                     closeDropdown();
  //                   }
  //                 }}
  //               >
  //                 Activity Log
  //               </Link>
  //             </li>
  //             <Separator />
  //             <li
  //               className='p-4 cursor-pointer hover:bg-accentBlue'
  //               onClick={() => {
  //                 if (closeDropdown) {
  //                   closeDropdown();
  //                 }
  //               }}
  //             >
  //               <DisableOrEnableCustomerModal
  //                 confirmationText={`Are you sure you want to ${
  //                   active ? "disable" : "enable"
  //                 } ${fullName}'s password?`}
  //                 descriptionText='Reset customer account password'
  //                 titleText={`${active ? "Disable" : "Enable"} Customer`}
  //                 triggerText={`${active ? "Disable" : "Enable"}`}
  //                 btnTriggerClasses='pl-0 text-[16px] font-normal justify-start w-full rounded-none hover:bg-accentBlue'
  //                 userId={id}
  //                 actionKey={active ? false : true}
  //                 handleRerender={handleRerender!}
  //                 routeName='USER_MANAGEMENT'
  //               />
  //             </li>
  //           </ul>
  //         </PopoverContent>
  //       </Popover>
  //     );
  //   },
  // }),
];
