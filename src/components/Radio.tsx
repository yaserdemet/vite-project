import React from "react";
interface Iprops{
  text?: string;
  onClick?: () => void;
}

const Radio:React.FC<Iprops> = ({text,onClick}) => {
  return (
    <>
      <div className="flex items-center">
        <input
          onClick={onClick}
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-6 p-4 peer-checked:bg-[red] hover:outline-black"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {text}
        </label>
      </div>
    </>
  );
};

export default Radio;
