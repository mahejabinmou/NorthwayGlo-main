import { LazyLoadImage } from "react-lazy-load-image-component"
import "./Application.css"

const Application = () => {
    const steps = [
        {
            icon: "https://i.ibb.co/1LJwDvV/mingcute-profile-line-66d9918cd4f0a.webp",
            label: "Clients profile review",
        },
        {
            icon: "https://i.ibb.co/xfJdQDy/fluent-device-meeting-room-remote-20-regular-66d99320675b9.webp",
            label: "Onboarding meeting",
        },
        {
            icon: "https://i.ibb.co/PxY1QkR/wpf-search-66d993551a705.webp",
            label: "University search",
        },
        {
            icon: "https://i.ibb.co/S7bjQqx/pepicons-pencil-cv-66d993876fcf2.webp",
            label: "Statement of purpose",
        },
        {
            icon: "https://i.ibb.co/vzFb2Gs/mdi-university-outline-66d993b81a683.webp",
            label: "University Shortlist",
        },
    ]
    return (
        <div className="sectionGap">
            <div className="hidden lg:block">
                <div className=" ">
                    <h1
                        className="font-bold font-helvetica text-[48px] leading-[57px]
       text-center pb-[20px] text-[#1E1E1E]"
                    >
                        <span className="text-[#F6941E]">Our </span>Application
                        Process
                    </h1>
                    <p
                        className="font-normal font-helvetica text-[16px] leading-[24px]
        px-[150px] text-center 
         text-[#1E1E1E]/[.8]"
                    >
                        If you’ve decided to study at a university , you will
                        have to gather the right documents to prove that you fit
                        the university requirements. Provide complete personal
                        information, previous qualifications, financial
                        information, and a personal statement.
                    </p>
                </div>
                {/* xl */}
                <div className="lg:hidden 2xl:hidden xl:block">
                    <div className="flex justify-between items-center gap-x-[35px]  relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center  relative z-10 ${
                                    index !== steps.length - 1
                                        ? "step-line"
                                        : ""
                                }`}
                            >
                                {/* Circle with Icon */}
                                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8]  mt-[50px]">
                                    <LazyLoadImage
                                        className="w-[50px] h-[50px]"
                                        src={step.icon}
                                        alt={step.label}
                                    />
                                </div>
                                {/* Label */}
                                <div className="mt-[25px]   px-[25px] py-[10px]   text-[18px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                                    {step.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* lg */}
                <div className="xl:hidden xs:hidden lg:block max-w-[1140px]">
                    <div className="flex justify-between items-center gap-x-[35px]  relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center  relative z-10 ${
                                    index !== steps.length - 1
                                        ? "step-line-lg"
                                        : ""
                                }`}
                            >
                                {/* Circle with Icon */}
                                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8]  mt-[50px]">
                                    <LazyLoadImage
                                        className="w-[50px] h-[50px]"
                                        src={step.icon}
                                        alt={step.label}
                                    />
                                </div>
                                {/* Label */}
                                <div className="mt-[25px]   px-[25px] py-[10px]   text-[18px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                                    {step.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2xl */}
                <div className="xl:hidden xs:hidden lg:hidden 2xl:block ">
                    <div className="flex justify-between items-center gap-x-[35px]  relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center  relative z-10 ${
                                    index !== steps.length - 1
                                        ? "step-line-2xl"
                                        : ""
                                }`}
                            >
                                {/* Circle with Icon */}
                                <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8]  mt-[50px]">
                                    <LazyLoadImage
                                        className="w-[50px] h-[50px]"
                                        src={step.icon}
                                        alt={step.label}
                                    />
                                </div>
                                {/* Label */}
                                <div className="mt-[25px]   px-[25px] py-[10px]   text-[18px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                                    {step.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-[75px]  relative">
                    <div className="flex  items-center gap-x-[220px] mx-[35px]">
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8] step-line2 relative">
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/X295pXX/carbon-application-web-66da1c505cdb3.webp"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8] step-line2 relative">
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/w49jytw/carbon-data-class-66da1ca4b1efa.webp"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-dashed border-black/[.8] ">
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/wpXRXsP/frame-177-66da1cd700eb2.webp"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="mt-[50px] flex flex-row gap-x-[35px]">
                        <div className="px-[25px] py-[10px] text-[18px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>University application</p>
                        </div>
                        <div className="px-[25px] py-[10px] text-[18px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Arranging mock interview</p>
                        </div>
                        <div className="px-[25px] py-[10px] text-[18px] bg-white leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Visa application for submission</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden block">
                <div className=" ">
                    <h1
                        className="font-bold font-helvetica text-[30px] leading-[36px]
       text-center pb-[20px]"
                    >
                        <span className="text-[#F6941E]">Our </span>Application
                        Process
                    </h1>
                    <p
                        className="font-normal font-helvetica text-[14px] leading-[21px]
        text-center 
         text-[#1E1E1E]/[.8]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </div>

                <div className=" mt-[30px] ">
                    <div className="flex justify-center items-center  gap-x-[40px] ">
                        {/* Circle with Icon */}
                        <div className="flex  justify-center items-center w-[100px] h-[100px] xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]">
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/1LJwDvV/mingcute-profile-line-66d9918cd4f0a.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[25px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Clients profile review</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center   gap-x-[40px] mt-[30px]">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px] 
            xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]"
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px] "
                                src="https://i.ibb.co/xfJdQDy/fluent-device-meeting-room-remote-20-regular-66d99320675b9.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[25px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Onboarding meeting</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center  gap-x-[40px] mt-[30px] ">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px]
            xs:w-[90px] xs:h-[80px]  rounded-full border-2 border-dashed border-black/[.8]  "
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/PxY1QkR/wpf-search-66d993551a705.webp"
                                alt=""
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[40px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>University search</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center  gap-x-[40px] mt-[30px]">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px] 
            xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]"
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/S7bjQqx/pepicons-pencil-cv-66d993876fcf2.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[25px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Statement of purpose</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center   gap-x-[40px] mt-[30px]">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px] 
            xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]"
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/vzFb2Gs/mdi-university-outline-66d993b81a683.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center   text-[18px] px-[30px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>University Shortlist</p>
                        </div>
                    </div>
                </div>

                <div className=" mt-[30px] ">
                    <div className="flex justify-center items-center  gap-x-[40px] ">
                        {/* Circle with Icon */}
                        <div className="flex  justify-center items-center w-[100px] h-[100px] xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]">
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/X295pXX/carbon-application-web-66da1c505cdb3.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[25px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Clients profile review</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center   gap-x-[40px] mt-[30px]">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px] 
            xs:w-[90px] xs:h-[80px] rounded-full border-2 border-dashed border-black/[.8]"
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px] "
                                src="https://i.ibb.co/w49jytw/carbon-data-class-66da1ca4b1efa.webp"
                                alt="Clients profile review"
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  text-[18px] px-[25px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>Onboarding meeting</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center  gap-x-[40px] mt-[30px] ">
                        {/* Circle with Icon */}
                        <div
                            className="flex  justify-center items-center w-[100px] h-[100px]
            xs:w-[90px] xs:h-[80px]  rounded-full border-2 border-dashed border-black/[.8]  "
                        >
                            <LazyLoadImage
                                className="w-[50px] h-[50px]"
                                src="https://i.ibb.co/wpXRXsP/frame-177-66da1cd700eb2.webp"
                                alt=""
                            />
                        </div>
                        {/* Label */}
                        <div className="flex justify-center items-center  bg-white text-[18px] px-[40px] py-[10px]  leading-[23px] border    font-bold border-1 border-black/[.4] text-center font-helvetica">
                            <p>University search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application
