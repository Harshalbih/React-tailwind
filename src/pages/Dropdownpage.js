import React from "react";
import Dropdown from "../Components/Dropdown";
import Sidebar from "../Components/Sidebar";

function Dropdownpage() {
  const options = [
    { label: "Beta", value: "Green" },
    { label: "Alpha", value: "Red" },
    { label: "Sigma", value: "Yellow" },
  ];
  return (
    <div>
        <Sidebar />
      <Dropdown options={options} />
    </div>
  );
}

export default Dropdownpage;
