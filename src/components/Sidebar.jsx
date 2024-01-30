import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { tabs } from "../constants";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="p-3 w-full flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <h2 className="border-2 px-2 text-lg font-bold border-black">L.</h2>
          <h2 className="font-bold text-lg">Lorem</h2>
        </div>
        <nav className="flex flex-col gap-2 w-full">
          {tabs.map((item, index) => (
            <Link to={item.path} key={index}>
              <div
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
      <div className="flex items-center gap-3">
        <img
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          alt="profile"
          className="rounded-full w-[20%]"
        />
        <div className="">
          <p className="font-semibold">User Name</p>
          <p className="text-gray-700 text-sm">user@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
