import React, { useEffect, useState } from "react";
interface Iprops {
  id: string;
  placeholder: string;
  maxLength?: number;
  onChange: any;
  labelText: string | React.ReactNode;
  areaClasses?: string;
  labelClasses?: string;
  value?: string;
}
const TextArea: React.FC<Iprops> = ({
  id,
  placeholder,
  maxLength,
  onChange,
  labelText,
  areaClasses,
  labelClasses,
  value,
}) => {
  const [remainingLetter, setRemainingLetter] = useState<number>(0);
  useEffect(() => {
    value && setRemainingLetter(value.length);
  }, [value]);
  return (
    <div>
      <label
        className={`${
          labelClasses && labelClasses
        } form-label inline-block font-bold text-base mb-1 text-black`}
        htmlFor={id}
      >
        {labelText}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`${
          areaClasses && areaClasses
        }  form-control block resize:none w-full focus:border-gray-300 transition-all  border focus:text-gray-700  rounded-md  m-0 transition-ease-in-out   px-3  border-solid bg-slate-100  placeholder:text-sm placeholder:text-gray-700 placeholder:font-thin hover:border-black  text-base  focus:ring-0 focus:outline-none  text-gray-700    font-normal   py-1`}
        id={id}
        placeholder={placeholder}
      />
      {value && (
        <div className="flex justify-end mt-1 text-xs">
          (
          <span className={value.length > 500 && "text-primaryRed"}>
            {remainingLetter}
          </span>{" "}
          /&nbsp;<span className="font-bold">512</span>)
        </div>
      )}
    </div>
  );
};

export default TextArea;
