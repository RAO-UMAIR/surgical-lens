import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [productCategory, setProductCategory] = useState(false);
  const [desktopProductGroup, setDesktopProductGroup] = useState("");
  const [productCategorySmall, setProductCategorySmall] = useState(false);
  const [iolsOpenSmall, setIolsOpenSmall] = useState(false);
  const [ophthalmicOpenSmall, setOphthalmicOpenSmall] = useState(false);
  const whatsappNumber = "03033802020";
  const isProductsActive = location.pathname.startsWith("/products");

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const nextOpen = !prev;
      if (!nextOpen) {
        setProductCategorySmall(false);
        setIolsOpenSmall(false);
        setOphthalmicOpenSmall(false);
      }
      return nextOpen;
    });
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setProductCategorySmall(false);
    setIolsOpenSmall(false);
    setOphthalmicOpenSmall(false);
  };

  const closeDesktopProducts = () => {
    setProductCategory(false);
    setDesktopProductGroup("");
  };

  useEffect(() => {
    if (productCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [productCategory]);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center py-4 px-4 md:py-2 md:px-7 lg:px-8 bg-white md:border-b md:border-[#e7ebf0] md:shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
      <Link to="/home" className="flex items-center">
        <img
          src="/images/reset-logo.png"
          alt="app Logo"  
          className="h-10 sm:h-11 md:h-10 lg:h-11 w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:justify-between md:items-center font-semibold md:gap-8 md:text-sm lg:text-base">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `inline-block transition-colors duration-300 ${
              isActive ? "text-[#cc6f12]" : "text-[#8c96a5] hover:text-[#cc6f12]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `inline-block transition-colors duration-300 ${
              isActive ? "text-[#cc6f12]" : "text-[#8c96a5] hover:text-[#cc6f12]"
            }`
          }
        >
          About
        </NavLink>

        <div
          className={`relative py-4 inline-block transition-colors duration-300 ${
            isProductsActive ? "text-[#cc6f12]" : "text-[#8c96a5] hover:text-[#cc6f12]"
          }`}
        >
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setProductCategory((prev) => !prev)}
          >
            Products
          </button>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `inline-block transition-colors duration-300 ${
              isActive ? "text-[#cc6f12]" : "text-[#8c96a5] hover:text-[#cc6f12]"
            }`
          }
        >
          Contact
        </NavLink>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="text-green-500 hover:text-green-600 transition-colors"
        >
          <FaWhatsapp className="text-2xl whatsapp-pulse" />
        </a>
      </div>

      {/* Desktop Products Panel */}
      {productCategory && (
        <div className="hidden md:block fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Close products panel"
            className="absolute inset-0 bg-black/20"
            onClick={closeDesktopProducts}
          />

          <div className="absolute top-0 right-0 h-screen w-[38vw] min-w-[460px] max-w-[560px] bg-[#f7f9fc] border-l border-[#e2e8f0] text-[#4b5563]">
            <div className="flex items-center justify-between px-7 py-6 border-b border-[#e2e8f0]">
              <h3 className="text-3xl font-bold tracking-wide text-orange-300">PRODUCTS</h3>
              <button
                type="button"
                onClick={closeDesktopProducts}
                aria-label="Close products panel"
                className="text-[#6b7280] hover:text-[#cc6f12] transition-colors cursor-pointer"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            <div className="px-7 py-6">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setDesktopProductGroup("iols")}
                  className={`w-full flex items-center justify-between rounded-md px-4 py-3 text-left transition-colors duration-200 ${
                    desktopProductGroup === "iols"
                      ? "bg-orange-500 text-white"
                      : "bg-transparent text-[#4b5563] hover:bg-[#eef2f7]"
                  }`}
                >
                  <span className="text-lg">IOLs</span>
                  <FaChevronDown className={`transition-transform duration-300 ${desktopProductGroup === "iols" ? "rotate-180" : "rotate-0"}`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    desktopProductGroup === "iols" ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-1.5 pl-3">
                    <li>
                      <NavLink
                        to="/products/cristalens"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        Cristalens
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/aqua-750"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        Aqua
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/pearl-750"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        PEARL
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/ac-iol-5-5d"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        AC IOL 5.5D
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/ac-iol-6-5d"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        AC IOL 6.5D
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setDesktopProductGroup("devices")}
                  className={`w-full flex items-center justify-between rounded-md px-4 py-3 text-left transition-colors duration-200 ${
                    desktopProductGroup === "devices"
                      ? "bg-orange-500 text-white"
                      : "bg-transparent text-[#4b5563] hover:bg-[#eef2f7]"
                  }`}
                >
                  <span className="text-lg">Ophthalmic Devices</span>
                  <FaChevronDown className={`transition-transform duration-300 ${desktopProductGroup === "devices" ? "rotate-180" : "rotate-0"}`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    desktopProductGroup === "devices" ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-1.5 pl-3">
                    <li>
                      <NavLink
                        to="/products/uv-gell"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        UV-Gell
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/smi-suture"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        SMI Suture
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products/surgical-knife"
                        onClick={closeDesktopProducts}
                        className="block rounded-md px-3 py-2 text-base text-[#6b7280] hover:bg-[#eef2f7] hover:text-[#cc6f12] transition-colors"
                      >
                        Surgical Knife
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
          <AiOutlineMenu className="text-2xl sm:text-3xl text-gray-700" onClick={toggleMenu} />
        )}

        {isOpen && (
          <div
            className="fixed top-0 left-0 h-screen w-full z-10 bg-black/60"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-screen w-[60vw] max-w-[240px] z-20 bg-neutral-900/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            className="text-2xl sm:text-3xl absolute top-4 right-5 text-orange-100 bg-orange-500/20 rounded-full p-1.5"
            onClick={toggleMenu}
          />

          <ul className="mt-14 px-5 py-2 flex flex-col gap-2 text-sm sm:text-base">
            <li>
              <NavLink
                to="/home"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-orange-500/25 text-orange-100"
                      : "text-orange-200 hover:bg-orange-500/15 hover:text-orange-100"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-orange-500/25 text-orange-100"
                      : "text-orange-200 hover:bg-orange-500/15 hover:text-orange-100"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setProductCategorySmall((prev) => !prev)}
                className="w-full rounded-lg px-3 py-2.5 text-left font-medium text-orange-200 hover:bg-orange-500/15 hover:text-orange-100 transition-colors duration-300 flex items-center justify-between"
              >
                <span>Products</span>
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    productCategorySmall ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  productCategorySmall ? "max-h-[460px] opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-2 flex flex-col gap-1.5 text-sm">
                  <li>
                    <button
                      onClick={() => setIolsOpenSmall((prev) => !prev)}
                      className="w-full rounded-md px-3 py-2 text-left font-medium text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100 transition-colors duration-300 flex items-center justify-between"
                    >
                      <span>IOLs</span>
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-300 ${
                          iolsOpenSmall ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        iolsOpenSmall ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-2 flex flex-col gap-1">
                        <li>
                          <NavLink
                            to="/products/cristalens"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            Cristalens
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/aqua-750"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            Aqua
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/pearl-750"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            PEARL
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/ac-iol-5-5d"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            AC IOL 5.5D
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/ac-iol-6-5d"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            AC IOL 6.5D
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => setOphthalmicOpenSmall((prev) => !prev)}
                      className="w-full rounded-md px-3 py-2 text-left font-medium text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100 transition-colors duration-300 flex items-center justify-between"
                    >
                      <span>Ophthalmic Devices</span>
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-300 ${
                          ophthalmicOpenSmall ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        ophthalmicOpenSmall ? "max-h-56 opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-2 flex flex-col gap-1">
                        <li>
                          <NavLink
                            to="/products/uv-gell"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            UV-Gell
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/smi-suture"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            SMI Suture
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/surgical-knife"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `block rounded-md px-3 py-2 transition-colors duration-300 ${
                                isActive
                                  ? "bg-orange-500/25 text-orange-100"
                                  : "text-orange-200/90 hover:bg-orange-500/15 hover:text-orange-100"
                              }`
                            }
                          >
                            Surgical Knife
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-orange-500/25 text-orange-100"
                      : "text-orange-200 hover:bg-orange-500/15 hover:text-orange-100"
                  }`
                }
              >
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
