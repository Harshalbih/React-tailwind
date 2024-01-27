import { useState } from "react";
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
      <div key={option.value} onClick={() => handleOptionSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div onClick={handleClick}>
      {selection?.label || 'Select..'}
      {isOpen && <div>{renderedItems}</div>}
    </div>
  );
}
export default Dropdown;
