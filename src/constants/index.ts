export const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PASSWORD_LENGTH = 6;
export const ACTIVE_WITHIN_MONTHS = 3;

export const BASE_URL = "/USERS_DATA.json";
export enum FileRoute {
  Root = "/",
  Dashboard = "/dashboard",
  Users = "/users",
  UserDetails = "/user-details/$userId",
}

export enum Status {
  Active = "Active",
  Inactive = "Inactive",
  Blacklisted = "Blacklisted",
  Pending = "Pending",
}

type ColorInfo = {
  bg: string;
  text: string;
};

type ColorMap = {
  [key: string]: ColorInfo;
};

export const COLOR_MAP: ColorMap = {
  active: { bg: "rgba(57, 205, 98, 0.1)", text: "#39CD62" },
  blacklisted: { bg: "rgba(228, 3, 59, 0.1)", text: "#E4033B" },
  pending: { bg: "rgba(233, 178, 0, 0.1)", text: "#E9B200" },
  inactive: { bg: "rgba(84, 95, 125, 0.1)", text: "#545F7D" },
};

export const TAB_DATA = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];
