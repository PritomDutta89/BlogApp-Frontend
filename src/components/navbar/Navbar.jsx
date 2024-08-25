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
            {/* <h1 className="font-extrabold text-[1.5rem] md:text-[1.9rem] text-black">
              ZuAI
            </h1> */}
            <img src={logo} alt="" />
          </div>

          {/* <form className="max-w-md mx-auto hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-[#6947BF] focus:border-[#6947BF] "
                placeholder="Search by id..."
                required
              />
            </div>
          </form> */}

          <div className="flex items-center justify-center">
            {!token ? (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center"
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
