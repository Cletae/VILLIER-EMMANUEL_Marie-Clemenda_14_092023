import { useState } from "react";
// import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import "./Home.css";
import DatePicker from "../../plugins/DatePicker";
import Select from "../../plugins/Select";
// import { addEmployee } from "../../redux/employeeSlice";
import { TYPE_NAMES, DATA_TYPE } from "../../data/data";
import { stateOptions } from "../../data/stateOptions";
import { departmentOptions } from "../../data/departementOptions";

const Home = () => {
  const [employee, setEmployee] = useState(DATA_TYPE);
  // const dispatch = useDispatch();
  // const { modal, toggle } = useCreateModal({text: 'Employee Created!',classNames: '', callBack: null});

  const submit = (e) => {
    // dispatch(addEmployee(employee));
    setEmployee(DATA_TYPE);
    e.preventDefault();
    // toggle();
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
      <Header title="HRnet" />
      <form
        className="form-container"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div className="basic-info-container">
          <h2>Create Employees</h2>

          <div className="basic-info-item">
            <label htmlFor={TYPE_NAMES.firstName}>First Name</label>
            <input
              type="text"
              id={TYPE_NAMES.firstName}
              onChange={(e) => onChange(e.target.value, TYPE_NAMES.firstName)}
            />
            <label htmlFor={TYPE_NAMES.lastName}>Last Name</label>
            <input
              type="text"
              id={TYPE_NAMES.lastName}
              onChange={(e) => onChange(e.target.value, TYPE_NAMES.lastName)}
            />
            <label htmlFor={TYPE_NAMES.birthDate}>Date of birth</label>
            <DatePicker
              id={TYPE_NAMES.birthDate}
              onChange={(value) => onChange(value, TYPE_NAMES.birthDate)}
            />
            <label htmlFor={TYPE_NAMES.startDate}>Date of start</label>
            <DatePicker
              id={TYPE_NAMES.startDate}
              onChange={(value) => onChange(value, TYPE_NAMES.startDate)}
            />
          </div>
        </div>

        <fieldset className="address-container">
          <legend>Address</legend>
          <label htmlFor={TYPE_NAMES.street}>Street</label>
          <input
            type="text"
            id={TYPE_NAMES.street}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.street)}
          />
          <label htmlFor={TYPE_NAMES.city}>City</label>
          <input
            type="text"
            id={TYPE_NAMES.city}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.city)}
          />
          <label htmlFor={TYPE_NAMES.state}>State</label>
          <Select options={stateOptions} />
          <label htmlFor={TYPE_NAMES.zipCode}>ZIP Code</label>
          <input
            type="text"
            id={TYPE_NAMES.zipCode}
            onChange={(e) => onChange(e.target.value, TYPE_NAMES.zipCode)}
          />
        </fieldset>
        <div className="departement-container">
          <label htmlFor={TYPE_NAMES.department}>Department</label>
          <Select options={departmentOptions} />
        </div>
        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
      {/* {modal} */}
    </div>
  );
};

export default Home;
