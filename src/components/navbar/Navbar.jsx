/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDataContext } from "../../context/DataContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { token, setToken } = useDataContext();

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    toast.success("Logout Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setShowLogin(false)
  };

  return (
    <>
      <nav className="sticky top-0 z-10 border-gray-200 bg-gray-50  dark:bg-gray-800 dark:border-gray-700">
        <div className=" mx-5 flex flex-wrap items-center justify-between p-4">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            {/* <img src={logo} alt="" /> */}
            <p className="text-black font-bold text-[1.7rem] dark:text-white">ZuAI</p>
          </div>

          <div className="flex items-center justify-center">
            {!token ? (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center dark:text-white"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center dark:text-white"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
