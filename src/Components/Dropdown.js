import { useState } from "react";
import { ImCircleDown } from "react-icons/im";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelect] = useState(null);

  const handleSelect = (option) => {
    setSelect(option);
  }; 

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    //close dropdown
    setIsOpen(false);
    //which option has been chosen
    handleSelect(option);
  };

  const renderedItems = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative m-8" >
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
              {selection?.label || 'Select..'} <ImCircleDown />
              {isOpen && <div className="absolute top-full border rounded ml-1 shadow w-full">{renderedItems}</div>}
        </div>   
    </div>
  );
}
export default Dropdown;
