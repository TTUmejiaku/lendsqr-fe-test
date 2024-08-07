import { ReactNode } from "react";

export type Container = {
  children: ReactNode;
  containerClasses?: string;
};

export type FormValues = {
  email: string;
  password: string;
};

export type Errors = {
  [key: string]: string | undefined;
};

export type UserInfo = {
  id: string;
  createdAt: string;
  orgName: string;
  status: string;
  userName: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    bvn: number;
    gender: string;
    avatar: string;
    maritalStatus: string;
    children: number | null;
    address: string;
    typeOfResidence: string;
    currency: string;
  };
  accountNumber: string;
  accountBalance: number;
  educationAndEmployment: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    relationship: string;
    gender: string;
  };
};
