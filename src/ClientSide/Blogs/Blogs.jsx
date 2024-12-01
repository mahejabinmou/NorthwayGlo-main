import { MdArrowRightAlt } from "react-icons/md"
import { useState } from "react"
import { IoPersonOutline } from "react-icons/io5"
import Footer from "../Shared/Footer/Footer"
import { blogs } from "../../Constants/exports"
import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Blogs = () => {
    const [showAll, setShowAll] = useState(false) // Step 1: state to toggle showing all images

    const navigate = useNavigate()

    const visibleImages = showAll ? blogs : blogs.slice(0, 6) // Step 2: Show only 6 images initially

    return (
        <div className="bg-[#F5F5F5]">
            {/* <Topbar></Topbar>
            <Navbar></Navbar> */}

            <div className=" relative">
                {/* Background image section */}
                <div
                    style={{
                        backgroundImage: `url(${"https://i.ibb.co.com/M7107nr/clay-banks-Hf8n0-RUk7g0-unsplash-1.webp"})`,
                        filter: "brightness(.5)",
                    }}
                    className="bg-no-repeat bg-left bg-cover w-[100%] h-[485px] flex justify-center items-center"
                ></div>

                {/* Text Section */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px]  text-left">
                    <h1 className="xs:text-5xl lg:text-[80px] text-white font-helvetica font-bold text-center">
                        Blog
                    </h1>
                </div>
            </div>

            <div className="sectionGap ">
                <div className="">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
                    >
                        {visibleImages.map((blog, index) => (
                            <div
                                key={index}
                                className="px-2 cursor-pointer"
                                onClick={() => navigate(`/blog/${blog.id}`)}
                            >
                                <div className=" relative bg-white shadow-xl">
                                    <div className="h-[197px]">
                                        <LazyLoadImage
                                            className="w-full h-full object-cover"
                                            src={blog.LgImg}
                                            alt={blog.LgImg}
                                        />
                                    </div>
                                    <div className="py-[30px] px-[20px]">
                                        <div className="flex justify-items-center gap-x-[10px] mb-[14px] mt-[10px]">
                                            <div className="h-[19px] w-[17px] flex-shrink-0 text-[#1E1E1E]/[.8]">
                                                <LazyLoadImage
                                                    className="w-full h-full object-cover"
                                                    src={blog.icon}
                                                    alt={blog.icon}
                                                />
                                            </div>
                                            <p className=" text-[#1E1E1E]/[.8] font-normal text-[16px] leading-[24px] font-helvetica">
                                                {blog.date}
                                            </p>
                                        </div>
                                        <h1
                                            className="font-bold xl:text-[24px] xl:leading-[36px] 2xl:text-[24px] 2xl:leading-[36px]
                 lg:text-[20px] lg:leading-[30px]  pb-[20px] text-[24px] leading-[36px]"
                                        >
                                            {blog.title}
                                        </h1>
                                        <hr className="text-black " />
                                        <div className="flex items-center justify-between pt-[20px]">
                                            <div
                                                className="text-black/[.6]  font-normal  font-helvetica flex items-center xl:text-[16px] xl:leading-[24px] xl:gap-x-[10px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:gap-x-[10px] lg:text-[12px] lg:leading-[24px] lg:gap-x-[10px] 
                   md:text-[10px] md:leading-[10px] md:gap-x-[5px] xs:gap-x-[5px] gap-x-[5px]"
                                            >
                                                <IoPersonOutline />
                                                <p>{blog.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="flex justify-center items-center hover:bg-[#F6941E] hover:text-white mx-auto mt-[70px]
            border border-[#F6941E] text-[#F6941E] font-helvetica
             font-bold text-[18px] leading-[23px] py-[13px] px-[20px]"
                        onClick={() => setShowAll(!showAll)} // Step 3: Toggle between showing all and limited images
                    >
                        {showAll ? "Load Less" : "Load More"}{" "}
                        <MdArrowRightAlt className="ml-2" />
                    </button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Blogs
