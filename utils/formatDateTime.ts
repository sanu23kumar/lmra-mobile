import { format, isThisYear } from "date-fns";

export const formatDateTime = (date: string | Date) => {
  if (isThisYear(date)) {
    return format(date, "dd MMM hh:mm");
  } else {
    return format(date, "dd MMM yyyy hh:mm");
  }
};
