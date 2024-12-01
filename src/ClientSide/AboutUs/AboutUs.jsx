import OurService from "../Home/OurService/OurService"
import OurStudentSay from "../Home/OurStudentSay/OurStudentSay"
import Footer from "../Shared/Footer/Footer"
import AboutUsHero from "./AboutUsHero/AboutUsHero"
import Mission from "./Mission/Mission"
import Vision from "./Vision/Vision"
import WhoAreU from "./WhoAreU/WhoAreU"

const AboutUs = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <AboutUsHero></AboutUsHero>
            <WhoAreU></WhoAreU>
            <OurService></OurService>
            <div className="relative sm:flex sm:flex-wrap mt-[90px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url('/businessman-walking-up-stairs-modern-cityscape-sunset-with-reflective-glass-buildings.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.75)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    <Mission />
                    <Vision />
                </div>
            </div>
            <OurStudentSay></OurStudentSay>
            {/* Here you new component for mission and vision */}
            <Footer></Footer>
        </div>
    )
}

export default AboutUs
