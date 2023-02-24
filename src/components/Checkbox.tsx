import React, { FC } from "react";
interface Iprops {
  onClick?: React.MouseEventHandler;
  checked ?: boolean;
  value ?: any
  name ?: string; 

}
const Checkbox:FC<Iprops> = ({ onClick, checked, value , name }) => {
  return (
    <div className="flex justify-center">
      <div>
        <input
        name= {name}
        value={value}
          checked={checked}
          onClick={onClick}
          className="hover:border-1 focus:border-raisin focus:ring-1 focus:ring-gray-500 hover:border-gray-500 hover:shadow-sm  hover:shadow-gray-500 appearance-none h-[20px] w-[20px] border border-gray-700  rounded bg-white checked:bg-black checked:border-white transition duration-200  peer-focus:ring-4   align-top  bg-no-repeat bg-center   cursor-pointer"
          type="checkbox"
          id="flexCheckDefault"
        />
      </div>
    </div>
  );
};

export default Checkbox;
