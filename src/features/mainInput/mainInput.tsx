import React, { useState } from "react";
// import { useDispatch } from 'react-redux';

function MainInput() {
  const [inputValue, setInputValue] = useState("");
  //   const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //   const handleAddTodo = () => {
  //     dispatch(addTodoAction(inputValue));
  //     setInputValue('');
  //   };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-[var(--primary-orange)] py-15 px-15 rounded flex flex-col items-center md:translate-y-20 lg:translate-y-40 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-[var(--primary-black)] p-2 rounded w-10vw sm:w-50 md:w-60 lg:w-70 mb-12 bg-white text-sm focus:outline-none"
          placeholder="Enter City Name..."
          style={{
            color: "var(--primary-black)",
          }}
        />
        <button
          className=" text-white py-1 px-8  rounded text-m cursor-pointer"
          style={{ backgroundColor: "var(--primary-blue)" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default MainInput;
