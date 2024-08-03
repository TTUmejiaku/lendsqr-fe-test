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
