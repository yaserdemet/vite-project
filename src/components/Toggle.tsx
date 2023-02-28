import React, { FC, useState } from "react";

interface Iprops {
  onClick?: any;
  checked?: boolean;
  focus?: boolean
  
  
}
const Toggle: React.FC<Iprops> = ({ onClick , checked,focus}) => {
  return (
    <label className="inline-flex relative items-center mr-5 cursor-pointer">
      <input  onClick={onClick} autoFocus={focus} checked={checked} type="checkbox" value="" className="sr-only peer" />
      <div
       
        className="w-11 h-6  bg-gray-500 rounded-full   peer-focus:ring-[3px]  peer-focus:ring-gray-400   peer-checked:after:translate-x-full peer-focus peer-checked:after:border-white after:content-['']  after:absolute after:top-0.5 after:left-[2px] after:bg-white   after:border-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black "
      ></div>
    </label>
  );
};

export default Toggle;
