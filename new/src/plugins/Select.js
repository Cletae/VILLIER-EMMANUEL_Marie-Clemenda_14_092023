import React from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import ReactSelect from "react-select";
import { useFormContext } from "react-hook-form";

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

  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

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

  return (
    <ReactSelect
      styles={customStyles}
      defaultValue={props.options[0]}
      options={props.options}
      className={"react-select"}
      onChange={(item) => setSelectedValue(item.value)}
      // {...register("country", { required: "Country is required" })}
      // required
    />
  );
});

export default Select;
