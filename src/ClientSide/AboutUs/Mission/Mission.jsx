import { useEffect, useRef, useState } from "react";

const Mission = () => {
  const missionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section className="sectionGap">
      <div className="WhyStudyParent pt-[70px]">
        <div
          ref={missionRef}
          className={`animated-section-ltr ${isVisible ? "visible" : ""}`}
        >
          <h1 className="chooseUsSamll text-white">
            <span className="text-[#F6941E]">Our</span> Mission
          </h1>
          <p className="homePara pb-[25px] md:pb-[30px] lg:pb-[30px] xl:pb-[30px] text-white">
            We aim to facilitate the smooth transition of students into new
            educational environments across the globe. Our mission is to provide
            support, resources, and guidance to ensure a successful migration
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
