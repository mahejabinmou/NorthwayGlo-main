import { useState } from "react"
import { MdArrowRightAlt } from "react-icons/md"
import { countryDetailsDestructor } from "../../../utils/CountryDetails"
import { LazyLoadImage } from "react-lazy-load-image-component"

const PopularUni = ({ countryName }) => {
    const countryDetails = countryDetailsDestructor(countryName)
    const [showAll, setShowAll] = useState(false)

    // const visibleUniversities = showAll
    //   ? countryDetails?.universities
    //   : countryDetails?.universities.slice(0, 6);

    return (
        <div
            className="w-full text-center mt-[100px] xs:mt-[100px] 
       md:mt-[80px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[150px] relative bg-cover bg-center h-auto md:min-h-[750px] items-center bg-fixed flex flex-col pb-[70px]"
            style={{
                backgroundImage: `url(${"https://i.ibb.co.com/6F4jS3x/unibg-66db347170e15.webp"})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
                <div className="text-white md:my-10 my-10 mt-8 flex justify-center font-bold md:text-[48px] md:leading-[57px] xs:text-[35px] xs:leading-[57px] xxs:text-[30px] xxs:leading-[57px]">
                    <h1
                        className="font-helvetica font-bold lg:text-[48px] lg:leading-[57.6px]
            xs:text-[30px] xs:leading-[36px] lg:mb-[30px] lg:mt-[77px] md:mb-[30px] md:mt-[50px]
            xs:mb-[50px] xs:mt-[50px]"
                    >
                        <span className="text-[#F6941E]">Popular</span>{" "}
                        Universities
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 md:px-8 pb-10">
                    <div className="bg-white px-[25px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img1}
                            alt={countryDetails?.img1}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title1}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img2}
                            alt={countryDetails?.img2}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title2}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img3}
                            alt={countryDetails?.img3}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title3}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img4}
                            alt={countryDetails?.img4}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title4}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img5}
                            alt={countryDetails?.img5}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title5}
                        </h4>
                    </div>

                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img6}
                            alt={countryDetails?.img6}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title6}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img7}
                            alt={countryDetails?.img7}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title7}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img8}
                            alt={countryDetails?.img8}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title8}
                        </h4>
                    </div>
                    <div className="bg-white px-[8.5px] py-[38.5px] flex flex-col justify-center items-center">
                        <LazyLoadImage
                            className="h-[70px] w-[70px] mb-[12px]"
                            src={countryDetails?.img9}
                            alt={countryDetails?.img9}
                        />
                        <h4
                            className="font-bold font-helvetica xl:text-[18px] xl:leading-[23.4px]
                lg:text-[14px] lg:leading-[21px] md:text-[10px] md:leading-[21px]
                text-[#1E1E1E]"
                        >
                            {countryDetails?.title9}
                        </h4>
                    </div>
                </div>
                {/* <div className="mt-10 gap-x-[10px] flex justify-center items-center pb-[77px] font-bold">
          <button
            className="flex justify-center items-center text-[18px] leading-[23px] px-[20px] py-[13px] text-white border border-white gap-x-[10px] font-helvetica font-bold"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"} <MdArrowRightAlt />
          </button>
        </div> */}
            </div>
        </div>
    )
}

export default PopularUni
