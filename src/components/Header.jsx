import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productCategory, setProductCategory] = useState(false);
  const [productCategorySmall, setProductCategorySmall] = useState(false);
  const whatsappNumber = "03035458818";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setProductCategorySmall(false);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center py-5 px-4  md:py-4 md:px-8 bg-gray-800 ">
      <Link to="/home">
        <img
          src="/logo.png"
          alt="app Logo"
          className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
        />
      </Link>

      {/* Desktop Navigation */}
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

        <div
          className="relative py-6 text-red-400 hover:text-red-500 inline-block"
          onMouseEnter={() => setProductCategory(true)}
          onMouseLeave={() => setProductCategory(false)}
        >
          <span className="cursor-pointer text-red-400">Products</span>
          {productCategory && (
            <div className="absolute top-20  left-[-32px] z-10" >
                <ul className="flex flex-col gap-6 text-gray-900 bg-gray-200 font-semibold rounded-xl">
                  <NavLink
                    to="/products/lens"
                    onClick={() => setProductCategory(false)}
                    className="group relative overflow-hidden px-12 py-2 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                    <span className="relative z-10 group-hover:text-white text-[19px]">
                      Lens
                    </span>
                  </NavLink>
                  <NavLink
                    to="/products/gells"
                    onClick={() => setProductCategory(false)}
                    className="group relative overflow-hidden px-12 py-2 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                    <span className="relative z-10 group-hover:text-white text-[19px]">
                      Gells
                    </span>
                  </NavLink>
                  <NavLink
                    to="/products/injectors"
                    onClick={() => setProductCategory(false)}
                    className="group relative overflow-hidden px-12 py-2 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                    <span className="relative z-10 group-hover:text-white text-[19px]">
                      Injectors
                    </span>
                  </NavLink>
                </ul>
            </div>
          )}
        </div>

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
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="text-green-400 hover:text-green-500 transition-colors"
        >
          <FaWhatsapp className="text-3xl whatsapp-pulse" />
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-3 md:hidden ">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="text-green-400 hover:text-green-500 transition-colors text-2xl"
        >
          <FaWhatsapp className="whatsapp-pulse" />
        </a>
        {!isOpen && (
          <AiOutlineMenu className="text-2xl sm:text-3xl text-white" onClick={toggleMenu} />
        )}

        {isOpen && (
          <div
            className="fixed top-0 left-0 h-screen w-full z-10 bg-black/60"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0  rounded-l-xl right-0 w-[120px] h-[200px] ${
            productCategorySmall && "w-[200px] h-[260px]"
          } z-10 bg-black transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            className="text-xl sm:text-2xl absolute top-4 right-5 text-white"
            onClick={toggleMenu}
          />

          <ul className="mt-16 px-4 flex flex-col gap-4 text-sm sm:text-base text-red-100">
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setProductCategorySmall((prev) => !prev)}
                className="text-left w-full"
              >
                Products
              </button>
              {productCategorySmall && (
                <ul className="mt-2 ml-2 flex flex-col gap-2 text-red-100 text-sm">
                  <li>
                    <NavLink to="/products/lens" onClick={closeMobileMenu}>
                      Lens
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/gells" onClick={closeMobileMenu}>
                      Gells
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/injectors" onClick={closeMobileMenu}>
                      Injectors
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
