import React from "react";

const InputField = ({ children }) => {
  return (
    <div className=" w-[45%] lg:w-[19%] h-[40px] border-gray-200 rounded relative">
      {children}
    </div>
  );
};

export default InputField;
