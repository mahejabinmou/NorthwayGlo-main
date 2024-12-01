import { LazyLoadImage } from "react-lazy-load-image-component";
import { countryDetailsDestructor } from "../../../utils/CountryDetails";

import "./CostOfEducation.css";
const CostOfEducation = ({ countryName }) => {
  const countryDetails = countryDetailsDestructor(countryName);

  return (
    <div className=" ">
      <div className=" md:hidden block sectionGap">
        <div className="  h-[322px]">
          <LazyLoadImage
            className="w-full h-full object-cover"
            src="https://i.ibb.co.com/BZSjHJG/cost.webp"
            alt=""
          />
        </div>

        <div>
          <h1 className="chooseUsSamll pt-[35px] pb-[20px]">
            {" "}
            <span className="text-[#F6941E]">Cost </span>of education
          </h1>

          <p className="chooseUsParaText text-black/[0.8]">
            {countryDetails.destensionCost}
          </p>

          <ul className="chooseUsParaText  list-disc font-normal text-[14px] leading-[21px] text-black/[0.8] pt-[10px] px-[32px]">
            <li className="pb-[6px] text-[#F6941E] custom-bullet ">
              Total Expenses 41535
            </li>
            <li className="pb-[6px]">
              Tuition Fees for one-year (Indicative) 25000
            </li>
            <li className="pb-[6px]">Living and Accommodation 15000</li>
            <li className="pb-[6px]">Airfare from India to USA 1000</li>
            <li className="pb-[6px]">Visa Fees (Visa & SEVIS) 535</li>
          </ul>
        </div>
      </div>

      {/* large screen */}
      <div className="sectionGap hidden md:block">
        <div className="WhyStudyParent ">
          <div>
            <div className=" md:h-[447px] ">
              <LazyLoadImage
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/BZSjHJG/cost.webp"
                alt=""
              />
            </div>
          </div>

          <div>
            <h1 className="chooseUsSamll">
              {" "}
              <span className="text-[#F6941E]">Cost </span>of education
            </h1>

            <p className="chooseUsParaText text-black/[0.8]">
              {countryDetails.destensionCost}
            </p>

            <ul className="chooseUsParaText  list-disc font-normal text-[14px] leading-[21px] text-black/[0.8] pt-[10px] px-[32px]">
              <li className="pb-[6px] text-[#F6941E] custom-bullet ">
                Total Expenses 41535
              </li>
              <li className="pb-[6px]">
                Tuition Fees for one-year (Indicative) 25000
              </li>
              <li className="pb-[6px]">Living and Accommodation 15000</li>
              <li className="pb-[6px]">Airfare from India to USA 1000</li>
              <li className="pb-[6px]">Visa Fees (Visa & SEVIS) 535</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfEducation;
