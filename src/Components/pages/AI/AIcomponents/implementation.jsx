import React from "react";
import img from "../assets/shubham-dhage-B0_nHG45X50-unsplash 1.jpg";
const Implementation = () => {
  return (
    <>
      <div className="w-full h-[992px] relative bg-white mt-20 max-lg:h-full">
        <div className="left-[80px] top-[88px]  flex-col justify-start items-start gap-[22px] inline-flex">
          <div className="flex-col max-sm:w-full justify-start items-start gap-[30px] flex">
            <div className="w-[521.42px] justify-start items-center gap-[13.42px] inline-flex max-sm:w-full">
              <div className="opacity-60 text-black text-sm font-normal font-['Archivo'] uppercase leading-snug">
                Artificial Intelligence (AI) services{" "}
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-30 border border-black"></div>
            </div>
            <div className="w-[562.77px] letter-spacing-2 text-black text-[49.20px] font-normal font-['Graphik'] leading-[120%] max-sm:w-[100%] max-sm:text-[36px]">
              AI Implementation Strategy{" "}
            </div>
          </div>
          <div className="w-[536.02px] max-sm:h-auto h-[85.15px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
            Transform your business with our AI Implementation Strategy
            services, featuring custom roadmap design, adoption training, and
            governance solutions for successful, ethical, and efficient AI
            integration.
          </div>
        </div>

        <div className="flex gap-20 max-sm:gap-[32px] mt-[54px] max-lg:flex-wrap">
          <div className="left-[80px] top-[376px]  flex-col justify-start items-start gap-[54px] inline-flex max-lg:flex-row max-lg:flex-wrap">
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                Custom AI Roadmap Design{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Craft tailored AI implementation roadmaps aligning with business
                goals, ensuring seamless integration, and measurable success.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                AI Adoption Training Programs{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Develop comprehensive training programs to foster AI adoption,
                empowering teams with skills for optimal AI utilization and
                efficiency.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex max-sm:w-full">
              <div className="text-black letter-spacing-4 text-xl font-normal font-['Graphik'] leading-normal">
                AI Governance and Compliance{" "}
              </div>
              <div className="w-[291.37px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-sm:w-full">
                Establish robust AI governance policies, compliance frameworks,
                and ethical guidelines for responsible and secure AI
                implementation strategies.
              </div>
            </div>
          </div>

          <div className="h-[568px] left-[516px] max-lg:w-full max-lg:justify-center top-[376px]  flex-col justify-start items-center inline-flex max-sm:w-full max-sm:h-full">
            <img
              className="w-[519.33px] h-[779.13px] max-sm:w-full max-sm:h-full"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Implementation;
