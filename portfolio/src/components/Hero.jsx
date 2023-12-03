import React from "react";
import image from "../Assets/image2.jpeg";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={image}
          alt=""
          className="md:w-11/12 h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center bg-white w-[60%] p-8 rounded-lg shadow-2xl">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold animate-bounce">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
          </h1>
          <h1 className="md:text-2xl text-xl md:leading-normal leading-10 text-black font-bold">
            {" "}
            My Name is <span>Mabisha Koirala</span>
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-red-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8 text-xl">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
