/* eslint-disable react-hooks/exhaustive-deps */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { MdArrowRightAlt } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

const StudyDestination = () => {
    gsap.registerPlugin(ScrollTrigger)

    /*  const sectionRef = useRef()

    const animateBox = (ref, x, y, delay, duration = 1.5) => {
        gsap.from(ref.current, {
            x: x || 0,
            y: y || 0,
            opacity: 0,
            scale: 0.8, // Slight scale for smooth effect
            duration,
            delay,
            ease: "expo.out", // Smooth ease-out for the animation
        })
    }

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Trigger animations with a stagger effect
                boxRefs.forEach((ref, index) => {
                    const delay = index * 0.2 // Stagger the animation
                    const xOffset = index % 2 === 0 ? 200 : -200 // Alternate direction
                    const yOffset = index % 3 === 0 ? 150 : 0 // Add a slight vertical shift for variety

                    animateBox(ref, xOffset, yOffset, delay)
                })
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        })

        const currentSection = sectionRef.current

        if (currentSection) {
            observer.observe(currentSection)
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection)
            }
        }
    }, []) */
    const boxRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]
    useEffect(() => {
        boxRefs.forEach((ref, index) => {
            if (ref.current) {
                // Only apply GSAP animation if ref is valid
                gsap.fromTo(
                    ref.current,
                    {
                        x: index % 2 === 0 ? "-100%" : "100%",
                        opacity: 1,
                        scale: 0.9,
                        rotation: 10,
                        ease: "power3.out",
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: 1,
                            toggleActions: "play reverse play reverse",
                        },
                        //     onComplete: () => {
                        //     gsap.to(ref.current, {
                        //         // y: -10,
                        //         // duration: 0.2,
                        //         // yoyo: true,
                        //         // repeat: 1,
                        //         // ease: "bounce.out",
                        //     })
                        // },

                        // onStart: () => {
                        //     gsap.to(ref.current, {
                        //         // x: 10,
                        //         // duration: 0.1,
                        //         // repeat: 0,
                        //         // yoyo: true,
                        //         // ease: "power1.inOut",
                        //     })
                        // },
                    }
                )
            }
        })

        // Cleanup ScrollTriggers on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [boxRefs])

    //mobile devices
    useEffect(() => {
        const images = document.querySelectorAll(".scroll-image")

        images.forEach((image, index) => {
            const direction = index % 2 === 0 ? "100%" : "-100%"
            const start = index % 2 === 0 ? "top 90%" : "top 70%"

            gsap.fromTo(
                image,
                {
                    x: direction,
                    opacity: 0,
                    ease: "power3.out",
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: start,
                        end: "bottom 20%",
                        scrub: 1,
                        toggleActions: "play reverse play reverse",
                    },
                }
            )
        })

        // Cleanup scroll triggers on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="sectionGap overflow-hidden">
            {/* header for mobile */}
            <div className="md:hidden block ">
                <h1 className="text-[#1E1E1E] chooseUsSamll xs:pb-[20px]  text-center">
                    <span className="text-[#F6941E] ">Study </span> Destination
                </h1>
                <p className="homePara text-[#1E1E1E]/[.8] xs:pb-[30px] text-center ">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>
            </div>

            {/* header for large */}
            <div className="hidden md:block text-center">
                <h1 className=" chooseUsSamll lg:pb-[20px] md:pb-[20px] xl:pb-[20px] pb-[20px] xs:pb-[20px] text-[#1E1E1E]">
                    <span className="text-[#F6941E] ">Study </span> Destination
                </h1>

                <p className=" text-[#1E1E1E]/[.8] max-w-[750px] mx-auto xl:pb-[30px] pb-[30px] xs:pb-[30px] homePara">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>

                <p className="md:hidden block homePara text-[#1E1E1E]/[.8] xl:mr-[563px] 2xl:mr-[563px] lg:mr-[320px] md:mr-[120px] xl:pb-[30px] 2xl:pb-[30px] pb-[30px] xs:pb-[30px]">
                    Discover your ideal study destination with our expert
                    guidance. We help you navigate the best global educational
                    opportunities, tailored to your goals and ambitions. Start
                    your journey towards academic success today!
                </p>
            </div>

            {/* boxes for large */}
            <div className="hidden md:block">
                <div
                    className="grid md:grid-cols-3 grid-cols-1 md:gap-[25px]"
                    // ref={sectionRef}
                >
                    {/* usa */}
                    <div
                        ref={boxRefs[6]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/studydestination/usa.webp"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">United States</h1>
                            <Link to="/studyDistention?country=USA">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* uk */}

                    <div
                        ref={boxRefs[7]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/London.jpg"
                            alt="London"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Uk</h1>
                            <Link to="/studyDistention?country=UK">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Canada */}
                    <div
                        ref={boxRefs[13]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/CanadaF.jpg"
                            alt="Canada"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Canada</h1>
                            <Link to="/studyDistention?country=Canada">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Australia */}
                    <div
                        ref={boxRefs[8]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/studydestination/australia.webp"
                            alt="Australia"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Australia</h1>
                            <Link to="/studyDistention?country=Australia">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Europe */}
                    <div
                        ref={boxRefs[11]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/studydestination/europe.webp"
                            alt="Europe"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Europe</h1>
                            <Link to="/studyDistention?country=UK">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Malaisia */}

                    <div
                        ref={boxRefs[12]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/malaysiaStudy.webp"
                            alt="Malaysia"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Malaysia</h1>
                            <Link to="/studyDistention?country=Malaysia">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={boxRefs[10]}
                        className=" relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/chinaGreatWall.jpg"
                            alt="United States"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">China</h1>
                            <Link to="/studyDistention?country=China">
                                <button className="flex items-center justify-center readMore ">
                                    Read more{" "}
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={boxRefs[9]}
                        className="relative group w-full h-[267px] "
                    >
                        <LazyLoadImage
                            src="/studydestination/germany.webp"
                            alt="Germany"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="united">Germany</h1>
                            <Link to="/studyDistention?country=Germany">
                                <button className="flex items-center justify-center readMore ">
                                    Read more
                                    <MdArrowRightAlt className="ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* boxes for mobile */}
            <div className="md:hidden block">
                <div
                    // ref={sectionRef}
                    className="grid 
 grid-cols-1 xs:grid-cols-1 "
                >
                    {/* usa */}
                    <div className="scroll-image">
                        <div
                            //   ref={boxRefs[5]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/studydestination/usa.webp"
                                alt="United States"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">United States</h1>
                                <Link to="/studyDistention?country=USA">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* uk */}
                    <div className="">
                        <div
                            //   ref={boxRefs[2]}
                            className="relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/London.jpg"
                                alt="UK"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Uk</h1>
                                <Link to="/studyDistention?country=Australia">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* canada */}

                        <div
                            //   ref={boxRefs[4]}
                            className=" relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/CanadaF.jpg"
                                alt="Canada"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Canada</h1>
                                <Link to="/studyDistention?country=Canada">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Australia */}

                    <div className="scroll-image">
                        <div
                            //   ref={boxRefs[2]}
                            className="relative group w-full h-[267px] pb-[20px]"
                        >
                            <LazyLoadImage
                                src="/studydestination/australia.webp"
                                alt="Australia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Australia</h1>
                                <Link to="/studyDistention?country=Australia">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Europe */}
                    <div className="">
                        <div
                            //   ref={boxRefs[3]}
                            className="relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/studydestination/europe.webp"
                                alt="Ireland"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Europe</h1>
                                <Link to="/studyDistention?country=Ireland">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div
                            //   ref={boxRefs[1]}
                            className="relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/malaysiaStudy.webp"
                                alt="Malaysia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Malaysia</h1>
                                <Link to="/studyDistention?country=China">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* china */}
                        <div
                            //   ref={boxRefs[1]}
                            className="relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/chinaGreatWall.jpg"
                                alt="China"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">China</h1>
                                <Link to="/studyDistention?country=China">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Germany */}
                        <div
                            //   ref={boxRefs[0]}
                            className="relative group w-full h-[267px] pb-[20px] scroll-image"
                        >
                            <LazyLoadImage
                                src="/studydestination/germany.webp"
                                alt="Germany"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#00000085]/[.52] to-[#F6941E]/[.65]"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h1 className="united">Germany</h1>
                                <Link to="/studyDistention?country=Germany">
                                    <button className="flex items-center justify-center readMore gap-x-[10px]">
                                        Read more <MdArrowRightAlt />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyDestination
