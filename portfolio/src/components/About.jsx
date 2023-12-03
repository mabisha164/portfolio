import React from "react";
// import image5 from "../Assets/image4.jpeg"
import image5 from "../Assets/image5.jpeg";
import image10 from "../Assets/image10.jpeg";

const About = () => {
  const info = [
    {
      text: "Years experience",
      count: "01",
    },
    {
      text: "Completed Projects",
      count: "06",
    },
    {
      text: "Companies work",
      count: "02",
    },
  ];
  return (
    <div className="py-10 text-black ">
      <div className="h-0.5 w-[80%] border border-red-700 ml-36">
        <hr />
      </div>
      <div className="text-center mt-8">
        <h3 className="text-4xl font-fantasy ">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-800 my-3 text-3xl font-cursive">
          My introduction
        </p>
        <div className="p-2">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="text-gray-800 my-3 ">
              <p className="text-justify leading-8 w-11/12 mx-auto">
                Hello there! 👋 I'm Mabisha Koirala, an intermediate Frontend
                Developer with a passion for creating visually appealing and
                intuitive web experiences. I thrive on turning ideas into
                reality through code and design, constantly seeking to enhance
                my skills and contribute to the ever-evolving world of web
                development.I genuinely enjoy the process of bringing static
                designs to life, creating dynamic and responsive websites that
                engage users.
              </p>
              <div>
                <div className="flex mt-10 items-center gap-10">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600 ml-[3px]">+</span>
                      </h3>
                      <h4 className="md:text-l text-l font-semibold text-blue-900 mt-2">
                        {content.text}
                      </h4>
                    </div>
                  ))}
                </div>
                <br />
                <a href={image10} download>
                  <button className="btn-primary ">Download CV</button>
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm ml-10 image5">
                <img
                  src={image5}
                  alt=""
                  className="w-full rounded-full shadow-2xl bg-cyan-700 object-cover border border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-[80%] border border-red-700 ml-36 mt-5">
        <hr />
      </div>
    </div>
  );
};

export default About;
