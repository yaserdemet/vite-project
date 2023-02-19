import React, { useEffect, useState } from "react";
import close from "../assets/closeToast.svg";
import success from "../assets/succesToast.svg";
import infoToast from "../assets/infoToast.svg";
import dangerToast from "../assets/dangerToast.svg";
import warningToast from "../assets/warningToast.svg";
interface Iprops {
  text: string;
  bgColor?: string;
  icon?: string;
  onClick?: () => void;
  textHeader?: string;
  situation?: string | any;
}
const Toast: React.FC<Iprops> = ({ text, situation, textHeader }) => {
  const [show, setShow] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const colors = ["#4CAF50", "#F44336", "#FFC107", "#2196F3"];
  const current = (event: string) => {
    switch (event) {
      case "success":
        return { icon: success, color: colors[0] };
      case "warning":
        return { icon: warningToast, color: colors[2] };
      case "danger":
        return { icon: dangerToast, color: colors[1] };
      case "info":
        return { icon: infoToast, color: colors[3] };
      default:
        return { icon: success, color: colors[0] };
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2000);
  }, []);

  return (
    <div
      className={` ${show && "hidden"} ${
        hide && "hidden"
      }   flex rounded-lg  gap-4 border h-16 justify-center items-center fixed bottom-10 right-2 z-10  shadow-xl`}
    >
      <div
        className="w-3  h-16 rounded-l-lg bg-secondaryGreen border border-l"
        style={{ backgroundColor: current(situation).color }}
      ></div>

      <div className="flex  justify-center  items-center md:gap-6">
        <div className="flex md:gap-4 gap-2 justify-center  flex-1">
          <button>
            <img src={current(situation).icon} alt={situation} />
          </button>
          {textHeader ? (
            <div>
              <h5 className="font-semibold text-sm">dwadawdwad</h5>
              <p className="flex  text-sm font-light">
                {text}
              </p>
            </div>
          ) : (
            <p className="flex justify-center items-center text-sm font-light">
              {text}
            </p>
          )}
        </div>
        <button
          onClick={() => setShow(!show)}
          className="text-gray-500 transition hover:text-gray-600 mr-4"
        >
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Toast;