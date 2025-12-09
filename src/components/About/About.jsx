import React from "react";
import AboutImg from "../../assets/avatar.jpeg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  1. HTML – Structures webpage content
                  <br></br>
                  2. CSS – Styles and layouts the visual appearance
                  <br></br>
                  3. JavaScript – Adds interactivity and dynamic behavior
                  <br></br>
                  4. React.js – Frameworks for building complex user interfaces
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  1. Node.js, Python, Java, PHP – Server-side programming
                  languages<br></br>
                  2. Express, Django, Spring – Web frameworks<br></br>
                  3. MySQL,MongoDB – Databases for storing data
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Development Tools
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  1. Git for version control
                  <br></br> 2. VS Code for editing
                  <br></br> 3. Postman for API testing
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
