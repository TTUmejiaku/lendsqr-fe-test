import { filterIcon } from "@/assets/svgs";
import { Column, Table, TableMeta } from "@tanstack/react-table";
import { CustomSelect, DatePicker } from "@/components";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../primitives/pr-popover";
import { useGetColumnUniqueValues, useTableFilter } from "@/hooks";
import { UserInfo } from "@/types";
import { generateSelectOptionsObj } from "@/lib/utils";

interface FilterDropdownProps<TData, TValue> {
  column: Column<TData, TValue>;
  handleHeaderClick: (columnId: string) => void;
  table: Table<TData>;
}

export const FilterDropdown = <TData, TValue>({
  column,
  handleHeaderClick,
  table,
}: FilterDropdownProps<TData, TValue>) => {
  const { usersData } = table.options.meta as TableMeta<UserInfo>;
  const {
    filters,
    setSelectedDate,
    handleInputChange,
    handleReset,
    handleSelectChange,
    selectedDate,
    applyFilter,
  } = useTableFilter(table);

  const uniqueOrgNames = useGetColumnUniqueValues({
    usersData: usersData ?? [],
    columnKey: "orgName",
  });

  const uniqueStatuses = useGetColumnUniqueValues({
    usersData: usersData ?? [],
    columnKey: "status",
  });

  const uniqueOrgNamesObj = generateSelectOptionsObj(uniqueOrgNames);
  const uniqueStatusesObj = generateSelectOptionsObj(uniqueStatuses);

  return (
    <Popover onOpenChange={() => handleHeaderClick(column.id)}>
      <PopoverTrigger asChild>
        <img src={filterIcon} />
      </PopoverTrigger>

      <PopoverContent className='table-filter'>
        <FilterItem title='Organization' id='organization'>
          <CustomSelect
            handleValueChange={handleSelectChange("organization")}
            selectOptions={uniqueOrgNamesObj}
            selectedValue={filters.organization}
          />
        </FilterItem>
        <FilterItem title='Username' id='userName'>
          <input
            name='userName'
            type='text'
            className=''
            placeholder='User'
            value={filters.userName}
            onChange={handleInputChange("userName")}
          />
        </FilterItem>
        <FilterItem title='Email' id='email'>
          <input
            name='email'
            type='text'
            className=''
            placeholder='Email'
            value={filters.email}
            onChange={handleInputChange("email")}
          />
        </FilterItem>
        <FilterItem title='Date' id='date'>
          <DatePicker selected={selectedDate} setSelected={setSelectedDate} />
        </FilterItem>
        <FilterItem title='Phone Number' id='phone'>
          <input
            name='phone'
            type='text'
            className=''
            placeholder='Phone Number'
            value={filters.phone}
            onChange={handleInputChange("phone")}
          />
        </FilterItem>
        <FilterItem title='Status' id='status'>
          <CustomSelect
            handleValueChange={handleSelectChange("status")}
            selectOptions={uniqueStatusesObj}
            selectedValue={filters.status}
          />
        </FilterItem>
        <PopoverClose asChild>
          <div className='table-filter__btns'>
            <button className='table-filter__btns--reset' onClick={handleReset}>
              Reset
            </button>
            <button
              className='table-filter__btns--filter'
              onClick={() => applyFilter()}
            >
              Filter
            </button>
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

const FilterItem = ({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id: string;
}) => {
  return (
    <fieldset className='table-filter__item'>
      <label htmlFor={id} className='table-filter__title'>
        {title}
      </label>
      {children}
    </fieldset>
  );
};
