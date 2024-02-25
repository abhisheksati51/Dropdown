import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
    console.log("Clicked item:", item);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="dropdown" onMouseLeave={closeDropdown}>
        <h1>What you want to learn</h1>
      <button className="btn" onMouseEnter={toggleDropdown}  >
        {selectedValue ? selectedValue.label : "Select"}
      </button>

      {isOpen && (
        <ul className="dropdown-menu" >
          {items.map((item) => (
            <li key={item.value} onClick={() => handleItemClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
      <p>Selected: {selectedValue ? selectedValue.label : "None"}</p>
    </div>
  );
};

export default Dropdown;
