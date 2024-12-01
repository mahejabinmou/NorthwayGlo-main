// import { useEffect } from "react";
// import HeroSection from "./HeroSection/HeroSection";
// import About from "./About/About";
// import OurService from "./OurService/OurService";
// import ChooseUs from "./ChooseUs/ChooseUs";
// import StudyDestination from "./StudyDestination/StudyDestination";
// import OurStudentSay from "./OurStudentSay/OurStudentSay";
// import OurLatestBlog from "./OurLatestBlog/OurLatestBlog";
// import Footer from "../Shared/Footer/Footer";
// import OurVideo from "./OurVideo/OurVideo";
// import Mission from "../AboutUs/Mission/Mission";
// import Vision from "../AboutUs/Vision/Vision";

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="bg-[#F5F5F5] ">
//       <HeroSection></HeroSection>
//       <About></About>
//       <div className="sm:flex sm:flex-wrap">
//         <Mission></Mission>
//         <Vision></Vision>
//       </div>
//       <OurService></OurService>
//       <ChooseUs></ChooseUs>
//       <StudyDestination></StudyDestination>
//       <OurVideo></OurVideo>
//       <OurStudentSay></OurStudentSay>
//       <OurLatestBlog></OurLatestBlog>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Home;

import { useEffect } from "react"
import Mission from "../AboutUs/Mission/Mission"
import Vision from "../AboutUs/Vision/Vision"
import Footer from "../Shared/Footer/Footer"
import About from "./About/About"
import ChooseUs from "./ChooseUs/ChooseUs"
import HeroSection from "./HeroSection/HeroSection"
import OurLatestBlog from "./OurLatestBlog/OurLatestBlog"
import OurService from "./OurService/OurService"
import OurStudentSay from "./OurStudentSay/OurStudentSay"
import OurVideo from "./OurVideo/OurVideo"
import StudyDestination from "./StudyDestination/StudyDestination"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="GlobalBg">
            <HeroSection></HeroSection>
            <About></About>
            <div className="relative sm:flex sm:flex-wrap ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage:
                            "url('/businessman-walking-up-stairs-modern-cityscape-sunset-with-reflective-glass-buildings.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "brightness(0.75)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    <Mission />
                    <Vision />
                </div>
            </div>
            <OurService></OurService>
            <ChooseUs></ChooseUs>
            <StudyDestination></StudyDestination>
            <OurVideo></OurVideo>
            <OurStudentSay></OurStudentSay>
            <OurLatestBlog></OurLatestBlog>
            <Footer></Footer>
        </div>
    )
}

export default Home
