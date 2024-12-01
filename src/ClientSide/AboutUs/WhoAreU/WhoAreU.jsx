import { MdArrowRightAlt } from "react-icons/md";

const WhoAreU = () => {
  return (
    <div className=" ">
      <div
        className=" md:hidden block 
      mt-[50px] px-[16px]
    xs:mt-[50px] xs:px-[16px]
    md:mt-[80px] md:px-[32px]
    lg:px-[60px] lg:mt-[80px]
    xl:px-[150px] xl:mt-[150px]
    2xl:px-[150px] 2xl:mt-[150px]"
      >
        <div className=" chooseUsParent ">
          <div
            className="relative w-full overflow-hidden chooseUsImgParent"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className=" pt-[24px] xs:pt-[24px] flex justify-between items-center font-helvetica font-bold">
            <div className=" ">
              <h1
                className="text-[30px] leading-[30px]  xs:text-[36px] xs:leading-[40px]
              text-center pb-[5px] font-bold text-[#F6941E]"
              >
                800+
              </h1>
              <p
                className="text-[12px]
          leading-[18px] xs:text-[12px]
          xs:leading-[18px] text-center  font-helvetica font-normal  text-[#1E1E1E]/[0.8]"
              >
                Global University Tips
              </p>
            </div>

            <div className=" text-center">
              <h1
                className="text-[30px] leading-[30px]  xs:text-[36px] xs:leading-[40px]
              text-center pb-[5px] font-bold text-[#F6941E]"
              >
                65+
              </h1>
              <p
                className="text-[12px]
          leading-[18px] xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
              >
                Office Across The Globe
              </p>
            </div>
            <div className=" text-center">
              <h1
                className="text-[30px] leading-[30px]  xs:text-[36px] xs:leading-[40px]
              text-center pb-[5px] font-bold text-[#F6941E]"
              >
                25+
              </h1>
              <p
                className="text-[12px]
          leading-[18px] xs:text-[12px]
          xs:leading-[18px] text-center text-[#1E1E1E]/[.8] font-helvetica font-normal"
              >
                Years Industry Presence
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-helvetica font-bold pb-[10px] text-[30px] leading-[36px] pt-[30px] text-[#1E1E1E]">
            {" "}
            <span className="text-[#F6941E]">Who </span>We Are
          </h1>

          <p className="font-normal text-[14px] leading-[21px] text-[#1E1E1E]/[0.8]">
            Discover the game-changer for Canadian Institutes: Edu Mandate! Our
            Indian-rooted strategy connects institutes with top agencies, fueled
            by human interaction and relentless expansion. With tailored
            support, unleash your potential and soar to new heights. Embrace
            excellence, partner with us, and embark on a transformative journey
            towards success. Contact us now!
          </p>
          <ul className="md:pb-[30px] list-disc font-normal text-[14px] leading-[21px] text-[#1E1E1E]/[0.8] pt-[10px] px-[32px]">
            <li className="pb-[6px]">Expert Guidance.</li>
            <li className="pb-[6px]">Seamless Transitions.</li>
            <li className="pb-[6px]">Study Abroad Success.</li>
            <li className="pb-[6px]">Academic Excellence.</li>
          </ul>

          {/* <button
            className="pl-[16px] pr-[11px] py-[11px] flex items-center justify-between
          text-[18px] leading-[23px] bg-[#F6941E] gap-x-[10px] text-white font-helvetica font-bold"
          >
            Read More
            <MdArrowRightAlt size={21} />
          </button> */}
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="chooseUsParent ">
          <div>
            <div
              className="relative w-full overflow-hidden chooseUsImgParent"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/THi7JpVDyCE?si=Ucmq2JkRYd7B1Lfi&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className=" xl:pt-[24px] xl:gap-x-[16px] 2xl:pt-[24px]   
          2xl:gap-x-[16px] lg:pt-[24px] lg:gap-x-[10px] md:pt-[24px] md:gap-x-[16px] flex justify-between items-center font-helvetica font-bold"
            >
              <div className=" ">
                <h1
                  className=" mt-[20px]xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px] lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
                >
                  800+
                </h1>
                <p
                  className="xl:text-[12px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
          md:leading-[14px] text-center text-[#1E1E1E]/[0.8]"
                >
                  Global niversity Tips
                </p>
              </div>
              <div className=" text-center">
                <h1
                  className="xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px] lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
                >
                  65+
                </h1>
                <p
                  className="xl:text-[12px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
         md:leading-[14px] text-center  text-[#1E1E1E]/[0.8]"
                >
                  Office Across The Globe
                </p>
              </div>
              <div className=" text-center">
                <h1
                  className="xl:text-[36px] xl:leading-[43px] 
              2xl:text-[36px] 2xl:leading-[43px]  lg:text-[20px] lg:leading-[20px]
              md:text-[20px] md:leading-[20px] text-center pb-[5px] font-bold text-[#F6941E]"
                >
                  25+
                </h1>
                <p
                  className="xl:text-[12px]
          xl:leading-[24px] 2xl:text-[16px]
          2xl:leading-[24px] lg:text-[12px]
          lg:leading-[10px] md:text-[12px]
          md:leading-[14px] text-center   text-[#1E1E1E]/[0.8]"
                >
                  Years Industry Presence
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="chooseUsSamll">
              {" "}
              <span className="text-[#F6941E]">Who </span>We Are
            </h1>

            <p className="chooseUsParaText text-[#1E1E1E]/[0.8]">
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

            {/* <button className="homeLargeAppoinMent flex items-center justify-between bg-[#F6941E]">
              Read More
              <MdArrowRightAlt />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreU;
