import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function CalendarComponent({ onDateChange }) {
  const [date, setDate] = useState(null);

  function SelectDate(d) {
    setDate(d);
    onDateChange(d);
  }

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={SelectDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
export default CalendarComponent;
