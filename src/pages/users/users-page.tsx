import { Card } from "@/components";
import {
  activeUsers,
  usersIcon,
  usersWithLoans,
  usersWithSavings,
} from "@/assets/svgs";
import { useLoaderData } from "@tanstack/react-router";
import { UserInfo } from "@/types";
import {
  formatNumber,
  getActiveUsers,
  getUsersWithLoan,
  getUsersWithSavings,
} from "@/lib/utils";
import UsersTable from "./components/users-table";

export default function UsersPage() {
  const users = useLoaderData({
    from: "/_dashboardLayout/users/",
  }) as UserInfo[];

  const numberOfActiveUsers = getActiveUsers(users);
  const numberOfUsersWithLoan = getUsersWithLoan(users);
  const numberOfUsersWithSavings = getUsersWithSavings(users);

  return (
    <div className='users '>
      <h1 className='dashboard__title'>Users</h1>
      <div className='users__stats mt-40 '>
        <Card imageURL={usersIcon} title='Users' total={users.length} />
        <Card
          imageURL={activeUsers}
          title='Active Users'
          total={formatNumber(numberOfActiveUsers)}
        />
        <Card
          imageURL={usersWithLoans}
          title='Users with Loans'
          total={formatNumber(numberOfUsersWithLoan)}
        />
        <Card
          imageURL={usersWithSavings}
          title='Users with Savings'
          total={formatNumber(numberOfUsersWithSavings)}
        />
      </div>
      <UsersTable />
    </div>
  );
}
