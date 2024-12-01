import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false); // Step 1: state to toggle showing all images
  const [activeButton, setActiveButton] = useState("gallery");

  const Photo = [
    "https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp",
    "https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp",
    "https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp",

    // Add more image URLs here
  ];

  const images = [
    "/galleryPhoto/pexels-anastasiya-gepp-654466-1462631.jpg",
    "/galleryPhoto/pexels-hai-nguyen-825252-1699414.jpg",
    "/galleryPhoto/pexels-nicole-berro-991141-2393793.jpg",
    "/galleryPhoto/pexels-olly-3755710.jpg",
    "/galleryPhoto/pexels-olly-3755760.jpg",
    "/galleryPhoto/pexels-olly-3769021.jpg",
    "/galleryPhoto/pexels-olly-3772621.jpg",
    "/galleryPhoto/pexels-olly-3793594.jpg",
    "/galleryPhoto/pexels-olly-3807755.jpg",
    "/galleryPhoto/pexels-vantha-thang-1224068-2513993.jpg",
    "/galleryPhoto/pexels-vlada-karpovich-4050439.jpg",
    "/galleryPhoto/pexels-zen-chung-5538335.jpg",
    "https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp",
    "https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp",
    "https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp",
    "https://i.ibb.co.com/nBYNKBY/rectangle-5-66dc17dbb29cb.webp",
    "https://i.ibb.co.com/qdZZzMJ/rectangle-6-66dc17f1d5e17.webp",
    "https://i.ibb.co.com/YZ5C57r/rectangle-7-66dc1801e3a11.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/0YLSRVk/rectangle-5-2-66dc18f85d91b.webp",
    "https://i.ibb.co.com/g9CzXwh/rectangle-7-1-66dc196adaa4f.webp",
    // Add more image URLs here
  ];
  const visibleImages = showAll ? images : images.slice(0, 9); // Step 2: Show only 6 images initially

  return (
    <div className="bg-[#F5F5F5]">
      {/* <Topbar></Topbar>
            <Navbar></Navbar> */}

      <div className="  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co.com/HpJMVbW/students-back-school-2024-beautiful-school-buildings-2.webp"})`,
            filter: "brightness(.5)",
          }}
          className="bg-no-repeat bg-top bg-cover w-[100%] h-[485px] flex justify-center items-center"
        ></div>

        {/* Text Section */}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px]  text-left">
          <h1 className="xs:text-[45px]  lg:text-[80px] text-white font-helvetica font-bold text-center">
            Photo Gallery
          </h1>
        </div>
      </div>

      <div className="sectionGap   ">
        <div className="flex justify-center items-center gap-[30px]  "></div>

        <div className="">
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center
              lg:gap-[24px]  md:gap-[24px] gap-x-0 gap-y-[24px]"
          >
            {visibleImages.map((image, index) => (
              <div key={index} className="h-[200px]  2xl:h-[300px] x">
                <LazyLoadImage
                  className="h-full w-full"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="flex justify-center items-center hover:bg-[#F6941E] hover:text-white mx-auto mt-[50px] 
            border border-[#F6941E] text-[#F6941E] font-helvetica
             font-bold text-[18px] leading-[23px] py-[13px] px-[20px]"
            onClick={() => setShowAll(!showAll)} // Step 3: Toggle between showing all and limited images
          >
            {showAll ? "Show Less" : "See All"}{" "}
            <MdArrowRightAlt className="ml-2" />
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PhotoGallery;
