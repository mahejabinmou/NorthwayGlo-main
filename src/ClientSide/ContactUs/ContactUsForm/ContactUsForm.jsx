/* eslint-disable react/prop-types */
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

function ContactForm({ selectedOffice }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic
        console.log(formData)
    }

    const contactUsDetails = [
        {
            img: "https://i.ibb.co.com/h1j23bC/frame-89-1-66dd4d9332eca.webp",
            title: "Email",
            dis: selectedOffice?.email || "info@northwayglobal.com", // Fallback email
        },
        {
            img: "https://i.ibb.co.com/54ZydTH/frame-89-2-66dd4dc010735.webp",
            title: "Phone",
            dis: selectedOffice?.phone || "+880 1607-002687", // Fallback phone
        },
        {
            img: "https://i.ibb.co.com/02dwmHq/frame-89-3-66dd4ded194c7.webp",
            title: "Address",
            dis:
                selectedOffice?.address ||
                "Kha-12/2, Shahjaspur, Gulshan, Dhaka-1212",

            // dis: "Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-",
            // sub: "1212, (Near American Embassy)",
        },
    ]

    return (
        <div className="flex flex-col-reverse  md:flex-row justify-center items-center sectionGap gap-[68px]">
            <form
                onSubmit={handleSubmit}
                className="bg-white max-w-[614px] w-full md:w-1/2 p-4 shadow-formShadow rounded-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 font-helvetica"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 font-helvetica"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 font-helvetica"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Enter your country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded-md bg-[#F5F5F5] outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 font-helvetica"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded-md h-32 bg-[#F5F5F5] outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-5 py-[10px] bg-[#F6941E] font-helvetica font-bold text-white p-2 hover:bg-[#f6951ec0] transition"
                >
                    Submit
                </button>
            </form>

            <div>
                <div>
                    <h4 className="lg:text-[36px] lg:leading-[43.2px] font-bold font-helvetica">
                        Contact Us
                    </h4>
                    <p className="text-[#1E1E1E]/[.8] mt-[14px] mb-[30px] font-normal text-[16px] leading-[24px]">
                        Get in touch today to learn how Edu Mandate can help
                        your business.
                    </p>
                </div>
                <div>
                    <div>
                        {contactUsDetails.map((contact, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 mb-[24px]"
                            >
                                <div className="lg:h-10 lg:w-10 xs:h-[48px] xs:w-[48px] xxs:h-12 xxs:w-14 bg-[#F6941E] rounded-full">
                                    <LazyLoadImage
                                        src={contact.img}
                                        alt="contact icon"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[18px] leading-[23.4px] font-bold font-helvetica text-[#1E1E1E] pb-[5px]">
                                        {contact.title}
                                    </h4>
                                    <p className="text-[#1E1E1ECC] font-normal font-helvetica leading-[24px] text-[16px]">
                                        {contact.dis}
                                    </p>
                                    {contact.sub && (
                                        <p className="text-[#1E1E1ECC] font-normal font-helvetica leading-[20px] text-[14px]">
                                            {contact.sub}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
