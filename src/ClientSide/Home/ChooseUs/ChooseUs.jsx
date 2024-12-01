import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div className="  xs:mt-[60px] md:mt-[80px] lg:mt-[60px]  xl:mt-[100px]  2xl:mt-[100px]">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/55VsYxP/students-back-school-2024-beautiful-school-buildings.webp")`,
              filter: "brightness(.6)",
            }}
            className="bg-no-repeat bg-center bg-cover w-full md:h-[700px] h-[383px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h1 className="ChooseUsHead">
              Choose from 11+ University and College Scholarships
            </h1>
            <p className="ChooseUsPara text-white">
              Explore numerous opportunities to further your education and
              career with our partner universities and colleges. Our dedicated
              team will guide you through the process of applying for
              scholarships, ensuring that you find the best financial support
              for your academic journey.
            </p>
            <Link to="/ContactUs">
              <button className="flex items-center justify-between joinUsBtn gap-x-[11.5px] hover:bg-[#F6941E] hover:text-white">
                Join us <MdArrowRightAlt />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

// import { MdArrowRightAlt } from "react-icons/md";
// import { Link } from "react-router-dom";

// const ChooseUs = () => {
//   return (
//     <div
//       className="  md:mt-[80px] lg:mt-[80px] xl:mt-[100px]  2xl:mt-[100px]
//       xs:mt-[50px]"
//     >
//       <div className="  ">
//         <div className="relative">
//           <div
//             style={{
//               backgroundImage: `url("https://i.ibb.co.com/55VsYxP/students-back-school-2024-beautiful-school-buildings.webp")`,
//               filter: "brightness(.6)",
//             }}
//             className="bg-no-repeat bg-center bg-cover w-full md:h-[700px] h-[383px] flex justify-center items-center"
//           ></div>

//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
//             <h1
//               className="homeHead xs:px-[16px] lg:px-[200px] xl:px-[346px]  2xl:px-[346px]
//              md:px-[150px]"
//             >
//               Choose from 11+ University and College Scholarships
//             </h1>
//             <p
//               className="homePara px-[16px] xs:px-[16px] md:px-[100px] lg:px-[180px]  xl:px-[449px] mt-[15px]
//             text-[#FFFFFF]/[.8] "
//             >
//               Explore numerous opportunities to further your education and
//               career with our partner universities and colleges. Our dedicated
//               team will guide you through the process of applying for
//               scholarships, ensuring that you find the best financial support
//               for your academic journey.
//             </p>
//             <Link to="/ContactUs">
//               <button className="flex items-center justify-between joinUsBtn gap-x-[11.5px] hover:bg-[#F6941E] hover:text-white">
//                 Join us <MdArrowRightAlt />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
