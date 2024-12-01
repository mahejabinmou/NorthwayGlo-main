// export default Footer;
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AiOutlineTikTok } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import useScrollTrickilyToTop from "../../../hooks/useScrollTrickilyToTop";
import { AppContext } from "../../../store/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);
  const openStudyDestination = useScrollTrickilyToTop(
    isDropdown2Open,
    setIsDropdown2Open
  );
  return (
    // bg-[#1E1E1E]
    <div className=" bg-[#F6941E]/[.25] text-black sectionGap">
      {/* foooter content */}
      <div className=" pt-[50px]">
        {/* mobile */}
        <div className="md:hidden block ">
          <div className=" px-[16px] xs:px-[16px] xl:px-[100px] md:px-[32px] lg:px-[60px] 2xl:px-[100px]">
            <div className="pb-[25px] grid grid-cols-1 justify-between    xs:gap-x-[150px] xs:gap-y-[50px]">
              <div>
                <div className="footerLogoparent mb-[20px]">
                  <LazyLoadImage
                    className="h-full w-full object-cover "
                    src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
                    alt=""
                  />
                </div>

                <div className=" ">
                  <p className="text-[12px] leading-[16px] pb-[16px] font-helvetica font-normal">
                    Copyright © {new Date().getFullYear()} Northway Global. All
                    rights reserved. Excellence in guidance and commitment to
                    success.
                  </p>
                </div>

                <div className=" ">
                  <div className="flex pb-[15px] gap-x-[10px]">
                    <a
                      href="https://www.facebook.com/northwayglobal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF size={16} className="footerSocailIcon" />
                    </a>
                    <a
                      href="https://www.instagram.com/northwayglobal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={16} className="footerSocailIcon " />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/northwayglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={16} className="footerSocailIcon " />
                    </a>
                    <a
                      href="https://x.com/northwayglobalx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter size={16} className="footerSocailIcon" />
                    </a>
                    <a
                      href="https://wa.me/8801771660030"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiYoutube size={16} className="footerSocailIcon" />
                    </a>
                    <a
                      href="https://wa.me/8801771660030"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineTikTok size={16} className="footerSocailIcon" />
                    </a>

                    <a
                      href="https://wa.me/8801771660030"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size={16} className="footerSocailIcon" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-black ">
                <h2 className="footerMenuTextTitle text-black">Category</h2>
                <div className="grid grid-cols-2">
                  <Link to="/About">
                    <p className="footerMenuText">About Us</p>
                  </Link>
                  <Link onClick={openStudyDestination}>
                    <p className="footerMenuText">Study Destination</p>
                  </Link>
                  <Link to="/photo-gallery">
                    {" "}
                    <p className="footerMenuText">Gallery</p>
                  </Link>
                  <Link to="/blogs">
                    {" "}
                    <p className="footerMenuText">Blogs</p>
                  </Link>
                  <Link to="/contactUs">
                    <p className="footerMenuText">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-black ">
              <h2 className="footerMenuTextTitle text-black">Contact Us</h2>

              <div className="grid grid-cols-2 gap-10">
                <div className="flex items-start gap-x-[10px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText ">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212
                  </span>
                </div>
                <p className="flex flex-row gap-x-[5px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <br />
                  <span className=" footerMenuText ">
                    <span className="font-bold">Dhaka Office:</span>
                    <br />
                    <a
                      href="tel:+8801771660030"
                      target="_blank"
                      className="underline"
                    >
                      +8801771660030
                    </a>
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <p className="flex items-start gap-x-[10px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText ">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    37 -22 73 Rd St (2nd floor), Jackson Heights NY, 11372
                  </span>
                </p>
                <p className="flex flex-row gap-x-[5px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <br />
                  <span className=" footerMenuText">
                    <span className="font-bold">USA Office:</span>
                    <br />
                    <a
                      href="tel:+19179246493"
                      target="_blank"
                      className="underline"
                    >
                      +19179246493
                    </a>
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <p className="flex items-start gap-x-[10px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                    alt=""
                  />
                  <span className=" footerMenuText ">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    3/4 Nellie Ave Mitchell, Park SA, 5043
                  </span>
                </p>
                <p className="flex flex-row gap-x-[5px]">
                  <LazyLoadImage
                    className="h-[24px] w-[24px] object-cover"
                    src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                    alt=""
                  />
                  <br />
                  <span className=" footerMenuText ">
                    <span className="font-bold">Australia Office:</span>
                    <br />
                    <a
                      href="tel:+61449615940"
                      target="_blank"
                      className="underline"
                    >
                      +61449615940
                    </a>
                  </span>
                </p>
              </div>

              <div>
                <p className="footerMenuText flex pl-[8px]  gap-x-[10px] pt-3">
                  <LazyLoadImage
                    className="h-[16px] w-[16px] "
                    src="https://i.ibb.co/tKvY3Q7/group-2-66d945163a8b4.webp"
                    alt=""
                  />

                  <span> info@northwayglobal.com.bd</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* large */}
        <div className="hidden md:block">
          {/* px-[16px] xs:px-[16px] xl:px-[100px] md:px-[32px] lg:px-[60px] 2xl:px-[100px] */}
          <div className="pb-[25px] grid grid-cols-1 lg:grid-cols-[20%_14%_66%] gap-x-[80px] gap-y-[120px] md:gap-y-[60px] overflow-hidden">
            <div>
              <div className="footerLogoparent mb-[10px]">
                <LazyLoadImage
                  className="h-full w-full object-cover "
                  src="https://i.ibb.co/s2xfMC5/image-13-66d80ee8cac4a.webp"
                  alt=""
                />
              </div>

              <div className="flex items-center">
                <p className="2xl:text-[12px] text-[10px] leading-[20px] pb-[16px] font-helvetica font-normal">
                  Copyright © {new Date().getFullYear()} Northway Global. All
                  rights reserved. Excellence in guidance and commitment to
                  success.
                </p>
              </div>

              <div className=" ">
                <div className="flex pb-[15px] gap-x-[10px]">
                  <a
                    href="https://www.facebook.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://www.instagram.com/northwayglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={16} className="footerSocailIcon " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/northwayglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={16} className="footerSocailIcon " />
                  </a>
                  <a
                    href="https://x.com/northwayglobalx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://wa.me/8801771660030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiYoutube size={16} className="footerSocailIcon" />
                  </a>
                  <a
                    href="https://wa.me/8801771660030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTikTok size={16} className="footerSocailIcon" />
                  </a>

                  <a
                    href="https://wa.me/8801771660030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={16} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-black">
              <h2 className="footerMenuTextTitle text-black">Category</h2>
              <div className="md:flex md:flex-row md:gap-20 lg:block">
                <Link to="/About">
                  <p className="footerMenuText">About Us</p>
                </Link>
                <Link onClick={openStudyDestination}>
                  <p className="footerMenuText">Study Destination</p>
                </Link>
                <Link to="/photo-gallery">
                  {" "}
                  <p className="footerMenuText">Gallery</p>
                </Link>
                <Link to="/blogs">
                  {" "}
                  <p className="footerMenuText">Blogs</p>
                </Link>
                <Link to="/contactUs">
                  <p className="footerMenuText">Contact Us</p>
                </Link>
              </div>
            </div>

            <div className="text-black">
              <h2 className="footerMenuTextTitle text-black">Contact Us</h2>

              <div className="grid grid-cols-[22%_25%_22%] gap-10">
                <div className="grid grid-cols-1">
                  <p className="flex items-start gap-x-[10px]">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                      alt=""
                    />
                    <span className=" footerMenuText">
                      <span className="font-bold">Dhaka Office:</span>
                      <br />
                      Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212
                    </span>
                  </p>

                  <p className="flex items-start gap-x-[5px] pt-6 lg:pt-0 xl:pt-7 2xl:pt-6">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                      alt=""
                    />
                    <br />

                    <span className=" footerMenuText">
                      <a
                        href="tel:+8801771660030"
                        target="_blank"
                        className="underline"
                      >
                        +8801771660030
                      </a>
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1">
                  <p className="flex items-start gap-x-[10px]">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                      alt=""
                    />
                    <span className=" footerMenuText ">
                      <span className="font-bold">USA Office:</span>
                      <br />
                      37 -22 73 Rd St (2nd floor), Jackson Heights NY, 11372
                    </span>
                  </p>
                  <p className="flex items-start gap-x-[5px] lg:pt-5 xl:pt-0">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                      alt=""
                    />
                    <br />
                    <span className=" footerMenuText ">
                      <a
                        href="tel:+19179246493"
                        target="_blank"
                        className="underline"
                      >
                        +19179246493
                      </a>
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1">
                  <p className="flex items-start gap-x-[10px]">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/1KYcfKc/ion-location-outline-66d818cf9e2f4.webp"
                      alt=""
                    />
                    <span className=" footerMenuText ">
                      <span className="font-bold">Australia Office:</span>
                      <br />
                      3/4 Nellie Ave Mitchell, Park SA, 5043
                    </span>
                  </p>
                  <p className="flex items-start gap-x-[5px] lg:pt-5 xl:pt-0">
                    <LazyLoadImage
                      className="h-[20px] w-[22px] object-cover"
                      src="https://i.ibb.co/Jq97kDH/f7-phone-66d9445380c9e.webp"
                      alt=""
                    />
                    <br />
                    <span className=" footerMenuText ">
                      <a
                        href="tel:+61449615940"
                        target="_blank"
                        className="underline"
                      >
                        +61449615940
                      </a>
                    </span>
                  </p>
                </div>
              </div>

              <div className=" ">
                <p className="footerMenuText flex  gap-x-[10px] md:pt-5 lg:pt-2 xl:pt-0">
                  <LazyLoadImage
                    className="h-[16px] w-[20px] "
                    src="https://i.ibb.co/tKvY3Q7/group-2-66d945163a8b4.webp"
                    alt=""
                  />

                  <span> info@northwayglobal.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-white/[.1]" />
        <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
          <div
            className="flex justify-center items-center space-x-[40px]
          "
          >
            <p className="footerMenuText ">
              Designed and Developed By
              <span>
                <Link
                  to="https://www.ethicalden.com/"
                  target="_blank"
                  className="underline"
                >
                  {""} Ethical Den
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
