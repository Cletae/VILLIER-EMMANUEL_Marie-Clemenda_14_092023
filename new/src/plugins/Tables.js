import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";


function Table() {
  const columns = [
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "birthDate",
      label: "Date of Birth",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "street",
      label: "Street",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "zipCode",
      label: "Zip Code",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "department",
      label: "Departement",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
  };

  const data = useSelector((state) => {
    return state.employeesList.employees.length
      ? state.employeesList.employees
      : [];
  });



  return (
    <div className="table-container">
      <h2>Current Employees</h2>
      <MUIDataTable columns={columns} data={data} options={options} />
    </div>
  );
}

export default Table;
