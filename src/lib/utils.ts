import { UserInfo } from "@/types";
import { format, parseISO } from "date-fns";

function parseStringToNumber(str: string) {
  return parseFloat(str.replace(/,/g, ""));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function formatDate(date: string): string {
  if (!date) return "";

  try {
    const parsedDate = parseISO(date);
    return format(parsedDate, "MMM d, yyyy h:mm a");
  } catch (error) {
    console.error("Error parsing date:", error);
    return "";
  }
}

export const fetchUsers = async () => {
  try {
    const response = await fetch("/src/mock-data/USER_DATA.json");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export function isActiveDate(date: string, monthsSinceLastActive: number) {
  const now = new Date();
  const cutoffDate = new Date();
  cutoffDate.setMonth(now.getMonth() - monthsSinceLastActive);

  const lastActiveDate = new Date(date);
  return lastActiveDate >= cutoffDate;
}

export function getActiveUsers(
  userData: UserInfo[],
  activeWithinMonths: number
) {
  const activeUsers = userData.filter((user) =>
    isActiveDate(user.lastActiveDate, activeWithinMonths)
  );

  return activeUsers.length;
}

export function getUsersWithLoan(userData: UserInfo[]) {
  const usersWithLoan = userData.filter(
    (user) => parseStringToNumber(user.educationAndEmployment.loanRepayment) > 0
  );

  return usersWithLoan.length;
}

export function getUsersWithSavings(userData: UserInfo[]) {
  const usersWithSavings = userData.filter((user) => user.accountBalance > 0);

  return usersWithSavings.length;
}
