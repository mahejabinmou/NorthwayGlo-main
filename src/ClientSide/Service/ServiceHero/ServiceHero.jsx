const ServiceHero = () => {
  return (
    <div className=" relative">
      {/* Background image section */}
      <div
        style={{
          backgroundImage: `url(${"/Our-services.jpg"})`,
          filter: "brightness(.5)",
        }}
        className="bg-no-repeat  bg-right lg:bg-center bg-cover w-[100%] h-[485px] flex justify-center items-center"
      ></div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px]  text-left">
        <h1 className="xs:text-5xl lg:text-[80px] text-white font-helvetica font-bold text-center">
          Service
        </h1>
      </div>
    </div>
  );
};

export default ServiceHero;
