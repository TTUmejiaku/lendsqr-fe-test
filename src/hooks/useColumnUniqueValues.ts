import { useMemo } from "react";
import { UserInfo } from "@/types";

type ColumnUniqueValues = {
  usersData: UserInfo[];
  columnKey: keyof UserInfo;
};

export const useGetColumnUniqueValues = ({
  usersData,
  columnKey,
}: ColumnUniqueValues) => {
  const uniqueValues = useMemo(() => {
    return usersData.reduce((acc: string[], curr) => {
      const value = curr[columnKey];

      // Ensure the value is a string before including it
      if (typeof value === "string" && !acc.includes(value)) {
        acc.push(value);
      }

      return acc;
    }, []);
  }, [usersData, columnKey]);

  return uniqueValues;
};
