import React, { FC, ReactNode } from "react";

const Tooltip: FC<{ text: string | ReactNode, extraClasses?: string, toolClass ?: string }> = ({ text, extraClasses, toolClass}) => {
  return (
    <div className="hover:cursor-pointer ">
      <span className={`${extraClasses} rounded-lg z-[99px] bg-gray-900 px-2 py-1.5 text-xs transition-all duration-300 font-medium text-white opacity-0 group-hover:opacity-100`}>
        {text}
      </span>
      <svg className={`${toolClass ? toolClass : "right-[-72px] top-[24px]"} absolute  z-10 w-6 h-6  transition-all duration-300 text-gray-900 -translate-x-12 group-hover:opacity-100 opacity-0 -translate-y-3 fill-current stroke-current`} width="8" height="8">
        <rect x="12" y="-10" width="6" height="6" transform="rotate(45)" />
      </svg>
    
    </div>
   
  );
};

export default Tooltip;
