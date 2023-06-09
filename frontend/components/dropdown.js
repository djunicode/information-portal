import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative mt-12">
      <select
        value={selectedOption}
        onChange={handleSelectOption}
        className="appearance-none bg-white border border-navgrey px-8 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled="disabled">
          Select an option
        </option>
        <option value="option1">Computer Engineering</option>
        <option value="option2">Information Technology</option>
        <option value="option3">CS Data Science</option>
        <option value="option4">AIDS</option>
        <option value="option5">IOT</option>
      </select>
      <div className="pointer-events-none bg-lgreen border border-navgrey absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12L6 8h8l-4 4z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
