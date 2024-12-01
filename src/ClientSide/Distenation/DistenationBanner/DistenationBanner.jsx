/* eslint-disable react/prop-types */
import { countryDetailsDestructor } from "../../../utils/CountryDetails";

const DistenationBanner = ({ countryName }) => {
  const countryDetails = countryDetailsDestructor(countryName); // if you go inside this file you will crashed your head so better no to go there...
  return (
    <div>
      {/* <Topbar></Topbar>
            <Navbar></Navbar> */}

      <div className="  relative">
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${countryDetails?.destentionImg})`,
            filter: "brightness(.5) ",
            backgroundPosition: "right",
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[485px]  flex justify-center items-center"
        ></div>

        {/* Text Section */}
        <div className="absolute  inset-0 mt-[40px] flex flex-col gap-y-[20px] px-[40px] md:px-[60px]  justify-center items-center  lg:px-[150px]   lg:text-left">
          <h1 className="text-4xl lg:text-6xl 2xl:text-6xl text-white  font-bold text-center">
            Study In {countryName}
          </h1>
          <p className="font-normal font-helvetica 2xl:text-[16px] xs:text-[14px] leading-[16px] md:leading-[24px]  2xl:max-w-[800px]  md:max-w-[550px]  text-center  md:text-xl 2xl:text-2xl lg:text-base text-white mt-2 lg:mt-0 ">
            {countryDetails.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistenationBanner;
