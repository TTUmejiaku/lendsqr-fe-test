import { DropdownSelectProps, DropdownSelectProps2 } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../primitives/pr-select";

export function SelectRowsPerPage({
  selectedValue,
  handleValueChange,
  selectOptions,
}: DropdownSelectProps) {
  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className='select-page-rows__trigger'>
        <SelectValue placeholder='10' />
      </SelectTrigger>

      <SelectContent className=''>
        {selectOptions.map((option) => (
          <SelectItem
            key={option}
            value={String(option)}
            className='select-page-rows__item '
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function CustomSelect({
  selectedValue,
  handleValueChange,
  selectOptions,
}: DropdownSelectProps2) {
  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className='custom-select__trigger'>
        <SelectValue placeholder='Select' />
      </SelectTrigger>

      <SelectContent className=''>
        {selectOptions.map((option) => {
          const { id, name, value } = option;

          return (
            <SelectItem
              key={id}
              value={String(value)}
              className='custom-select__item '
            >
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
