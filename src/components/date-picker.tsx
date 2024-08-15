import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/primitives/pr-popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import classNames from "classnames";

export function DatePicker({
  selected,
  setSelected,
}: {
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={classNames(
            "date-picker-button",
            !selected && "date-picker-button--muted"
          )}
        >
          {selected ? format(selected, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className='calendar-icon' />
        </button>
      </PopoverTrigger>
      <PopoverContent className='popover-content' align='start'>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={setSelected}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          classNames={{
            chevron: "date-chevron",
            day_button: "date-btn",
            today: "date-today",
            outside: "date-outside",
            selected: "date-selected",
            caption_label: "date-caption_label",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
