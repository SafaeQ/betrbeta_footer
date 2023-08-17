import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* the main content goes here */}</div>
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center flex flex-col gap-10 m-8">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img className="w-8 h-8" src="companyLogo.webp" alt="Betr Beta" />
              <p className="font-extrabold text-[#d3d0d6] text-[18px]">
                Betr Beta
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="font-bold text-[#7c797d] w-[50ù]">
                Download Our App Today And Get A Complimentary Valet
              </p>
              <button
                type="button"
                class="inline-block w-[50%] rounded-full border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 "
                data-te-ripple-init
              >
                Download App
              </button>
            </div>
            <div className="flex flex-row gap-3">
              <button className="rounded-full">
                <FaInstagram size={25} />
              </button>
              <button className="rounded-full">
                <FaFacebookSquare size={25} />
              </button>
              <button className="rounded-full">
                <FaTwitterSquare size={25} />
              </button>
              <button className="rounded-full">
                <FaLinkedin size={25} />
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold">About Us</h4>
              <p className="font-bold text-[#d3d0d6] text-sm">Our Story</p>
              <p className="font-semibold text-[#7c797d] text-sm">Careers</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold">Commpany Values</h4>
              <p className="font-bold text-[#d3d0d6] text-sm">Environment</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold">Locations</h4>
              <p className="font-semibold text-[#7c797d] text-sm text-left flex items-start justify-start ">
                10 Anson Road, no. 20-05 International Plaza,
                <br /> 079903, Singapore
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h4 className="font-bold">Contact</h4>
              <p className="font-bold text-[#7c797d]">123324234</p>
              <p className="font-bold text-[#7c797d]">info@dsdfsd.k</p>
            </div>
          </div>
          <div className="flex flex-row justify-between text-[#7c797d]">
            <div>
              <p>Terms & conditions</p>
            </div>
            <div className="text-lg font-bold">
              <p>&copy; 2023 Betr Beta. All rights reserved.</p>
            </div>
            <div className=" font-semibold">
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
