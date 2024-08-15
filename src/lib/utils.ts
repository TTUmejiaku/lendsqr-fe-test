import { UserInfo } from "@/types";

function parseStringToNumber(str: string) {
  return parseFloat(str.replace(/,/g, ""));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
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

export function getActiveUsers(userData: UserInfo[]) {
  const activeUsers = userData.filter((user) => user.status === "Active");

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

export const generateSelectOptionsObj = (uniqueValues: string[]) => {
  const optionsObj = ["All", ...uniqueValues].map((el, i) => ({
    id: el + i,
    name: el,
    value: el === "All" ? undefined : el,
  }));

  return optionsObj;
};
