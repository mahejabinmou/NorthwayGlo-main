/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./hero.css"
import { useRef } from "react"
import { gsap } from "gsap"
import { MdArrowRightAlt } from "react-icons/md"
import HeroCard from "./HeroCard/HeroCard"
import { Link } from "react-router-dom"

const HeroSection = () => {
    const officesData = [
        {
            name: "Experienced Consultants",
            image: "/Group.svg",
        },
        {
            name: "98.8% Success Rate",
            image: "/Frame.svg",
        },
        {
            name: "Positive And Timely Results",
            image: "/Frame (1).svg",
        },
        {
            name: "Seamless Procedures",
            image: "/Frame (2).svg",
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }
    const welcomeRef = useRef(null)
    const northwayRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            welcomeRef.current.children,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.25,
                duration: 0.5,
            }
        )

        gsap.fromTo(
            northwayRef.current.children,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.5,
                delay: 2.5,
            }
        )
    }, [])
    const welcomeMobileRef = useRef(null)
    const northwayMobileRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            welcomeMobileRef.current.children,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.2,
                duration: 0.5,
            }
        )

        gsap.fromTo(
            northwayMobileRef.current.children,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.5,
                delay: 2,
            }
        )
    }, [])

    return (
        <div className=" ">
            {/* mobile */}
            <div className="relative  md:hidden block">
                <div
                    className="absolute  z-10 font-helvetica  
          mt-[100px]    xs:mt-[100px] px-[16px] 
          "
                >
                    <div>
                        {/* "Welcome to" text */}
                        <h1 className="homeHead text-white md:pb-[15px]">
                            <span ref={welcomeMobileRef}>
                                {"Welcome to".split("").map((char, index) => (
                                    <span key={index}>{char}</span>
                                ))}
                            </span>
                        </h1>

                        {/* "Northway Global" text */}
                        <h1 className="homeHead text-[#F6941E] md:pb-[15px]">
                            <span ref={northwayMobileRef}>
                                {"Northway Global"
                                    .split("")
                                    .map((char, index) => (
                                        <span key={index}>{char}</span>
                                    ))}
                            </span>
                        </h1>
                    </div>
                    <p className="pb-[30px] homePara  text-white   max-w-[332px]">
                        Choose Northway For Your Study Abroad Journey & Embark
                        on An Exceptional Educational Experience That Combines
                        Academic Excellence, Personalized Guidance, and a
                        Seamless Transition to You.
                    </p>
                    <Link to="/studyDistentionFlag">
                        <button
                            className="homeLargeAppoinMent flex items-center  justify-between
          gap-x-[10px]  
           bg-[#F6941E] px-[16px] py-[11.5px] "
                        >
                            <span className="">Start Your Journey</span>{" "}
                            <MdArrowRightAlt />
                        </button>
                    </Link>
                </div>

                <div className="slider-containers overflow-hidden">
                    <Slider {...settings}>
                        {/* slider 1 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"/slider1.jpg"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>
                        {/* slider 2 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"/slider2.jpg"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>
                        {/* slider 3 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"https://i.ibb.co/Y38Vfq9/large-brick-building-with-clock-front.webp"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>
                        {/* slider 4 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"https://i.ibb.co/9g19Hr7/university-campus-with-big-field-photography-students-are-waking-gossiping-their-campus-free.webp"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>

                        {/* slider 5 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"https://i.ibb.co/YPFxK2C/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>

                        {/* slider 6 */}
                        <div className="  relative w-[100%] h-auto xs:h-[1100px]">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${"https://i.ibb.co/2WR7Wt3/datingscout-Au-C9-Ri-Kv-Cl-A-unsplash.webp"})`,
                                        filter: "brightness(0.6)",
                                    }}
                                    className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[485px] xs:h-[485px]   justify-center items-center"
                                ></div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div
                    className="absolute inset-0 font-helvetica  top-[420px] mx-[65px] 
        xs:top-[420px] xs:mx-[65px]   grid  grid-cols-1 gap-y-[24px] "
                >
                    {officesData.map((office) => (
                        <HeroCard
                            key={office.name}
                            name={office.name}
                            image={office.image}
                        ></HeroCard>
                    ))}
                </div>
            </div>

            {/* big screen */}
            <div className=" relative h-[914px] flex items-center justify-center hidden md:block">
                <div className="  ">
                    <div className="absolute  z-10 font-helvetica  xl:ml-[150px] md:mt-[150px] lg:mt-[100px]  lg:ml-[60px] md:ml-[80px] ml-[60px]">
                        <div>
                            <h1 className="homeHead xl:pb-[15px] mt-10 max-w-[557px]">
                                <span ref={welcomeRef}>
                                    {"Welcome to"
                                        .split("")
                                        .map((char, index) => (
                                            <span key={index}>{char}</span>
                                        ))}
                                </span>
                            </h1>

                            {/* "Northway Global" text in orange - second line */}
                            <h1 className="homeHead text-[#F6941E] xl:pb-[15px] lg:pb-[15px] max-w-[557px]">
                                <span ref={northwayRef}>
                                    {"Northway Global"
                                        .split("")
                                        .map((char, index) => (
                                            <span key={index}>{char}</span>
                                        ))}
                                </span>
                            </h1>
                        </div>
                        <p className="homePara max-w-[485px] lg:pb-[30px] md:pb-[30px] xl:pb-[30px]">
                            Choose Northway For Your Study Abroad Journey &
                            Embark on An Exceptional Educational Experience That
                            Combines Academic Excellence, Personalized Guidance,
                            and a Seamless Transition to You.
                        </p>
                        <Link to="/studyDistentionFlag">
                            <button className="homeButton flex items-center justify-between bg-[#F6941E]">
                                Start Your Journey <MdArrowRightAlt />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Slider for images only */}
                <div className="slider-container ">
                    <Slider {...settings}>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage: 'url("/slider1.jpg")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage: 'url("/slider2.jpg")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://i.ibb.co/Y38Vfq9/large-brick-building-with-clock-front.webp")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://i.ibb.co/9g19Hr7/university-campus-with-big-field-photography-students-are-waking-gossiping-their-campus-free.webp")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://i.ibb.co/YPFxK2C/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                        <div className="relative">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://i.ibb.co/2WR7Wt3/datingscout-Au-C9-Ri-Kv-Cl-A-unsplash.webp")',
                                    filter: "brightness(0.5)",
                                }}
                                className="bg-no-repeat bg-center bg-cover w-full h-[914px]"
                            ></div>
                        </div>
                    </Slider>
                </div>

                {/* Grid of Hero Cards */}
                <div className="absolute inset-0 font-helvetica 2xl:top-[597px] xl:top-[597px] lg:top-[597px] md:top-[550px] xl:mx-[150px] 2xl:mx-[150px] lg:mx-[60px] md:mx-[80px] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xl:gap-x-[24px] 2xl:gap-x-[24px] lg:gap-x-[20px] md:gap-x-[10px]">
                    {officesData.map((office) => (
                        <HeroCard
                            key={office.name}
                            name={office.name}
                            image={office.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
