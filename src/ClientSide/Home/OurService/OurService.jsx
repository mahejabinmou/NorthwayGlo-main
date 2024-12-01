import OurServiceCard from "./OurServiceCard/OurServiceCard";

const OurService = () => {
  const officesData = [
    {
      name: "Study Abroad",
      image: "/Frame (3).svg",
      description:
        "Our comprehensive study abroad services, assisting students in  finding the absolute right educational institutions and ensuring a smooth transition to their desired study destinations.",
    },
    {
      name: "Immigration",
      image: "/Frame (6).svg",
      description:
        "Our comprehensive immigration and work permit services to help our clients navigate the complex process of living and working abroad. From visa applications to work permit renewals.",
    },
    {
      name: "Scholarship",
      image: "/Frame (4).svg",
      description:
        "Our dedicated team helps students explore and apply for scholarships, providing valuable resources and guidance to maximize their chances of securing funding for their education.",
    },
    {
      name: "Easy Application",
      image: "/Frame (5).svg",
      description:
        "From initial consultation to document preparation and submission, our streamlined approach guarantees efficient and accurate applications to your desired educational institutions.",
    },
  ];

  return (
    <div>
      {/* mobile */}
      <div className="md:hidden block sectionGap   bg-[#F6941E]/[.4]">
        <div
          className="md:mr-[70px] lg:mr-[500px] xl:mr-[563px] 2xl:mr-[563px]
        mr-[16px] xs:text-center text-center md:text-left
      "
        >
          <h1 className="serviceHomeHead pt-[50px]">
            <span className="text-[#F6941E]"> Our</span> {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="serviceHomePara ">We Provide The Best Services</p>
        </div>

        <div className="gridParent  ">
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
              description={office.description}
            ></OurServiceCard>
          ))}
        </div>
      </div>

      {/* large */}
      <div className="hidden md:block  sectionGap pb-0 2xl:pb-[80px]  pt-[50px] bg-[#F6941E]/[.4]">
        <div
          className="text-center 
      "
        >
          <h1 className="chooseUsSamll xs:pb-[20px]  xl:pb-[20px] md:pb-[20px] lg:pb-[20px] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#F6941E]"> Our {""} </span> {""} {""}
            <span className="text-[#1E1E1E]">Service</span>
          </h1>
          <p className="homePara text-[#1E1E1E]/[0.8] xs:pb-[30px] md:pb-[30px] xl:pb-[30px] lg:pb-[30px] flex items-center justify-center max-w-[750px]  mx-auto">
            We provide the best services to meet the needs of our clients. With
            a focus on quality and customer satisfaction, we aim to deliver
            exceptional solutions tailored to each individual. From personalized
            consultations to innovative solutions, our team is dedicated to
            helping you succeed every step of the way.
          </p>
        </div>

        <div
          className="grid grid-cols-1  items-center pb-[50px] 
    md:grid-cols-2  md:gap-[12px]    
     
    xl:grid-cols-4  xl:gap-[12px] 
     
    lg:grid-cols-2     lg:gap-[12px];  "
        >
          {officesData.map((office) => (
            <OurServiceCard
              key={office.name}
              name={office.name}
              image={office.image}
              description={office.description}
            ></OurServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
