import React from "react";
interface Iprops {
  text: string | number | React.ReactNode;
  extraClasses?: string;
}
const Badge: React.FC<Iprops> = ({ text, extraClasses }) => {
  return (
    <>
      {text > 0 && (
        <span
          className={`${extraClasses && extraClasses} ${
            Number(text) > 99 ? "w-content px-1" : "w-5"
          } text-white h-5   flex  justify-center items-center rounded-full  bg-primaryRed  text-xs font-normal`}
        >
          {Number(text) > 99 ? String(text) + "+" : text}
        </span>
      )}
    </>
  );
};

export default Badge;
