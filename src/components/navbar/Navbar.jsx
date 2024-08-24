/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [animation, setAnimation] = useState("Home");
  const [toggle, setToggle] = useState(false);
  //   const { getTotalCartAmt, token, setToken } = useDataContext();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    // localStorage.removeItem("token");
    // setToken("");
    // navigate("/");
    // toast.success("Logout Successfully!", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
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

          <form className="max-w-md mx-auto hidden md:block">
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
          </form>

          <div className="flex items-center justify-center">
            {/* <div className="relative mr-4">
              <Link to="/cart">
              </Link>
              {getTotalCartAmt() > 0 && (
                <div className="absolute w-1 h-1 bg-orange-600 rounded-full top-[-0.00001rem] left-5"></div>
              )}
            </div> */}
            {/* 
            {!token ? (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-orange-500 hover:bg-[#fff4f2] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </button>
            ) : (
              <div className="relative w-9 h-9 mr-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-11 h-11 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )} */}

            <button
              type="button"
              className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center"
              // onClick={() => setToggle(!toggle)}
            >
              Login
            </button>
          </div>

          {/* {toggle && (
            <div
              className="absolute top-[3.5rem] md:top-[4rem] right-[0rem] w-full"
              id="navbar-hamburger"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <Link
                  to="/"
                  className={`block cursor-pointer py-2 px-3 text-gray-700 hover:bg-gray-100 ${
                    animation === "Home" ? "bg-orange-200" : ""
                  } rounded dark:bg-blue-600`}
                  onClick={() => {
                    setAnimation("Home");
                    setToggle(!toggle);
                  }}
                >
                  Home
                </Link>
                <a
                  href="#explore-menu"
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded hover:bg-gray-100 ${
                    animation === "Menu" ? "bg-orange-200" : ""
                  } dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => {
                    setAnimation("Menu");
                    setToggle(!toggle);
                  }}
                >
                  Menu
                </a>
                <a
                  href="#explore-mobile-app"
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded ${
                    animation === "Mobile" ? "bg-orange-200" : ""
                  } hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => {
                    setAnimation("Mobile");
                    setToggle(!toggle);
                  }}
                >
                  Mobile App
                </a>

                <a
                  href="#explore-contact"
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded ${
                    animation === "Contact" ? "bg-orange-200" : ""
                  } hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => {
                    setAnimation("Contact");
                    setToggle(!toggle);
                  }}
                >
                  Contact Us
                </a>
               
              </ul>
            </div>
          )} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
