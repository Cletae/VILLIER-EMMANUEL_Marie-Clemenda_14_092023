import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import DatePicker from "../../plugins/DatePicker";
import Select from "../../plugins/Select";
import { employeeActions } from "../../app/EmployeesSlice";
import { TYPE_NAMES, DATA_TYPE, mockedList } from "../../data/data";
import { stateOptions } from "../../data/stateOptions";
import { departmentOptions } from "../../data/departementOptions";
import { Modal } from "vemc-modal";
import "./Form.css";

const Form = () => {
  const [employee, setEmployee] = useState(TYPE_NAMES);
  const [displayModal, setDisplayModal] = useState(false);

  const [valueDate, onChangeDate] = useState(new Date());
  const [valueDay, onChangeDay] = useState(new Date());


  // const [link, setLink] = useState({
  //   title: "View Current Employees",
  //   path: "/employees",
  // });

  const dispatch = useDispatch();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(employeeActions.getEmployees(mockedList));
  }, []);

  const onSubmit = (e) => {
    dispatch(employeeActions.addEmployee(employee));
    setEmployee(DATA_TYPE);
    setDisplayModal(true);
    // e.preventDefault();
  };

  const onChange = (value, fieldName) => {
    let newEmployee = employee;
    switch (fieldName) {
      case TYPE_NAMES.firstName:
        newEmployee.firstName = value;
        break;
      case TYPE_NAMES.lastName:
        newEmployee.lastName = value;
        break;
      case TYPE_NAMES.birthDate:
        newEmployee.birthDate = value;
        break;
      case TYPE_NAMES.startDate:
        newEmployee.startDate = value;
        break;
      case TYPE_NAMES.street:
        newEmployee.street = value;
        break;
      case TYPE_NAMES.city:
        newEmployee.city = value;
        break;
      case TYPE_NAMES.state:
        newEmployee.state = value;
        break;
      case TYPE_NAMES.zipCode:
        newEmployee.zipCode = value;
        break;
      case TYPE_NAMES.department:
        newEmployee.department = value;
        break;
      default:
        break;
    }
    setEmployee(newEmployee);
  };

  return (
    <div className="main">
      <form
        className="form-container"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="basic-info-container">
          <h2>Create Employees</h2>

          <div className="basic-info-item">
            {/* FirstName */}
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"
              {...register("firstName", { required: true })}
              onChange={(e) => onChange(e.target.value, TYPE_NAMES.firstName)}
            />
            {errors.firstName && (
              <span className="error-msg">Please enter your first name.</span>
            )}

            {/* LastName */}
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"
              {...register("lastName", { required: true })}
              onChange={(e) => onChange(e.target.value, TYPE_NAMES.lastName)}
            />
            {errors.lastName && (
              <span className="error-msg">Please enter your last name.</span>
            )}

            {/* Date */}
            <label htmlFor="birthDate">Date of birth</label>
            <DatePicker
              id="birthDate"
              onChange={onChangeDay}
              value={valueDay}
            />
            <label htmlFor="startDate">Date of start</label>
            <DatePicker
              id="startDate"
              onChange={onChangeDate}
              value={valueDate}
            />
          </div>
        </div>

        <fieldset className="address-container">
          <legend>Address</legend>

          {/* Street */}
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"
            {...register("street", { required: true })}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.street)}
          />
          {errors.street && (
            <span className="error-msg">Please enter your street.</span>
          )}

          {/* City */}
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"
            {...register("city", { required: true })}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.city)}
          />
          {errors.city && (
            <span className="error-msg">Please enter your city.</span>
          )}

          {/* State */}
          <label htmlFor="state">State</label>
          <Select
            id="state"
            options={stateOptions}
            // setValue={setValue}
            errors={errors}
            // rules={{ required: "Please select an option" }}
            // {...register("State", { required: true })}
            // {...register("state", { required: "state is required" })}
            onChange={(value) => onChange(value, TYPE_NAMES.state)}
          />
          {errors.state && (
            <span className="error-msg">Please select your state.</span>
          )}

          {/* Zip code */}
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            type="number"
            id="zipCode"
            {...register(
              "zipCode",
              { required: true },
              { min: 1000, max: 99999 }
            )}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.zipCode)}
          />
          {errors.zipCode && (
            <span className="error-msg">Please enter your zip-code.</span>
          )}
        </fieldset>
        <div className="departement-container">
          <label htmlFor="department">Department</label>
          <Select
            id="department"
            options={departmentOptions}
            // setValue={setValue}
            errors={errors}
            // rules={{ required: "Please select an option" }}
            // {...register("Department", { required: true })}
            onChange={(value) => onChange({value}, TYPE_NAMES.department)}
          />
          {errors.department && (
            <span className="error-msg">Please choose a department.</span>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
      {/* {modal} */}
      <Modal
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
        title="Success"
        message="Employee Created !"
        buttonText1="Ok"
        buttonText2="Cancel"
        
        // {links}
      />
    </div>
  );
};

export default Form;
