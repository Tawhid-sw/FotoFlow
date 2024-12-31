import React, { useEffect, useState } from "react";
import { Nav } from "../global/Navigations";
import { NavLink, useNavigate } from "react-router";
import UserLogo from "../assets/User.jpg";
import { FiBell } from "react-icons/fi";

const PhoneMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 bg-white left-0 overflow-hidden -z-[1] heightAnimation w-full opacity-100 h-screen pt-[5rem] px-4 lg:hidden block">
      <div className="relative z-10 flex items-center justify-between w-full h-20 overflow-hidden rounded-md md:hidden bg-profile">
        <div
          className="justify-start gap-2 fx-row"
          onClick={() => navigate("/profile")}
        >
          <img
            crossOrigin="annymouse"
            src={UserLogo}
            alt="UserLogo"
            className="object-cover w-12 h-12 overflow-hidden rounded-full min-w-12"
          />
          <h4 className="text-xl font-semibold text-gray-800 cursor-pointer font-RocknRoll">
            Itx_Tawhid
          </h4>
        </div>
        <FiBell
          size={23}
          className="text-gray-800 cursor-pointer"
          onClick={(e) => {
            e.target.classList.add("wobble");
            setTimeout(() => {
              e.target.classList.remove("wobble");
            }, 1000);
          }}
        />
      </div>
      <ul>
        {Nav.map((nav, i) => {
          return (
            <li key={nav.lable + "MobileMenu" + i} className="w-full">
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  `fx-row gap-1 tr-drop text-[1rem] font-medium px-3 py-4 rounded-lg ${
                    isActive ? "text-gray-800 bg-gray-100" : "text-textMuted"
                  }`
                }
              >
                {nav.icon}
                {nav.lable}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhoneMenu;
