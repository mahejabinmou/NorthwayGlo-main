import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./StudentSpeak.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

const StudentImg = [
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/BNcvHHW/sutdent1-66dbeb9abbe6e.webp",
    },
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/mBd3YNG/student2-66dbebe52d1de.webp",
    },
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/31rsKnG/student3-1-66dbed1955d2e.webp",
    },

    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/BNcvHHW/sutdent1-66dbeb9abbe6e.webp",
    },

    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/mBd3YNG/student2-66dbebe52d1de.webp",
    },
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: "https://i.ibb.co.com/31rsKnG/student3-1-66dbed1955d2e.webp",
    },
]

const StudentSpeak = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    // centerPadding: "0",
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div>
            {/* large */}
            <div className="hidden lg:block">
                <div
                    className="relative bg-cover bg-center h-[382px] items-center bg-fixed my-24"
                    style={{
                        backgroundImage: `url(${"https://i.ibb.co.com/R6Q4WKP/studentbg-66dbe8ed9b77d.webp"})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div>
                        <div className="xl:mx-[432px]  lg:mx-[200px]  text-center py-8 z-10 relative text-white translate-y-[50px]">
                            <h1 className="font-bold font-helvetica text-[48px] leading-[57.6px] ">
                                Student{" "}
                                <span className="text-[#F6941E]">Speaks</span>
                            </h1>
                            <p className="font-normal text-[16px] leading-[24px] text-white/[.8]">
                                Northway Global truly made my dream of studying
                                abroad a reality. Their team guided me through
                                every step, from choosing the right university
                                to ensuring a smooth visa process. I couldn't
                                have done it without their constant support.
                            </p>
                        </div>
                        <div className="max-w-[1140px] mx-auto relative translate-y-[15%]">
                            <Slider
                                {...settings}
                                // className=" absolute mt-10 max-w-6xl mx-auto left-[150px] right-[150px]"
                                className="ourStudentSpeak"
                            >
                                {StudentImg.map((StudentImg, index) => (
                                    <div key={index} className=" ">
                                        <div className="bg-white shadow-md  p-[24px]">
                                            <div className="relative ">
                                                <LazyLoadImage
                                                    src={StudentImg?.image}
                                                    alt={StudentImg.name}
                                                    className="w-full h-64 object-cover "
                                                />
                                                <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center ">
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

            {/* mobile */}
            <div className="lg:hidden block">
                <div
                    className="relative bg-cover bg-center h-[382px] items-center bg-fixed my-24"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/R6Q4WKP/studentbg-66dbe8ed9b77d.webp")`,
                    }}
                >
                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

                    {/* Text and Content */}
                    <div className="relative z-10">
                        <div>
                            <div className="mx-auto max-w-[432px] text-center pt-8 text-white">
                                <h1 className="font-bold font-helvetica text-[30px] leading-[36px] pb-[10px]">
                                    Student{" "}
                                    <span className="text-[#F6941E]">
                                        Speaks
                                    </span>
                                </h1>
                                <p
                                    className="font-normal text-[14px] leading-[21px]  xs:px-[20px]
    md:px-[32px] lg:px-[60px]  xl:px-[100px]  2xl:px-[100px] 
    xs:text-[14px] xs:leading-[21px] xxs:text-[12px] xxs:leading-[18px]  text-white/[.8]"
                                >
                                    Northway Global truly made my dream of
                                    studying abroad a reality. Their team guided
                                    me through every step, from choosing the
                                    right university to ensuring a smooth visa
                                    process. I couldn't have done it without
                                    their constant support.
                                </p>
                            </div>
                        </div>

                        {/* Slider */}
                        <div className="maxd-w-[300px]  md:max-w-[1140px] mx-auto relative translate-y-[18%]">
                            <Slider {...settings} className="ourStudentSpeak ">
                                {StudentImg.map((StudentImg, index) => (
                                    <div key={index} className=" ">
                                        <div className="bg-white shadow-md  p-2">
                                            <div className="relative">
                                                <LazyLoadImage
                                                    src={StudentImg?.image}
                                                    alt={StudentImg.name}
                                                    className="w-full  h-[250px]  object-cover "
                                                />
                                                <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center ">
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
                                            <div className="mt-4 ">
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
        </div>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <button
            className="ml-[50%] mr-[50%] absolute  bottom-[-50px] left-4 z-10  rounded-full p-2 hover:bg-[#F6941E] hover:text-white  bg-[#F6941E33]/[.2] text-[#1E1E1E]
       "
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 "
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <button
            className="ml-[50%] mr-[50%] absolute bottom-[-50px] right-4 z-10 
       bg-[#F6941E33]/[.2]
      text-[#1E1E1E] 
      
      rounded-full p-2 hover:bg-[#F6941E] hover:text-white"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 "
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    )
}

export default StudentSpeak
