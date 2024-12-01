/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Faq.css";
import { countryDetailsDestructor } from "../../../utils/CountryDetails";
import { faqs } from "../../../Constants/exports";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Faq = ({ countryName }) => {
  // const faqs = [
  //   {
  //     country: "USA",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The USA is home to some of the best universities in the world, most of the USA universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The US is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "American colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that American jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in American colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the USA are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },

  //   {
  //     country: "Ireland",
  //     q: [
  //       {
  //         question: "How much does it cost to study in Ireland?",
  //         answer:
  //           "It costs about €7,000-€12,000 annually to study in Ireland. The specific kind of housing significantly influences the cost of living. For instance, in Dublin, ‌yearly living expenses range between €10,000 and €15,000. Living costs outside Dublin are usually about 20% less.",
  //       },
  //       {
  //         question: "How to study in Ireland from India?",
  //         answer:
  //           "To study in Ireland as an Indian student, the first step is to decide on a course and an institution. You must then apply to the institution directly, providing all the necessary documentation. Once you receive an offer and accept it, you need to pay the required fees and apply for a Student visa.",
  //       },
  //       {
  //         question: "How much of a study gap is accepted in Ireland?",
  //         answer:
  //           "Irish institutions of higher education do not enforce any restrictions regarding the study gap. This provides a significant advantage to those who have taken a longer break in their academic journey, offering them a chance to resume their studies without any specific limitations tied to the study gap.",
  //       },
  //       {
  //         question: "Can I get a student loan to study in Ireland?",
  //         answer:
  //           "Yes, you can get a student loan as high as 1.5 Crores with an initial interest rate of 8.55% per annum to study in Ireland. The options include both secured and unsecured loans.Secured loans are primarily provided by public banks, while unsecured loans are sourced from private banks or Non-Banking Financial Companies (NBFCs).",
  //       },
  //     ],
  //   },

  //   {
  //     country: "UK",
  //     q: [
  //       {
  //         question: "How much of a gap is accepted for study in the UK?",
  //         answer:
  //           "The gap accepted to study in the UK depends on the level of education a candidate is pursuing. Typically, a gap of up to 2 years is acceptable for undergraduate programs, whereas a gap of almost 5 years is accepted for candidates aspiring to study for a postgraduate degree in the UK.",
  //       },
  //       {
  //         question: "How much money is required to study in the UK?",
  //         answer:
  //           "Tuition fees for international students vary depending on the university and the chosen course. On average, undergraduate and postgraduate tuition fees for international students range from GBP 10,000 to GBP 40,000 per year, while living expenses are approximately GBP 5,700 per year.",
  //       },
  //       {
  //         question: "How to get a scholarship to study in the UK?",
  //         answer:
  //           "A plethora of funding options is available to study in the UK. Candidates must check the official websites of UK universities and educational institutions, as well as government and private organizations, for scholarship opportunities. Widely, a tremendous academic record can help candidates in securing scholarships in the UK.",
  //       },
  //       {
  //         question: "How to study in the UK from India?",
  //         answer:
  //           "From researching for a course to arranging for accommodation, candidates need to follow key steps as listed below to study in the UK. Selecting a course and university Meeting the admission requirements to get an acceptance letterAttaining a student visa to stay and study in the UKLearning about pre and post-departure processes",
  //       },
  //     ],
  //   },
  //   {
  //     country: "Canada",
  //     q: [
  //       {
  //         question: "How much money is required to study in Canada?",
  //         answer:
  //           "Tuition fees for undergraduate programs for international students typically range from CAD 20,000 – CAD 35,000 per year. However, the cost of studying in Canada can vary based on several factors, including the level of study, the specific course or program, the institution, and your lifestyle choices.",
  //       },
  //       {
  //         question: "How much of a gap is accepted for study in Canada?",
  //         answer:
  //           "The Canadian government accepts a gap of up to two years for pursuing Diploma and Bachelor’s programs. Whereas for Master’s studies, the Canadian government accepts a gap of up to five years.",
  //       },

  //       {
  //         question: "How can I study in Canada for free?",
  //         answer:
  //           "Studying in Canada for free is possible only if the students get scholarships or financial aid. Most international student scholarships offer full tuition fee waivers along with monthly allowances to support additional expenses. Apart from this, university-specific scholarships are also available for international students with high academic caliber.",
  //       },
  //       {
  //         question: "How to get a scholarship to study in Canada?",
  //         answer:
  //           "Applying early, researching well, meeting deadlines, and fulfilling the eligibility requirements are some of the ways by which international students can obtain scholarships. Apart from all this, students must maintain a high academic standard and should prepare a strong application.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "Australia",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The Australia is home to some of the best universities in the world, most of the Australia universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The US is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "Australia colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in  Australia. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that Australia jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in Australia have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in American colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the Australia are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "Austria",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The Austria is home to some of the best universities in the world, most of the Austria universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The Austria is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "Austria colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that Austria jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the Austria to earn more money. However, students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in Austria colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the USA are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in Austria for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "Germany",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The Germany is home to some of the best universities in the world, most of the Germany universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The Germany is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "Germany colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that Germany jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in Germany colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the Germany are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "Japan",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The Japan is home to some of the best universities in the world, most of the Japan universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The Japan is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "Japan colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in Japan. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that Japan jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the Japan to earn more money. However, students who have studied in Japan have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in American colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in Japan are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "China",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The China is home to some of the best universities in the world, most of the China universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The China is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "China colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in China. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that China jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in China have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in China colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the USA are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  //   {
  //     country: "China",
  //     q: [
  //       {
  //         question: "Academic powers",
  //         answer:
  //           "The China is home to some of the best universities in the world, most of China universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The China is home to 33 of the top 100 universities.",
  //       },
  //       {
  //         question: "Excellent international student support system",
  //         answer:
  //           "China colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in China. On an average day, one can find students on the college campus from at least 10-15 different nationalities.",
  //       },
  //       {
  //         question: "Successful post-college career",
  //         answer:
  //           "The fact that China jobs offer the highest wages cannot be denied. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. However, students who have studied in China have an advantage, as they can access exclusive career prospects and develop skills that are relevant to the workforce in American colleges.",
  //       },
  //       {
  //         question: "Career opportunities",
  //         answer:
  //           "Starting salaries for graduates from the top colleges in the China are competitive. Even if candidates attend a tier-2 university, they can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at a salary of $66,123. One of the primary benefits of studying in the United States for international students is the experiential learning opportunities offered to students through internships and job placements.",
  //       },
  //     ],
  //   },
  // ];
  const [activeIndex, setActiveIndex] = useState(null); // Track active index

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active item
  };
  // const countryDetails = countryDetailsDestructor(countryName); // if you go inside this file you will crashed your head so better no to go there...
  const [countryDetails] = faqs.filter(
    (country) => country.country.toLowerCase() === countryName.toLowerCase()
  );
  return (
    <div
      className="mt-[250px] px-[16px]
    xs:mt-[240px] xs:px-[16px]
    
    md:mt-[180px] md:px-[32px]
   
    lg:px-[60px] lg:mt-[350px]
    
    xl:px-[150px] xl:mt-[350px] 
    2xl:px-[150px] 2xl:mt-[350px]"
    >
      <div className="flex 2xl:pt-[50px] sm:pt-[60px] md:pt-[60px] flex-col md:flex-row-reverse gap-x-[68px] items-center">
        <div className="w-full md:w-[40%] h-[370px] lg:h-[406px] pb-[0px] lg:pb-0">
          <LazyLoadImage
            className="w-full h-full bg-cover"
            src="https://i.ibb.co.com/0sc8rCK/faq-66dc00ae9d778.webp"
            alt="faqimage"
          />
        </div>
        <div className="w-full md:w-[60%] p-2 ">
          <div className="py-0">
            <h1 className="faqHead leading-[36px] pb-[20px] text-[#1E1E1E] text-nowrap">
              Study in <br className="md:hidden block" />
              <span className="text-[#F6941E]">{countryName} FAQ's</span>
            </h1>
            <p className="font-normal md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] text-[#1E1E1E]/[.8] pb-0 lg:pb-[30px]">
              Studying in the {countryName} can offer a variety of benefits,
              making it an attractive destination for international students.
              Here are some reasons why study in {countryName} is a popular
              choice.
            </p>
          </div>

          <div className="join join-vertical w-full">
            {countryDetails?.q?.map((faq, index) => (
              <div
                key={index}
                className={`mb-[16px] bg-white collapse collapse-plus join-item border ${
                  activeIndex === index ? "border-[#F6941E]" : "border-base-300"
                }`}
              >
                <div
                  className="collapse-title text-lg md:text-xl font-medium text-[#1E1E1E] cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "\u2212" : "\u002B"}</span>
                </div>
                {activeIndex === index && (
                  <div className=" px-4 pb-4  ">
                    <p className="text-sm md:text-base text-[#1E1E1E]/[.8]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
