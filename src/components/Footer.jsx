import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return <div className="bg-zinc-800 px-4 md:px-12 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-between">
    {/* Grid-col-1 */}
    <div className="flex flex-col gap-6 justify-start md:w-44">
      <img src="/logo.png" className="w-32 sm:w-40 md:w-44 lg:w-48" />
      <p className="text-zinc-200 font-light text-md w-[290px] leading-8">
        Offering trusted surgical lenses, precision injectors, ophthalmic gels, and essential eye-care devices for hospitals, clinics, and professionals .
      </p>

    </div>

    {/* Grid-col-2 */}
    <div className="flex flex-col justify-start gap-8 text-md text-zinc-200 font-light">
      <h1 className="font-bold text-2xl">USEFULL LINKS</h1>
      <Link to="/about" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        ABOUT SURGICAL SIGHT SOLUTIONS
      </Link>
      <Link to="/products/lens" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        LENS
      </Link>
      <Link to="/products/gells" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        GELLS
      </Link>
      <Link to="/products/injectors" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <HiOutlineChevronRight className="text-orange-500"/>
        INJECTORS
      </Link>


    </div>
    {/* Grid-col-3 */}
    <div className="flex flex-col justify-start gap-6 text-md text-zinc-200 font-light sm:ml-6 lg:ml-0">
      <h1 className="font-bold text-2xl">SOCIAL LINKS</h1>
      <a href="https://wa.me/03035458818" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <FaWhatsapp className="text-green-400 text-[20px]"/>
        WhatsApp 
      </a>
      <a href="https://www.instagram.com/surgicalsightsolutions" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <FaInstagram className="text-pink-400 text-[20px]"/>
        Instagram
      </a>
      <a href="https://www.facebook.com/surgicalsightsolutions" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <FaFacebook className="text-blue-500 text-[20px]"/>
        Facebook
      </a>
      <a href="https://www.linkedin.com/company/surgicalsightsolutions" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 cursor-pointer hover:text-orange-500">
        <FaLinkedin className="text-sky-400 text-[20px]"/>
        LinkedIn
      </a>


    </div>
    {/* Grid-col-4 */}
    <div className="flex flex-col justify-start gap-4 text-md text-zinc-200 font-light">
      <h1 className="font-bold text-2xl">HEAD OFFICE</h1>
      <div className="inline-flex flex-col">
        <div className="inline-flex items-center gap-3">
          <span className="h-10 w-10 flex items-center justify-center rounded-full border border-orange-400">
            <IoLocation className="text-xl text-orange-400"/>
          </span>
          <span className="text-md font-semibold">Surgical Sight Solutions</span>
        </div>
        <p className="text-sm text-zinc-300">
          Building-12A Street ZA, Multan Cantt, Punjab, Pakistan
        </p>
      </div>
      <div className="flex flex-col gap-3 text-zinc-300 text-sm">
        <a href="tel:+923033802020" className="hover:text-orange-500">
          <span className="font-semibold text-orange-400">Phone:</span> +92-3033802020
        </a>
        <a href="mailto:surgicalsightsoltions@gmail.com" className="hover:text-orange-500">
          <span className="font-semibold text-orange-400">Email:</span> surgicalsightsoltions@gmail.com
        </a>
      </div>


    </div>

  </div>;
}

export default Footer;
