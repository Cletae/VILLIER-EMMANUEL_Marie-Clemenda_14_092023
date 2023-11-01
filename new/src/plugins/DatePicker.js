import React from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let options = { month: "numeric", day: "numeric", year: "numeric" };

const DatePicker = React.forwardRef((props, ref) => {
  const [startDate, setDate] = useState(new Date());

  useImperativeHandle(
    ref,
    () => ({
      getMyState: () => {
        return startDate.toLocaleString("fr-FR", options);
      },
    }),
    [startDate]
  );

  return (
    <ReactDatePicker
      selected={startDate}
      id={props.id}
      onChange={(date) => setDate(date)}
    />
  );
});

export default DatePicker;
