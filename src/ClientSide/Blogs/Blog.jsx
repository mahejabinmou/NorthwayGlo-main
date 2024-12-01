import { useNavigate, useParams } from "react-router-dom"
import useGetMatcResult from "../../hooks/useGetMatcResult"
import { blogs } from "../../Constants/exports"
import Navbar from "../Shared/Navbar/Navbar"
import { FcComments } from "react-icons/fc"
import { IoPersonOutline } from "react-icons/io5"
import { LazyLoadImage } from "react-lazy-load-image-component"

/* 
    id: 1,
        imgSrc: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
        LgImg: "https://i.ibb.co/kKyXvGh/image-12-66d6cc37db603.webp",
        icon: "https://i.ibb.co/C848FJ8/vector-4-66d6cda73ab92.webp",
        date: "July 24, 2024",
        title: "Emotional Intelligence in Education: Building Resilient Learners",
        subtitle: "Back Theme",
        extendedSubtitle: "25 Comments",
        description:
            "Emotional intelligence (EI) is becoming a crucial element in education, helping students manage their emotions and interact with others effectively. This blog explores how incorporating EI into the curriculum can foster resilience and emotional maturity among students, preparing them for both academic and personal challenges.",
    },


*/
const Blog = () => {
    const { blogId } = useParams()
    const data = useGetMatcResult(blogId, blogs)
    const navigate = useNavigate()
    if (!data)
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div>
                    <h1>No blog found</h1>
                    <div className=" mt-5">
                        <button
                            className="bg-gray-800 w-20 p-1 rounded hover:bg-gray-600 text-white"
                            onClick={() => navigate("/")}
                        >
                            Go home
                        </button>
                    </div>
                </div>
            </div>
        )
    return (
        <>
            <div className="bg-black min-h-screen text-white ">
                <Navbar />

                <div className=" pb-10 pt-[100px] ">
                    <div className="  sectionGap">
                        <p>Published on {data?.date}</p>
                        <h1 className="text-[20px] md:text-[50px] font-bold ">
                            {data?.title}
                        </h1>
                        <div className="mt-5">
                            <p>By {data.author ? data.author : "james"}</p>
                        </div>
                        <div className="mt-10">
                            <LazyLoadImage
                                src={data?.imgSrc}
                                alt={data?.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[20px] mt-10">{data?.description}</p>
                        <div className="mt-4 text-black flex items-center gap-1 justify-between">
                            <div className="flex items-center gap-1">
                                <IoPersonOutline
                                    aria-setsize={20}
                                    className="cursor-pointer"
                                />
                                <p className="text-[14px] md:text-[20px]">
                                    {data.subtitle}
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcComments
                                    size={20}
                                    className="cursor-pointer"
                                />
                                <p className="text-[14px] md:text-[20px]">
                                    {data.extendedSubtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
