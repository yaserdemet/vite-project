import React from "react";
import x from "../assets/x.svg";
interface IProps {
  type: string;
  placeholder: any;
  labelFor?: string;
  labelText?: string | React.ReactNode;
  id?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
  name?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement> | any) => void;
  placeholderClass?: any;
  autoFocus?: boolean;
  extraClasses?: string;
  labelClass?: string;
  extraClassesInput?: string;
  defaultValue?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  maxLength?: any;
  iconInput?: string;
  closeIconPosition?: string;
  handleClear?: () => void;
  clearInputBtn?: boolean;
  leftLetter?: string;
  closeIcon?: string;
  closeIconClass?: string;
  iconClick?:  () => void;
}

const NumberBox: React.FC<IProps> = ({
  type,
  placeholder,
  labelFor,
  labelText,
  id,
  value,
  name,
  onChange,
  autoFocus,
  extraClasses,
  labelClass,
  extraClassesInput,
  defaultValue,
  onClick,
  maxLength,
  iconInput,
  handleClear,
  clearInputBtn,
  leftLetter,
  placeholderClass,
  closeIcon,
  closeIconClass,
  iconClick
}) => {
  const [remainingLetter, setRemainingLetter] = React.useState<number>(0);
  React.useEffect(() => {
    value && setRemainingLetter(value.length);
  }, [value]);
  return (
    <>
      <div className={`${extraClasses}`}>
        {labelText && (
          <label
            className={`form-label mb-1 inline-block font-bold text-base text-black  ${
              labelClass && labelClass
            }`}
            htmlFor={labelFor}
          >
            {labelText}
          </label>
        )}
        <div  className="relative">
          {iconInput && (
            <img
            onClick={iconClick}
              src={iconInput}
              alt=""
              className="h-5 w-5 absolute  top-[0.9rem] left-2"
            />
          )}
          <input
            maxLength={maxLength}
            onClick={onClick}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            onChange={onChange}
            className={`${extraClassesInput} ${placeholderClass} ${
              iconInput ? "px-10" : "pl-2 pr-10"
            }   block w-full   transition shadow-secondaryShadow  rounded   border-[1px]  m-0 ease-in-out    text-base focus:border-black placeholder:text-sm  placeholder:font-extralight focus:border-[1px]  ring-0 outline-none      font-normal
        py-3`}
            // focus:ring-0 focus:outline-none
            name={name}
            value={value}
            id={id}
            type={type}
            placeholder={placeholder}
          />

          {!clearInputBtn && (
            <>
              <button onClick={handleClear}>
                <img
                  src={closeIcon ? closeIcon : x}
                  className={`${
                    closeIconClass
                      ? closeIconClass
                      : " h-5 w-5 absolute top-[0.9rem] right-1"
                  } `}
                />
              </button>
            </>
          )}
        </div>
        {value && maxLength && (
          <div className={`flex justify-end  -mt-4 text-xs ${leftLetter}`}>
            (
            <span
              className={value.length > maxLength - 10 && "text-primaryRed"}
            >
              {remainingLetter}
            </span>{" "}
            /&nbsp;<span className="font-bold">{maxLength}</span>)
          </div>
        )}
      </div>
    </>
  );
};

export default NumberBox;
