import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
const OurServiceCard = ({ image, name, description }) => {
  const [hoveredOffice, setHoveredOffice] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = (name) => {
    setHoveredOffice(name);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHoveredOffice(null);
    setHover(false);
  };

  return (
    <div>
      {/* small */}
      <div className="md:hidden block">
        <div
          key={name}
          // onMouseEnter={() => handleMouseEnter(name)}
          // onMouseLeave={handleMouseLeave}
          onMouseEnter={(e) => {
            handleMouseEnter(name);
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(50, 50, 50, 0.7)"; // darker gray shadow
          }}
          onMouseLeave={(e) => {
            handleMouseLeave();
            e.currentTarget.style.boxShadow = "none"; // removes shadow
          }}
          className={`bg-[#FFFFFF] transition-shadow duration-300 md:mb-[12px] xs:mb-[12px] xs:mx-[42.5px] md:px-[10px] md:py-[20px] xs:px-[24px] xs:py-[41px] text-center ${
            hoveredOffice === name ? "border-b-[#F6941E] border-b-2" : ""
          }`}
        >
          <div className="h-[50px] w-[50px] transition-shadow duration-300 flex justify-center items-baseline mx-auto xs:mb-[20px] md:mb-[15px]">
            <ReactSVG
              afterInjection={(svg) => {
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.setAttribute("fill", hover ? "#F6941E" : "#1E1E1E");
                });
              }}
              src={image}
              className=""
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </div>
          <h1
            className={`pb-[10px] xs:pb-[10px] xl:pb-[10px] lg:pb-[5px] md:pb-[5px] font-bold font-helvetica md:text-[18px] md:leading-[24px] xs:text-[22px] xs:leading-[28.8px] ${
              hoveredOffice === name ? "text-[#F6941E]" : "text-[#1E1E1E]"
            }`}
          >
            {name}
          </h1>
          <p className="text-[#1E1E1E]/[.8] font-normal font-helvetica md:text-[10px] md:leading-[16px] text-[14px] leading-[21px] xs:text-[14px] xs:leading-[21px] pb-[10px]">
            {description}
          </p>
        </div>
      </div>

      {/* large */}
      <div className="hidden md:block">
        {/* /service */}
        <Link to="/service">
          <div
            key={name}
            onMouseEnter={(e) => {
              handleMouseEnter(name);
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(50, 50, 50, 0.7)"; // darker gray shadow
            }}
            onMouseLeave={(e) => {
              handleMouseLeave();
              e.currentTarget.style.boxShadow = "none"; // removes shadow
            }}
            className={`bg-[#FFFFFF] mx-[58px] mb-[12px] xs:mx-[58px] xs:mb-[12px] md:mx-0 md:mb-0 lg:mx-0 lg:mb-0 xl:mx-0 xl:mb-0 rounded-[10px] xl:px-[24px] xl:py-[32px] lg:px-[24px] lg:py-[20px] md:px-[8px] md:py-[20px] px-[24px] py-[41px] transition-shadow duration-300 xxs:py-[10px] xs:px-[24px] xs:py-[41px] text-center ${
              hoveredOffice === name ? "border-b-[#F6941E] border-b-2" : ""
            }`}
          >
            <div className="h-[50px] w-[50px] flex justify-center mb-[15px] xxs:mb-[10px] xs:mb-[20px] xl:mb-[15px] lg:mb-[15px] md:mb-[15px] items-center mx-auto">
              <ReactSVG
                afterInjection={(svg) => {
                  const paths = svg.querySelectorAll("path");
                  paths.forEach((path) => {
                    path.setAttribute("fill", hover ? "#F6941E" : "#1E1E1E");
                  });
                }}
                src={image}
                className=""
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </div>
            <h1
              className={`pb-[10px] xs:pb-[10px] xl:pb-[10px] 2xl:pb-[10px] lg:pb-[5px] md:pb-[5px] font-bold font-helvetica xl:text-[24px] xl:leading-[28px] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[20px] lg:leading-[28px] md:text-[18px] md:leading-[24px] text-[24px] leading-[28.8px] xxs:text-[16px] xs:text-[28px] xs:leading-[24px] text-[#1E1E1E] ${
                hoveredOffice === name ? "text-[#F6941E]" : ""
              }`}
            >
              {name}
            </h1>
            <p className="text-[#1E1E1E]/[.8] font-normal font-helvetica xl:text-[16px] xl:leading-[24px] 2xl:text-[16px] 2xl:leading-[24px] lg:text-[16px] lg:leading-[24px] md:text-[12px] md:leading-[16px] text-[14px] leading-[21px] xxs:text-[12px] xxs:leading-[18px] xs:text-[14px] xs:leading-[21px] pb-[10px]">
              {description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceCard;
