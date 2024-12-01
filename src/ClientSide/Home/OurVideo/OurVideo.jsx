import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./OurVideo.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

const StudentImg = [
    {
        image: "https://i.ibb.co.com/c2hqNtm/video-66e0a8faba4d2.webp",
    },
    {
        image: "https://i.ibb.co.com/yYv1byR/rectangle-3-66e0a92b21960.webp",
    },
    {
        image: "https://i.ibb.co.com/dP60mt4/rectangle-2-1-66e0a8986faeb.webp",
    },

    {
        image: "https://i.ibb.co.com/c2hqNtm/video-66e0a8faba4d2.webp",
    },

    {
        image: "https://i.ibb.co.com/yYv1byR/rectangle-3-66e0a92b21960.webp",
    },
    {
        image: "https://i.ibb.co.com/dP60mt4/rectangle-2-1-66e0a8986faeb.webp",
    },
]

const OurVideo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplaySpeed: 6000,
        slidesToScroll: 0,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 0,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 6000,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 6000,
                },
            },
        ],
    }

    return (
        <div>
            {/* large */}
            <div className="hidden lg:block lg:pb-[100px] md:pb-[80px] xs:pb-[80px]">
                <div
                    className="relative bg-cover bg-center min-h-[466px] items-center bg-fixed my-24"
                    // style={{
                    //   backgroundImage: `url(${"https://i.ibb.co.com/R6Q4WKP/studentbg-66dbe8ed9b77d.webp"})`,
                    // }}
                >
                    <div className="absolute inset-0 bg-black opacity-80 "></div>
                    <div>
                        <div className=" xl:mx-[432px]  lg:mx-[200px]  text-center py-8  z-10 relative text-white">
                            <h1 className="studyDestinationHeading pb-[20px]">
                                Our{" "}
                                <span className="text-[#F6941E] ">Video</span>
                            </h1>
                            <p className="EveryPara text-[#FFFFFF]/[.8]">
                                Explore insights and success stories from our
                                students who have embarked on their study abroad
                                journeys. Watch how we've helped countless
                                individuals achieve their academic dreams across
                                the globe.
                            </p>
                        </div>

                        <div className="max-w-[1140px]  mx-auto absolute  bottom-[-150px] xl:left-[150px] xl:right-[150px] lg:left-[60px] lg:right-[60px] md:left-[80px] md:right-[80px] xs:left-[16px] xs:right-[16px]">
                            <Slider {...settings} className="ourVideoSlider">
                                {StudentImg.map((StudentImg, index) => (
                                    <div key={index} className="">
                                        <div className="">
                                            <div className="relative">
                                                <LazyLoadImage
                                                    src={StudentImg?.image}
                                                    alt={StudentImg.name}
                                                    className="w-full h-[366px] object-cover bg-[#000000]/[.2]"
                                                />
                                                <button className="absolute inset-0  bg-opacity-40 flex items-center justify-center ">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-12 w-12 text-white"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.96V6.96a.75.75 0 011.13-.65l5.25 3.04a.75.75 0 010 1.3l-5.25 3.04a.75.75 0 01-1.13-.65z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden block md:pb-[80px] pb-[20px] overflow-hidden">
                <div
                    className="relative bg-cover bg-center min-h-[263px] items-center bg-fixed mt-[60px] md:mt-[80px]"
                    // style={{
                    //   backgroundImage: `url("https://i.ibb.co/R6Q4WKP/studentbg-66dbe8ed9b77d.webp")`,
                    // }}
                >
                    <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
                    <div className="relative z-10 ">
                        <div className=" md:mx-auto max-w-[432px] text-center py-2 text-white ">
                            <h1
                                className="font-bold font-helvetica 
              xs:text-[30px] xs:leading-[36px] pb-[20px] pt-8 "
                            >
                                Student{" "}
                                <span className="text-[#F6941E]">Speaks</span>
                            </h1>
                            <p className="font-normal font-helvetica xs:text-[14px] xs:leading-[21px]  text-[#FFFFFF]/[.8] px-[20px] md:px-0 pb-[20px] md:pb-[20px]">
                                Hear directly from our students as they share
                                their experiences, successes, and the impact our
                                services have had on their academic journeys.
                                Their stories reflect the support and guidance
                                we provide to help them achieve their dreams and
                                excel in their chosen fields.
                            </p>
                        </div>
                        {/* Slider */}
                        <Slider
                            {...settings}
                            className="absolute ourVideoSlider top-[50px]"
                        >
                            {/* md:left-[32px] md:right-[32px] xs:left-[8px] xs:right-[8px]  */}
                            {StudentImg.map((StudentImg, index) => (
                                <div key={index} className=" ">
                                    <div className="">
                                        <div className="relative">
                                            <LazyLoadImage
                                                src={StudentImg?.image}
                                                alt={StudentImg.name}
                                                className="w-full h-36 object-cover "
                                            />
                                            <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-12 w-12 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.96V6.96a.75.75 0 011.13-.65l5.25 3.04a.75.75 0 010 1.3l-5.25 3.04a.75.75 0 01-1.13-.65z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h3 className="font-bold text-xl">
                                                {StudentImg.name}
                                            </h3>
                                            <p className="text-gray-500">
                                                {StudentImg.university}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVideo
