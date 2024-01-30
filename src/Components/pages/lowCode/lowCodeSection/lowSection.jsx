import img1 from "../assets/Bubble_Logo_no_code 1.svg";
import img2 from "../assets/Webflow_logo_2023 1.svg";
import img3 from "../assets/WordPress_blue_logo 1.svg";
import img4 from "../assets/Wix.com_website_logo 1.svg";
import img5 from "../assets/4373224_hubspot_logo_logos_icon 1.svg";

import { Link } from "react-router-dom";

const LowSection = () => {
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2>
          LOW CODE AND NO CODE <span></span>
        </h2>
        <h1 className="whitespace-nowrap max-sm:whitespace-normal">Low-code and No-code</h1>
        <p className="exp-p">
          Propel your ideas from concept to reality at unprecedented speed. Our
          Low Code No Code approach reduces development cycles, allowing you to
          innovate and iterate rapidly.
        </p>
        <div className="prod-container w-[924px] flex-wrap max-lg:w-full">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>Bubble</h3>
            <p>
              Empowers users with no-code development, enabling the creation of
              custom web applications effortlessly and efficiently.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>Webflow</h3>
            <p>
              Intuitive design tools for building responsive websites visually,
              enabling quick web design without code constraints.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3>WordPress</h3>
            <p>
              Robust content management system, facilitating website creation
              and customization with extensive plugins and themes.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img4} alt="" />
            <h3>Wix</h3>
            <p>
              User-friendly website builder offering customizable templates and
              intuitive drag-and-drop tools for effortless website creation.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img5} alt="" />
            <h3>HubSpot</h3>
            <p>
              Drag-and-drop design, SEO tools, and integrated marketing features
              for optimization.
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] inline-flex max-sm:flex-wrap max-lg:ml-[40px] max-sm:ml-[20px]">
        <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-normal">
           Need help in making the next big thing?
        </div>
        <Link
          to=""
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[90%]"
        >
          <div className="text-black rounded-[50px] text-base font-normal font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default LowSection;