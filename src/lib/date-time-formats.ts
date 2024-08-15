import { format, formatISO, parseISO } from "date-fns";

export function formatDate(date: string): string {
  if (!date) return "";

  try {
    const parsedDate = parseISO(date);
    return format(parsedDate, "MMM d, yyyy h:mm a");
  } catch (error) {
    console.error("Error parsing date:", error);
    return "";
  }
}

export function formatDateToISO(date: Date | undefined): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error("Invalid date object provided");
    return "";
  }

  try {
    return date.toISOString();
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
}

export const formatDateToISODate = (date: Date | undefined): string => {
  if (!date) return "";
  return formatISO(date, { representation: "date" });
};

export const isSameDate = (
  date1: string | Date,
  date2: string | Date
): boolean => {
  const d1 = typeof date1 === "string" ? parseISO(date1) : new Date(date1);
  const d2 = typeof date2 === "string" ? parseISO(date2) : new Date(date2);

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};
