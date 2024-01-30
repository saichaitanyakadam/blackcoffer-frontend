import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { tabs } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="px-3 py-2 flex justify-between items-center w-full h-[6vh]">
      <div className="flex gap-2">
        <h2 className="border-2 px-2 text-lg font-bold border-black">L.</h2>
        <h2 className="font-bold text-lg">Lorem</h2>
      </div>
      <GiHamburgerMenu size={20} onClick={() => setIsOpen(true)} />
      <div
        className={`w-[60vw] flex flex-col absolute top-0 px-3 py-4 ${
          isOpen ? "right-[0]" : "right-[-100%]"
        } min-h-[100vh] text-black bg-slate-300 ease-in-out duration-500 lg:hidden`}
      >
        <div className="flex flex-col m-0 gap-3">
          <RxCross2
            onClick={() => setIsOpen(false)}
            size={20}
            className="self-end"
          />
          <nav className="flex flex-col gap-2 w-full">
            {tabs.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 font-semibold w-full px-2 py-1 ${
                    item.path === location.pathname && "bg-blue-400 rounded"
                  }`}
                >
                  <RiHome6Line />
                  <p>{item.tab}</p>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
