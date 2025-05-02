import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-between items-center py-2 px-4 md:mt-4 md:py-4 md:px-8 ">
        <Link to="/home">
          <img
            src="/logo.png"
            alt="app Logo"
            className="w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
          />
        </Link>
        <div className="hidden md:flex md:justify-between md:items-center md:gap-16 md:text-xl lg:text-2xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-red-400 hover:text-red-500 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 ${
                isActive ? "after:w-full text-red-500" : "after:w-0"
              } hover:after:w-full`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-red-400 hover:text-red-500 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 ${
                isActive ? "after:w-full text-red-500" : "after:w-0"
              } hover:after:w-full`
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-red-400 hover:text-red-500 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 ${
                isActive ? "after:w-full text-red-500" : "after:w-0"
              } hover:after:w-full`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex md:hidden">
          {!isOpen && (
            <AiOutlineMenu
              className="text-xl sm:text-2xl "
              onClick={toggleMenu}
            />
          )}

          {isOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-full z-10 bg-black/60"
              onClick={toggleMenu}
            ></div>
          )}
          <div
            className={`fixed top-0 right-0 w-[120px] h-[200px] z-10 bg-gray-200 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <AiOutlineClose
              className="text-xl sm:text-2xl absolute top-4 right-5 text-red-700"
              onClick={toggleMenu}
            />
            <ul className="mt-18 sm:mt-16 px-3 flex flex-col gap-4 text-sm sm:text-[16px]">
              <li>
                <Link to="/about" onClick={toggleMenu} className="text-red-400">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={toggleMenu}
                  className="text-red-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="text-red-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
