import { MdArrowRightAlt } from "react-icons/md";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="">
      {/* mobile */}
      <div className="chooseUsParent mt-[50px] px-[16px] md:hidden block ">
        <div>
          <div className="relative w-full overflow-hidden h-full chooseUsImgParent">
            {showVideo ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="cursor-pointer relative"
                onClick={() => setShowVideo(true)}
              >
                <LazyLoadImage
                  src="https://img.youtube.com/vi/THi7JpVDyCE/hqdefault.jpg"
                  alt="youtube thumbnail"
                  loading="lazy"
                  className="w-full h-full  object-cover"
                />
                <LazyLoadImage
                  src="/Polygon 3.png"
                  alt="play icon"
                  className="absolute w-10 top-1/2 left-1/2 -translate-x-1/2"
                />
              </div>
            )}
          </div>

          <div className=" xs:pt-[16px] flex justify-between items-center font-helvetica font-bold">
            <div className=" ">
              <h1
                className="  xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-[#F6941E] font-helvetica"
              >
                <CountUp start={0} end={800} duration={10} />+
              </h1>
              <p
                className=" xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
              >
                Global University Tips
              </p>
            </div>

            <div className=" text-center">
              <h1
                className="xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-[#F6941E] font-helvetica"
              >
                <CountUp start={0} end={65} duration={10} />+
              </h1>
              <p
                className="xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
              >
                Office Across The Globe
              </p>
            </div>
            <div className=" text-center">
              <h1
                className="xs:text-[30px] xs:leading-[36px]
              text-center pb-[5px] font-bold text-[#F6941E] font-helvetica"
              >
                <CountUp start={0} end={25} duration={10} />
              </h1>
              <p
                className="xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
              >
                Years Industry Presence
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="chooseUsSamll xs:pb-[10px]  xs:pt-[40px] text-[#1E1E1E]">
            {" "}
            <span className="text-[#F6941E]">About</span> Us
          </h1>

          <p className="homePara text-black/[0.8] pb-[25px]">
            Discover the game-changer for Canadian Institutes: Edu Mandate! Our
            Indian-rooted strategy connects institutes with top agencies, fueled
            by human interaction and relentless expansion. With tailored
            support, unleash your potential and soar to new heights. Embrace
            excellence, partner with us, and embark on a transformative journey
            towards success. Contact us now!
          </p>
          <ul className=" list-disc font-normal xs:text-[14px] xs:leading-[21px] text-black/[0.8] xs:pt-[10px] xs:px-[32px] font-helvetica">
            <li className="pb-[6px]">Expert Guidance.</li>
            <li className="pb-[6px]">Seamless Transitions.</li>
            <li className="pb-[6px]">Study Abroad Success.</li>
            <li className="pb-[6px]">Academic Excellence.</li>
          </ul>

          <Link to="/About">
            <button className="bodyButton mt-[20px] ">
              Read More
              <MdArrowRightAlt size={21} />
            </button>
          </Link>
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="chooseUsParent ">
          <div>
            <div
              className="relative w-full overflow-hidden chooseUsImgParent"
              // style={{ paddingTop: "56.25%" }}
            >
              {showVideo ? (
                <iframe
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => setShowVideo(true)}
                >
                  <LazyLoadImage
                    src="https://img.youtube.com/vi/THi7JpVDyCE/hqdefault.jpg"
                    alt="youtube thumbnail"
                    loading="lazy"
                    className="w-full h-full  object-cover"
                  />
                  <LazyLoadImage
                    src="/Polygon 3.png"
                    alt="play icon"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2"
                  />
                </div>
              )}
            </div>
            <div className=" xl:pt-[24px] xl:gap-x-[20px]  lg:pt-[24px] lg:gap-x-[10px] md:pt-[24px] md:gap-x-[16px] flex justify-between items-center font-helvetica font-bold">
              <div className=" ">
                <h1 className="head80  ">
                  <CountUp start={0} end={800} duration={50} />+
                </h1>
                <p className="para80">Global University Tips</p>
              </div>
              <div className=" text-center">
                <h1 className="head80">
                  <CountUp start={0} end={65} duration={50} />+
                </h1>
                <p className="para80">Office Across The Globe</p>
              </div>
              <div className=" text-center">
                <h1 className="head80">
                  <CountUp start={0} end={25} duration={50} />+
                </h1>
                <p className="para80">Years Industry Presence</p>
              </div>
            </div>
          </div>

          <div className="xl:mb-[82px] lg:mb-[60px] md:mb-[125px]">
            <h1 className="chooseUsSamll md:pt-[57px] md:pb-[20px] lg:pt-[0px] lg:pb-[25px] xl:pt-[0px]  xl:pb-[16px]">
              <span className="text-[#F6941E]">About</span> Us
            </h1>

            <p className="homePara  pb-[25px] md:pb-[30px] lg:pb-[30px] xl:pb-[30px] text-[#1E1E1E]/[0.8]">
              Discover the game-changer for Canadian Institutes: Edu Mandate!
              Our Indian-rooted strategy connects institutes with top agencies,
              fueled by human interaction and relentless expansion. With
              tailored support, unleash your potential and soar to new heights.
              Embrace excellence, partner with us, and embark on a
              transformative journey towards success. Contact us now!
            </p>
            <ul
              className="chooseUsParaText list-disc xl:pl-5 xl:space-y-2
          2xl:pl-5 2xl:space-y-2 lg:pl-5 lg:space-y-2 md:pl-5 md:space-y-2 text-[#1E1E1E]/[0.8]"
            >
              <li>Expert Guidance.</li>
              <li>Seamless Transitions.</li>
              <li>Study Abroad Success.</li>
              <li>Academic Excellence.</li>
            </ul>

            <Link to="/About">
              <button className="homeLargeAppoinMent border border-[#F6941E] hover:bg-[#F6941E] hover:text-white flex items-center justify-between text-[#F6941E] bg-white font-bold">
                Read More <MdArrowRightAlt />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
