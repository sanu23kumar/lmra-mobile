import { useState } from "react";
import DatePicker from "react-native-date-picker";
import ThemedTextInput from "../ThemedTextInput";
import { formatDateTime } from "@/utils/formatDateTime";

export function DateSelector({
  date,
  setDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemedTextInput
        placeholder={formatDateTime(new Date())}
        onPress={() => setOpen(true)}
        value={formatDateTime(date)}
        editable={false}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime" // Change to "date" if you only want to select a date
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
