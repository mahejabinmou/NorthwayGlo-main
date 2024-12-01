import { useSearchParams } from "react-router-dom"
import OurLatestBlog from "../Home/OurLatestBlog/OurLatestBlog"
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay"
import Footer from "../Shared/Footer/Footer"
import Application from "./Application/Application"
import Carrer from "./Career/Carrer"
import CostOfEducation from "./CostOfEducation/CostOfEducation"
import HeroStudyDistenation from "./DistenationBanner/DistenationBanner"
import Faq from "./Faq/Faq"
import Glance from "./Glance/Glance"
import PopularUni from "./PopularUni/PopularUni"
import StudentSpeak from "./StudentSpeak/StudentSpeak"
import WhyStudy from "./WhyStudy/WhyStudy"
import { useEffect } from "react"
import { distensionInfo } from "../../Constants/exports"

const Distenation = () => {
    const [location] = useSearchParams()
    const countryName = location.get("country")
    const countryAvailable = distensionInfo.some(
        (country) => country.country === countryName
    )
    useEffect(() => {
        // Scroll to the top when the component first renders
        window.scrollTo(0, 0)
    }, [])

    if (!countryAvailable) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-semibold text-gray-800 p-4 bg-white shadow-lg rounded-lg">
                    Country Not Found
                </h1>
            </div>
        )
    }

    return (
        <div className="bg-[#F5F5F5]">
            <HeroStudyDistenation
                countryName={countryName}
            ></HeroStudyDistenation>
            <Application></Application>
            <WhyStudy countryName={countryName}></WhyStudy>
            <Carrer countryName={countryName}></Carrer>
            <PopularUni countryName={countryName}></PopularUni>
            <CostOfEducation countryName={countryName}></CostOfEducation>
            <Glance countryName={countryName}></Glance>
            <OurStudentSay></OurStudentSay>
            <div className="pb-[20px] md:pb-0">
                <StudentSpeak></StudentSpeak>
            </div>

            <div className=" md:pt-[10px] lg:pt-0">
                <Faq countryName={countryName}></Faq>
            </div>

            <OurLatestBlog></OurLatestBlog>
            <Footer></Footer>
        </div>
    )
}

export default Distenation
