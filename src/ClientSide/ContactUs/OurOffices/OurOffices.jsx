import { useState } from "react"
import ContactForm from "../ContactUsForm/ContactUsForm"
import { LazyLoadImage } from "react-lazy-load-image-component"

const OurOffices = () => {
    const [selectedOffice, setSelectedOffice] = useState("Bangladesh")

    const officeData = [
        {
            flag: "https://i.ibb.co.com/yP4VKMT/image-14-3-66dd3b0f1691c.webp",
            name: "Bangladesh",
            email: "info@northwayglobal.com",
            phone: "+8801771660030",
            address: "Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212",
        },

        {
            flag: "/flag/usa.png",
            name: "USA",
            email: "info@northwayglobal.com",
            phone: "+19179246493",
            address: "37 -22 73 Rd St (2nd floor) ,Jackson Heights NY, 11372",
        },
        {
            flag: "/flag/australia.png",
            name: "Australia",
            email: "info@northwayglobal.com",
            phone: "+61449615940",
            address: "3/4 Nellie Ave Mitchell Park SA 5043",
        },
    ]

    const handleOfficeClick = (office) => {
        setSelectedOffice(office)
    }

    return (
        <>
            <div className="sectionGap ">
                <div className="mb-[30px]">
                    <h2 className="text-[48px]  leading-[120%] text-center font-helvetica font-bold">
                        Our <span className="text-[#F6941E]">Offices</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px]">
                    {officeData.map((office) => (
                        <div
                            key={office.name}
                            onClick={() => handleOfficeClick(office)}
                            className={`py-[90px] px-[100px] flex items-center justify-center gap-[20px] shadow-officeShadow transition-all duration-300 cursor-pointer hover:bg-[#F6941E]/[1.5]
          bg-white`}
                        >
                            <div className="flex text-[30px] items-center justify-center gap-[20px]">
                                <LazyLoadImage
                                    className="h-[22px] w-[30px]"
                                    src={office.flag}
                                    alt={`Flag of ${office.name}`}
                                />
                                <p className="font-helvetica font-bold">
                                    {office.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pass the selected office data to the ContactForm component */}
            <ContactForm selectedOffice={selectedOffice} />
        </>
    )
}

export default OurOffices
