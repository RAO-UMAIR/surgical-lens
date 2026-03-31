import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return <div className="bg-gray-100 px-3 md:px-8 lg:px-10 py-6 md:py-7">
    <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4 justify-between">
    {/* Grid-col-1 */}
    <div className="flex flex-col gap-4 md:gap-4 items-start justify-start md:w-60 lg:w-64">
      {/* <img src="/images/logo3.png" className="w-32 sm:w-40 md:w-44 lg:w-24" /> */}
        <img
        src="/images/reset-logo.png"
          alt="app Logo"
          className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto object-contain"
        />
      <p className="text-zinc-500 font-light text-sm md:text-[14px] w-full max-w-[320px] md:max-w-[340px] leading-6 md:leading-6">
        Offering trusted surgical lenses, precision injectors, ophthalmic gels, and essential eye-care devices for hospitals, clinics, and professionals .
      </p>

    </div>

    {/* Grid-col-2 */}
    <div className="flex flex-col justify-start gap-3 md:gap-5 text-xs md:text-sm text-zinc-500 font-light">
      <h1 className="font-medium text-base md:text-xl text-zinc-600">USEFULL LINKS</h1>
      <Link to="/about" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        ABOUT SURGICAL SIGHT 
      </Link>
      <Link to="/products/cristalens" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        CRISTALENS
      </Link>
      <Link to="/products/smi-suture" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        SMI Suture
      </Link>
      <Link to="/products/uv-gell" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        UV Gells
      </Link>


    </div>
    {/* Grid-col-3 */}
    <div className="flex flex-col justify-start gap-3 md:gap-5 text-sm md:text-sm text-zinc-500 font-light sm:ml-6 lg:ml-0">
      <h1 className="font-medium text-xl md:text-xl text-zinc-600">SOCIAL LINKS</h1>
      <a href="https://wa.me/03033802020" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <FaWhatsapp className="text-green-400 text-[18px] md:text-[18px]"/>
        WhatsApp 
      </a>
      <a href="https://www.instagram.com/3s.surgicals?igsh=M2RzY2pmbXY2NnZ2" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <FaInstagram className="text-pink-400 text-[18px] md:text-[18px]"/>
        Instagram
      </a>
      <a href="https://www.facebook.com/share/1GRZdJhd8h/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <FaFacebook className="text-blue-500 text-[18px] md:text-[18px]"/>
        Facebook
      </a>
      <a href="https://x.com/3Ssurgicals" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 md:gap-2 cursor-pointer hover:text-orange-500">
        <FaXTwitter className="text-zinc-700 text-[18px] md:text-[18px]"/>
        Twitter
      </a>
    </div>
    {/* Grid-col-4 */}
    <div className="flex flex-col justify-start gap-3 md:gap-5 text-sm md:text-sm text-zinc-500 font-light">
      <h1 className="font-medium text-xl md:text-xl text-zinc-600">HEAD OFFICE</h1>
      <div className="inline-flex flex-col">
        <div className="inline-flex items-center gap-2.5 md:gap-2.5">
          <span className="h-8 w-8 md:h-8 md:w-8 flex items-center justify-center rounded-full border border-orange-400">
            <IoLocation className="text-lg md:text-lg text-orange-400"/>
          </span>
          <span className="text-sm md:text-sm font-semibold text-zinc-500">Surgical Sight Solutions</span>
        </div>
        <p className="text-sm md:text-sm text-zinc-500">
          Office 3 Golden Heights Plaza Opp Hight Court, Multan Cantt
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-2 text-zinc-400 text-sm md:text-sm">
        <a href="tel:+923033802020" className="hover:text-orange-500 text-zinc-500">
          <span className="font-semibold text-zinc-500">Phone:</span> +92-3033802020
        </a>
        <a href="mailto:surgicalsightsolutions@gmail.com" className="hover:text-orange-500 text-zinc-500">
          <span className="font-semibold text-zinc-500">Email:</span> surgicalsightsolutions@gmail.com
        </a>
      </div>


    </div>

    </div>

    <div className="mt-5 border-t border-[#d9dee5] pt-3 text-center">
      <p className="text-sm md:text-sm font-medium text-[#5f6672] tracking-[0.01em]">
        Copyright © 2026 Surgical Sight Solution
        <br />
        Developed by {" "}
        <a
          href="https://www.linkedin.com/in/raoumair792/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
        >
          Rao Umair
        </a>
      </p>
    </div>
  </div>;
}


export default Footer;
