import ChooseUs from "../Home/ChooseUs/ChooseUs"
import OurService from "../Home/OurService/OurService"
import Footer from "../Shared/Footer/Footer"
import ServiceHero from "./ServiceHero/ServiceHero"

const Service = () => {
    return (
        <div className="GlobalBg">
            <ServiceHero></ServiceHero>
            <OurService></OurService>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    )
}

export default Service
