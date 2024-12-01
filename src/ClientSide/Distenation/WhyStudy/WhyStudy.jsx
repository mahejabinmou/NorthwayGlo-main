import { MdArrowRightAlt } from "react-icons/md"
import "./WhyStudy.css"
import { Link } from "react-router-dom"
import { countryDetailsDestructor } from "../../../utils/CountryDetails"
import { LazyLoadImage } from "react-lazy-load-image-component"

const WhyStudy = ({ countryName }) => {
    const countryDetails = countryDetailsDestructor(countryName)
    return (
        <div className=" ">
            <div className=" md:hidden block sectionGap">
                <div className=" h-[223px] ">
                    <LazyLoadImage
                        className="w-full h-full object-cover"
                        src={countryDetails?.whyStudyImg}
                        alt=""
                    />
                </div>

                <div>
                    <h1 className="font-helvetica font-bold pb-[10px] text-[30px] leading-[36px] pt-[30px]">
                        {" "}
                        Why Study{" "}
                        <span className="text-[#F6941E]">
                            in {countryName}?{" "}
                        </span>
                    </h1>

                    <p className="font-normal text-[14px] leading-[21px] text-black/[0.8]">
                        {countryDetails.subTitle}
                    </p>
                    <h1 className="font-bold text-[24px] leading-[28px] pt-[16px]">
                        Quick facts
                    </h1>
                    <ul className="chooseUsParaText custom-bullet list-disc font-normal text-[14px] leading-[21px] text-black/[0.8] pt-[10px] px-[32px]">
                        <li className="pb-[6px]">Expert Guidance.</li>
                        <li className="pb-[6px]">Seamless Transitions.</li>
                        <li className="pb-[6px]">Study Abroad Success.</li>
                        <li className="pb-[6px]">Academic Excellence.</li>
                    </ul>

                    <Link to="/studyDistention2">
                        <button
                            className="pl-[16px] pr-[11px] py-[11px] flex items-center justify-between
          text-[18px] leading-[23px] bg-[#F6941E] gap-x-[10px] text-white font-helvetica font-bold"
                        >
                            Read More
                            <MdArrowRightAlt size={21} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* large screen */}
            <div className="sectionGap hidden md:block">
                <div className="WhyStudyParent ">
                    <div>
                        <div className=" h-[447px] ">
                            <LazyLoadImage
                                className="w-full h-full object-cover"
                                src={countryDetails?.whyStudyImg}
                                alt=""
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className="chooseUsSamll">
                            {" "}
                            Why Study{" "}
                            <span className="text-[#F6941E]">
                                in {countryName}?{" "}
                            </span>
                        </h1>

                        <p className="chooseUsParaText text-black/[0.8]">
                            {countryDetails.subTitle}
                        </p>
                        <h1 className="font-bold text-[24px] leading-[28px] pt-[16px] text-[#1E1E1E]">
                            Quick facts
                        </h1>
                        <ul className="chooseUsParaText custom-bullet list-disc font-normal text-[14px] leading-[21px]  pt-[10px] px-[32px]">
                            <li className="pb-[6px]">Expert Guidance.</li>
                            <li className="pb-[6px]">Seamless Transitions.</li>
                            <li className="pb-[6px]">Study Abroad Success.</li>
                            <li className="pb-[6px]">Academic Excellence.</li>
                        </ul>
                        <Link to="/studyDistention2">
                            <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
                                Read More
                                <MdArrowRightAlt />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyStudy
