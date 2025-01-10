import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login functionality
    alert("Google Login Clicked!");
  };

  return (
    <header className="fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section */}
      <nav className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GiSteeringWheel size={35} className="text-primary" />
          <Link to="/" className="font-bold text-2xl">
            WheelsDeal
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/cars"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Our Cars
          </Link>
          <Link
            to="/services"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </Link>

          <button
            className="hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear"
            onClick={toggleModal}
          >
            Sign In
          </button>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive section */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Our Cars
        </Link>
        <Link
          to="/services"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </Link>

        <div>
          <button
            className="border-2 border-primary py-1 px-4 rounded-md"
            onClick={toggleModal}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-0 text-center">Sign In</h2>
            <form className="flex flex-col gap-4">
              {/* Username Input */}
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
              >
                Login
              </button>
            </form>

            {/* Google Login */}
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 border-2 border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 hover:text-primary cursor-pointer">
                Forgot Password?
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Not a member?{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
