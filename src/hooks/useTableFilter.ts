import { formatDateToISODate } from "@/lib";
import { UserInfo } from "@/types";
import { Table, TableMeta } from "@tanstack/react-table";
import { useState, useCallback, useEffect } from "react";

type FilterData = {
  organization: string;
  status: string;
  userName: string;
  email: string;
  phone: string;
  date: Date | undefined;
};

export const useTableFilter = <TData>(table: Table<TData>) => {
  const { setColumnFilters } = table.options.meta as TableMeta<UserInfo>;
  const [filters, setFilters] = useState<FilterData>({
    organization: "",
    status: "",
    userName: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: selectedDate,
    }));
  }, [selectedDate]);

  const handleInputChange = useCallback(
    (field: keyof typeof filters) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [field]: event.target.value,
        }));
      },
    []
  );

  const handleSelectChange = useCallback(
    (field: keyof typeof filters) => (value: string) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: value,
      }));
    },
    []
  );

  const applyFilter = () => {
    setColumnFilters([
      { id: "orgName", value: filters.organization },
      { id: "userName", value: filters.userName },
      { id: "userEmail", value: filters.email },
      { id: "userPhoneNumber", value: filters.phone },
      { id: "createdAt", value: formatDateToISODate(filters.date) },
      { id: "status", value: filters.status },
    ]);
  };

  const handleReset = useCallback(() => {
    setFilters({
      organization: "",
      status: "",
      userName: "",
      email: "",
      phone: "",
      date: undefined,
    });
    setSelectedDate(undefined);
    table.resetColumnFilters();
  }, [table]);

  return {
    filters,
    handleInputChange,
    handleSelectChange,
    handleReset,
    selectedDate,
    setSelectedDate,
    applyFilter,
  };
};
