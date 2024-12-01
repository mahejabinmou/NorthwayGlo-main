// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoPersonOutline } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"
import { MdArrowRightAlt } from "react-icons/md"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const joyItems = [
    {
        imgSrc: "/b1.jpg",
        LgImg: "/b1.jpg",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "July 24, 2024",
        title: "Top Benefits of Studying Abroad for Career Growth",
        subtitle: "Daisy Sheren",
        extendedSubtitle: "25 Comments",
    },
    {
        imgSrc: "/b2.jpg",
        LgImg: "/b2.jpg",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "August 24, 2024",
        title: "Why Choose Europe for Your Higher Education?",
        subtitle: "Taylor Gomez",
        extendedSubtitle: "25 Comments",
    },
    {
        imgSrc: "/b3.jpg",
        LgImg: "/b3.jpg",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "September 9, 2024",
        title: "Scholarships and education  in higher Study ",
        subtitle: "Selena Swift",
        extendedSubtitle: "25 Comments",
    },
    {
        imgSrc: "/galleryPhoto/pexels-vantha-thang-1224068-2513993.jpg",
        LgImg: "/galleryPhoto/pexels-vantha-thang-1224068-2513993.jpg",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "January 24, 2024",
        title: "Preparing for Life as an International Student",
        subtitle: "Ariana Jenner",
        extendedSubtitle: "25 Comments",
    },
    {
        imgSrc: "/galleryPhoto/pexels-vlada-karpovich-4050439.jpg",
        LgImg: "/galleryPhoto/pexels-vlada-karpovich-4050439.jpg",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "March 24, 2024",
        title: "How to Choose the Right Study Destination Abroad",
        subtitle: "Kylie Grande",
        extendedSubtitle: "25 Comments",
    },
]

const OurLatestBlog = () => {
    var settings = {
        dots: false, // Hide default dots
        infinite: true,
        speed: 500,

        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 7000,
    }

    var settingsLarge = {
        dots: false, // Hide default dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    }

    return (
        <div className="sectionGap  ">
            <div className="text-center">
                <h1 className="chooseUsSamll pb-[20px] ">
                    Our Latest<span className="text-[#F6941E] "> Blog </span>
                </h1>
                <p className="homePara text-[#1E1E1E]/[.8] mx-auto max-w-[800px] pb-[30px]">
                    Stay updated with the latest insights and trends in
                    international education through our blog. From study abroad
                    tips to scholarship opportunities and student success
                    stories, our blog is your go-to resource for everything
                    related to global education.
                </p>
            </div>

            {/* Large slider */}
            <div className="slider-container hidden md:block ">
                <Slider {...settingsLarge}>
                    {joyItems.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className=" relative bg-white shadow-xl">
                                <div className="h-[197px]">
                                    <LazyLoadImage
                                        className="w-full h-full object-cover"
                                        src={item.LgImg}
                                        alt={item.LgImg}
                                    />
                                </div>
                                <div className="py-[30px] px-[20px]">
                                    <div className="flex justify-items-center  2xl:gap-x-[15px] gap-x-[10px] mb-[14px] mt-[10px]">
                                        <div className="h-[19px] w-[17px] flex-shrink-0 text-[#1E1E1E]/[.8]">
                                            <LazyLoadImage
                                                className="w-full h-full object-cover"
                                                src={item.icon}
                                                alt={item.icon}
                                            />
                                        </div>
                                        <p className=" text-[#1E1E1E]/[.8] font-normal text-[16px] leading-[24px] font-helvetica">
                                            {item.date}
                                        </p>
                                    </div>
                                    <h1
                                        className="font-bold xl:text-[24px] xl:leading-[36px] 2xl:text-[24px] 2xl:leading-[36px]
                 lg:text-[20px] lg:leading-[30px]  pb-[20px] text-[#1E1E1E]"
                                    >
                                        {item.title}
                                    </h1>
                                    <hr className="text-black " />
                                    <div className="flex items-center justify-between pt-[20px]">
                                        <div
                                            className="text-black/[.6]  font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[16px] lg:leading-[24px] lg:gap-x-[10px] 
                   md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                                        >
                                            <IoPersonOutline />
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Browse More Button */}
                <div className="mt-10 flex justify-center items-center ">
                    <Link to="/blogs">
                        <button
                            className=" hover:bg-[#F6941E] hover:text-white px-[20px] text-[#F6941E]  border border-[#F6941E]
            font-bold text-[18px] leading-[23px] py-[13px] flex justify-center items-center gap-x-[10px]"
                            // onClick={() => alert("Navigate to more blogs")}
                        >
                            Browse More <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile slider */}
            <div className="slider-container md:hidden block">
                <Slider {...settings}>
                    {joyItems.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className=" relative bg-white shadow-xl ">
                                <div className="h-[197px]">
                                    <LazyLoadImage
                                        className="w-full h-full object-cover"
                                        src={item.LgImg}
                                        alt={item.LgImg}
                                    />
                                </div>
                                <div className="xs:py-[30px] xs:px-[20px]">
                                    <div className="flex justify-items-center xs:gap-x-[10px] xs:mb-[14px] mt-[10px] ">
                                        <div className="h-[19px] w-[17px] flex-shrink-0 text-[#1E1E1E]/[.8]">
                                            <LazyLoadImage
                                                className="w-full h-full object-cover"
                                                src={item.icon}
                                                alt={item.icon}
                                            />
                                        </div>
                                        <p className="font-normal text-[#1E1E1E]/[.8] xs:text-[16px] xs:leading-[24px] font-helvetica">
                                            {item.date}
                                        </p>
                                    </div>
                                    <h1
                                        className="font-bold xs:text-[24px] xs:leading-[30px] xs:pb-[20px]
                 "
                                    >
                                        {item.title}
                                    </h1>
                                    <hr className="text-black " />
                                    <div className="flex items-center justify-between pt-[20px] xxs:pt-[10px]">
                                        <div className="text-black/[.6] flex items-center gap-x-[10px]">
                                            <IoPersonOutline />
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Browse More Button for Mobile */}
                <div className="hover:bg-[#F6941E] hover:text-white mt-5 font-helvetica font-bold flex justify-center items-center">
                    <Link to="/blogs">
                        <button
                            className="px-4 py-2 mt-4 text-[#F6941E]  border border-[#F6941E] flex justify-center items-center gap-x-[10px]"
                            // onClick={() => alert("Navigate to more blogs")}
                        >
                            Browse More Blog <MdArrowRightAlt />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurLatestBlog
