import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import DatePicker from "../../plugins/DatePicker";
import Select from "../../plugins/Select";
import { employeeActions } from "../../app/EmployeesSlice";
import { TYPE_NAMES, DATA_TYPE, mockedList } from "../../data/data";
import { stateOptions } from "../../data/stateOptions";
import { departmentOptions } from "../../data/departementOptions";
import "./Form.css";

const Form = () => {
  // const [employee, setEmployee] = useState(DATA_TYPE);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // const { modal, toggle } = useCreateModal({text: 'Employee Created!',classNames: '', callBack: null});

  useEffect(() => {
    dispatch(employeeActions.getEmployees(mockedList));
  }, []);

  // console.log(getEmployees);

  const onSubmit = (e) => {
    dispatch(employeeActions.addEmployee(e));
    // setEmployee(DATA_TYPE);
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
            <label htmlFor={TYPE_NAMES.firstName}>First Name</label>
            <input
              type="text"
              {...register(
                "FirstName",
                { required: true },
                { pattern: /^[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}$/i }
              )}
            />
            {errors.FirstName && (
              <span className="error-msg">Please enter your first name.</span>
            )}

            {/* LastName */}
            <label htmlFor={TYPE_NAMES.lastName}>Last Name</label>
            <input
              type="text"
              id={TYPE_NAMES.lastName}
              {...register(
                "LastName",
                { required: true },
                { pattern: /^[A-Za-z]+$/i }
              )}
            />
            {errors.LastName && (
              <span className="error-msg">Please enter your last name.</span>
            )}

            {/* Date */}
            <label htmlFor={TYPE_NAMES.birthDate}>Date of birth</label>
            <DatePicker id={TYPE_NAMES.birthDate} />
            <label htmlFor={TYPE_NAMES.startDate}>Date of start</label>
            <DatePicker id={TYPE_NAMES.startDate} />
          </div>
        </div>

        <fieldset className="address-container">
          <legend>Address</legend>

          {/* Street */}
          <label htmlFor={TYPE_NAMES.street}>Street</label>
          <input
            type="text"
            id={TYPE_NAMES.street}
            {...register("Street", { required: true })}
          />
          {errors.Street && (
            <span className="error-msg">Please enter your street.</span>
          )}

          {/* City */}
          <label htmlFor={TYPE_NAMES.city}>City</label>
          <input
            type="text"
            id={TYPE_NAMES.city}
            {...register("City", { required: true })}
          />
          {errors.City && (
            <span className="error-msg">Please enter your city.</span>
          )}

          {/* State */}
          <label htmlFor={TYPE_NAMES.state}>State</label>
          <Select
            options={stateOptions}
            // errors={errors}
            // {...register("State", { required: true })}
          />
          {errors.State && (
            <span className="error-msg">Please enter your state.</span>
          )}

          {/* Zip code */}
          <label htmlFor={TYPE_NAMES.zipCode}>ZIP Code</label>
          <input
            type="text"
            id={TYPE_NAMES.zipCode}
            {...register(
              "Zipcode",
              { required: true },
              { min: 1000, max: 99999 }
            )}
          />
          {errors.Zipcode && (
            <span className="error-msg">Please enter your zip-code.</span>
          )}
        </fieldset>
        <div className="departement-container">
          <label htmlFor={TYPE_NAMES.department}>Department</label>
          <Select
            options={departmentOptions}
            // {...register("Department", { required: true })}
          />
          {errors.Department && (
            <span className="error-msg">Please choose a department.</span>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
      {/* {modal} */}
    </div>
  );
};

export default Form;
