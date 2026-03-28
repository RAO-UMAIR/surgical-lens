import { IoCall, IoLocation } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return <div className="w-full m-0 p-0">
    {/* <img src="/images/images.jpg" alt="logo" className="w-full h-[300px] md:h-[500px] object-fill" /> */}
    <img
      src="/images/contact/contact-white.png"
      alt="contact"
      className="w-full h-auto md:max-h-[520px] lg:max-h-[590px] xl:max-h-[640px] block mx-auto m-0 p-0"
    />
    <div className="mt-6">
      <h1 className="flex justify-center text-green-500 text-5xl">
        Get in Touch
      </h1>

      <div className="mt-6 md:mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <Fade className="w-full flex justify-center" direction="up" triggerOnce>
          <div className="w-full max-w-xs min-h-[190px] rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <IoCall className="text-2xl"/>
              </div>
              <h1 className="text-xl font-semibold text-slate-800">Contact Details</h1>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2">
                <a href="tel:+923033802020" className="text-slate-600 hover:text-blue-600">+92-3033802020</a>
                <span className="rounded-full bg-blue-200 px-2 text-xs font-semibold text-blue-800">1</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2">
                <a href="tel:+923000446624" className="text-slate-600 hover:text-blue-600">+92-3000446624</a>
                <span className="rounded-full bg-blue-200 px-2 text-xs font-semibold text-blue-800">2</span>
              </div>
            </div>
          </div>
        </Fade>
        {/* 11111111 */}

        <Fade className="w-full flex justify-center" direction="up" triggerOnce>
          <div className="w-full max-w-xs min-h-[190px] rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <IoLocation className="text-2xl"/>
              </div>
              <h1 className="text-xl font-semibold text-slate-800">Head Office</h1>
            </div>
            <p className="text-slate-600">
              Office 3 Golden Heights Plaza Opp Hight Court, Multan Cantt
            </p>
          </div>
        </Fade>

        {/* 22222222 */}
        <Fade className="w-full flex justify-center" direction="up" triggerOnce>
          <div className="w-full max-w-xs min-h-[190px] rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"> 
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <MdMail className="text-2xl"/>
              </div>
              <h1 className="text-xl font-semibold text-slate-800">Email Address</h1>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-indigo-50 px-3 py-2">
                <a href="mailto:surgicalsightsolutions@gmail.com" className="text-slate-600 hover:text-blue-600">surgicalsightsolutions@gmail.com</a>
                <span className="rounded-full bg-indigo-200 px-2 text-xs font-semibold text-indigo-800">1</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-indigo-50 px-3 py-2">
                <a href="mailto:raoumar@gmail.com" className="text-slate-600 hover:text-blue-600">raoumar@gmail.com</a>
                <span className="rounded-full bg-indigo-200 px-2 text-xs font-semibold text-indigo-800">2</span>
              </div>
            </div>
          </div>
        </Fade>


      </div>
      <div className="mt-16 md:mt-20">
        <img src="/images/location.png" className="w-full h-[300px] md:h-[600px]  object-cover"/>
      </div>

    </div>
  </div>;
}

export default Contact;
