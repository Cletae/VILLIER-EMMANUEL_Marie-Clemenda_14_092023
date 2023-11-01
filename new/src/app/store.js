// import toolkit
import { configureStore } from "@reduxjs/toolkit";

import EmployeeListReducer from "./EmployeesSlice";

const store = configureStore({
  reducer: {
    employeesList: EmployeeListReducer,
  },
});

export default store;
