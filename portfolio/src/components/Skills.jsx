import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expert",
      count: 86,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
  ];
  return (
    <div className="py-10  relative">
      <div className="mt-8 text-black text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-800">Skills</span>
        </h3>
        <p className="text--800 mt-4 text-lg">My Knowledge</p>
        <div className="flex items-center justify-center mt-8 gap-16 flex-wrap ">
          <div className="border-2 border-blue-800 relative min-w-[10rem] max-w-[16rem] bg-gray-700 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) 70%, #ddd 70%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                <ion-icon name="logo-html5">
                  <AiOutlineHtml5 color="white" size={80} />
                </ion-icon>
              </div>
            </div>
            <p className="text-xl mt-3 text-white">Advance</p>
          </div>

          <div className="border-2 border-blue-800 relative min-w-[10rem] max-w-[16rem] bg-gray-700 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) 90%, #ddd 90%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                <ion-icon name="logo-html5">
                  <IoLogoCss3 color="white" size={80} />
                </ion-icon>
              </div>
            </div>
            <p className="text-xl mt-3 text-white">Expert</p>
          </div>
          <div className="border-2 border-blue-800 relative min-w-[10rem] max-w-[16rem] bg-gray-700 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) 40%, #ddd 60%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                <ion-icon name="logo-html5">
                  <FaReact color="white" size={80} />
                </ion-icon>
              </div>
            </div>
            <p className="text-xl mt-3 text-white">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
