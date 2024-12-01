import { useState } from "react";
import { ReactSVG } from "react-svg";

const HeroCard = ({ name, image }) => {
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
      <div className="md:hidden block  ">
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          onMouseLeave={handleMouseLeave}
          className={`bg-white  flex justify-center items-center xs:gap-[16px] gap-x-[17.27px]
            px-[28.5px] py-[40px]  '
               ${
                 hoveredOffice === name
                   ? " border-b-[#F6941E] border-b-2 text-[#F6941E]"
                   : "border-white/[0.2] border-1 text-[#1E1E1E]/[.8]"
               }`}
        >
          <div className="   ">
            <ReactSVG
              afterInjection={(svg) => {
                if (hover) {
                  const paths = svg.querySelectorAll("path");
                  paths.forEach((path) => {
                    path.setAttribute("fill", "#F6941E");
                  });
                }
                if (!hover) {
                  const paths = svg.querySelectorAll("path");
                  paths.forEach((path) => {
                    path.setAttribute("fill", "#1E1E1E");
                  });
                }
              }}
              src={image}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </div>
          <p className="text-[20px] leading-[30px] md:text-[13px] md:leading-[20px]   xs:text-[16px] xs:leading-[30px]     font-bold font-helvetica ">
            {name}
          </p>
        </div>
      </div>

      {/* large */}
      <div className="hidden md:block">
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          onMouseLeave={handleMouseLeave}
          className={`bg-[#F6941E]/[0.32] border border-gray-50/[.2] flex justify-center items-center xl:gap-x-[16px] xl:pl-[28px] xl:pr-[8px]  xl:py-[30px] xl:h-[140px]
            2xl:gap-x-[16px] 2xl:pl-[28px] 2xl:pr-[8px]  2xl:py-[30px] 2xl:h-[140px] lg:gap-x-[16px] lg:pl-[20px] lg:pr-[14px]  lg:py-[30px] lg:h-[140px]
            md:gap-x-[16px] md:pl-[10px] md:pr-[4px]  md:py-[30px] md:h-[140px] 
            ${
              hoveredOffice === name
                ? " border-b-[#F6941E] border-b-2 text-[#F6941E]"
                : "border-white/[0.2] border-1 text-white"
            }`}
        >
          <ReactSVG
            afterInjection={(svg) => {
              if (hover) {
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.setAttribute("fill", "#F6941E");
                });
              }
              if (!hover) {
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.setAttribute("fill", "#FFFFFF");
                });
              }
            }}
            src={image}
            className={`xl:w-[50px] xl:h-[50px]  lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px]`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p className="herocardText">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
