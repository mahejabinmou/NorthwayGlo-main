// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

import { AppContext } from "../../../store/AppContext";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
const Topbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const toggleDropdown2 = () => {
  //   setIsDropdown2Open(!isDropdown2Open);
  // };
  // const location = useLocation();

  // const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // form

  return (
    <div>
      {/* Fixed Navbar */}
      {/* mobile */}

      {/* large screen nav */}
      <div className="bg-white">
        <div className={`hidden  lg:block w-full z-50  bg-[#F6941E]/[.3] `}>
          <div className="ToplargeScreenMenu bg-transparent font-helvetica font-normal">
            <div>
              <div className="TopmobileMenuParent ">
                <li>
                  <p className="flex gap-x-[10px] text-black/[.7]">
                    {" "}
                    Dhaka office:{" "}
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline hover:text-[#f6941e]"
                    >
                      +8801771660030
                    </a>{" "}
                  </p>
                </li>

                <li>
                  <p className="flex gap-x-[10px] text-black/[.7]">
                    {" "}
                    USA office:{" "}
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline hover:text-[#f6941e]"
                    >
                      +19179246493
                    </a>{" "}
                  </p>
                </li>

                {/* Other Menu Items */}
                <li>
                  <p className="flex gap-x-[10px] text-black/[.7]">
                    {" "}
                    Australia office:{" "}
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline hover:text-[#f6941e]"
                    >
                      +61449615940
                    </a>{" "}
                  </p>
                </li>
              </div>
            </div>

            <div className=" ">
              <div className="flex    gap-x-[10px]">
                <a
                  href="https://www.facebook.com/northwayglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={20} className="footerSocailIcon" />
                </a>
                <a
                  href="https://www.instagram.com/northwayglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} className="footerSocailIcon " />
                </a>
                <a
                  href="https://www.linkedin.com/in/northwayglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={20} className="footerSocailIcon " />
                </a>
                <a
                  href="https://x.com/northwayglobalx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={20} className="footerSocailIcon" />
                </a>
                <a
                  href="https://x.com/northwayglobalx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiYoutube size={20} className="footerSocailIcon" />
                </a>

                <a
                  href="https://x.com/northwayglobalx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTikTok size={20} className="footerSocailIcon" />
                </a>

                <a
                  href="https://wa.me/8801771660030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} className="footerSocailIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
