import {
  auditLogs,
  decisionModels,
  feesAndCharges,
  feesAndPricing,
  guarantors,
  karma,
  loanProducts,
  loanRequests,
  loans,
  organization,
  preferences,
  reports,
  savings,
  savingsProducts,
  serviceAccount,
  services,
  settlements,
  transactions,
  users,
  whitelist,
} from "@/assets/svgs";
import { FileRoute } from "@/constants";

export const sidebarData = [
  {
    title: "CUSTOMERS",
    links: [
      {
        name: "Users",
        icon: users,
        url: FileRoute.Users,
      },
      {
        name: "Guarantors",
        icon: guarantors,
        url: FileRoute.Dashboard,
      },
      {
        name: "Loans",
        icon: loans,
        url: FileRoute.Dashboard,
      },
      {
        name: "Decision Models",
        icon: decisionModels,
        url: FileRoute.Dashboard,
      },
      {
        name: "Savings",
        icon: savings,
        url: FileRoute.Dashboard,
      },
      {
        name: "Loan Requests",
        icon: loanRequests,
        url: FileRoute.Dashboard,
      },
      {
        name: "Whitelist",
        icon: whitelist,
        url: FileRoute.Dashboard,
      },
      {
        name: "Karma",
        icon: karma,
        url: FileRoute.Dashboard,
      },
    ],
  },
  {
    title: "BUSINESSES",
    links: [
      {
        name: "Organization",
        icon: organization,
        url: FileRoute.Dashboard,
      },
      {
        name: "Loan Products",
        icon: loanProducts,
        url: FileRoute.Dashboard,
      },
      {
        name: "Savings Products",
        icon: savingsProducts,
        url: FileRoute.Dashboard,
      },
      {
        name: "Fees and Charges",
        icon: feesAndCharges,
        url: FileRoute.Dashboard,
      },
      {
        name: "Transactions",
        icon: transactions,
        url: FileRoute.Dashboard,
      },
      {
        name: "Services",
        icon: services,
        url: FileRoute.Dashboard,
      },
      {
        name: "Service Account",
        icon: serviceAccount,
        url: FileRoute.Dashboard,
      },
      {
        name: "Settlements",
        icon: settlements,
        url: FileRoute.Dashboard,
      },
      {
        name: "Reports",
        icon: reports,
        url: FileRoute.Dashboard,
      },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        name: "Preferences",
        icon: preferences,
        url: FileRoute.Dashboard,
      },
      {
        name: "Fees and Pricing",
        icon: feesAndPricing,
        url: FileRoute.Dashboard,
      },
      {
        name: "Audit Logs",
        icon: auditLogs,
        url: FileRoute.Dashboard,
      },
    ],
  },
];

export type SidebarData = (typeof sidebarData)[number];
