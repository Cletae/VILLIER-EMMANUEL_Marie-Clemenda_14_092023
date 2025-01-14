import React from "react";
import { useEffect, useState, useImperativeHandle } from "react";
import ReactSelect from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: state.isSelected || state.isFocused ? "white" : "black",
    backgroundColor:
      state.isSelected || state.isFocused ? "#A2E4B8" : "#FEFBEA",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  container: (provided) => ({
    ...provided,
    borderRadius: "5px",
    backgroundColor: "#FEFBEA",
  }),
};

const Select = React.forwardRef((props, ref) => {
  const [selectedValue, setSelectedValue] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      getMyState: () => {
        return selectedValue;
      },
    }),
    [selectedValue]
  );

  useEffect(() => {
    setSelectedValue(props.options[0].value);
  }, [props.options]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(selectedValue);
    }
  }, [selectedValue]);

  return (
    <ReactSelect
      styles={customStyles}
      defaultValue={props.options[0]}
      options={props.options}
      onChange={(item) => setSelectedValue(item.value)}
      id={props.id}
      required
    />
  );
});

export default Select;
