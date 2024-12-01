import { LazyLoadImage } from "react-lazy-load-image-component"
import { countryDetailsDestructor } from "../../../utils/CountryDetails"
const Carrer = ({ countryName }) => {
    const countryDetails = countryDetailsDestructor(countryName)

    return (
        <div className=" ">
            {/* large screen */}
            <div className="sectionGap hidden md:block">
                <div className="WhyStudyParent ">
                    <div>
                        <h1 className="chooseUsSamll">
                            {" "}
                            Careers
                            <span className="text-[#F6941E]"> & Industry </span>
                        </h1>

                        <p className="chooseUsParaText text-[#1E1E1E]/[0.8]">
                            {countryDetails?.destinsionCareer}
                        </p>
                    </div>

                    <div>
                        <div className=" h-[447px] ">
                            <LazyLoadImage
                                className="w-full h-full object-cover"
                                src={countryDetails?.careerImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer
