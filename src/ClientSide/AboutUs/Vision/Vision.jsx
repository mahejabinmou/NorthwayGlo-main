import { useEffect, useRef, useState } from "react";

const Vision = () => {
  const visionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when it's not in view
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => {
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
    };
  }, []);

  return (
    <section className="sectionGap pb-[70px]">
      <div className="WhyStudyParent mt-[-75px]">
        <div
          ref={visionRef}
          className={`animated-section-rtl text-right ${
            isVisible ? "visible" : ""
          }`}
        >
          <h1 className="chooseUsSamll text-right text-white">
            <span className="text-[#F6941E]">Our</span> Vision
          </h1>
          <p className="homePara pb-[25px] md:pb-[30px] lg:pb-[30px] xl:pb-[30px] text-white">
            Our long-term vision is to establish a globally connected
            educational ecosystem. We are dedicated to fostering innovation,
            inclusivity, and sustainability in education, ensuring every student
            has the opportunity to thrive in a dynamic world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
