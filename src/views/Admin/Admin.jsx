import React, { useState } from "react";
import Sidebar from "./SideBar";
const Admin = () => {
  const [name,SetName]=useState("")
  const [Age,SetAge]=useState("")
 
  const tableData = [
    {
      key: 1,
      name: "ANas",
      age: 12,
    },
  ];

  return (
    <>
      <div className="tw-flex tw-flex-col tw-ml-32">
        <h1 className=" tw-font-bold tw-text-xl tw-text-center">Patients</h1>
        <div className=" tw-flex tw-justify-between tw-px-4 ">
          <button className=" tw-bg-transparent tw-text-blue-600 hover:tw-bg-blue-500 hover:tw-text-white tw-rounded-sm  tw-font-bold tw-px-4 tw-py-2 tw-shadow-md ">
            Refresh
          </button>
          <button className=" tw-bg-transparent tw-text-blue-600 hover:tw-bg-blue-500 hover:tw-text-white tw-rounded-sm  tw-font-bold tw-px-4 tw-py-2 tw-shadow-md ">
            Add
          </button>
        </div>
        <div className="tw-flex tw-py-3 ">
          <table className=" tw-w-full tw-table-fixed  ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Medical Info</th>
              </tr>
            </thead>
            <tbody className="tw-text-center">
              {tableData.map((data) => {
                
                return <Entry key={data.key} data={data} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Entry = ({ data }) => {
  return (
     <tr key={data.key} className=" odd:tw-bg-white even:tw-bg-slate-100">
       <td >{data.name}</td>
       <td>{data.age}</td>
       <td>test</td>
     </tr>
   );
};

export default Admin;
