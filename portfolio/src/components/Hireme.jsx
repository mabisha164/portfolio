import React from "react";
import image6 from "../Assets/image6.jpeg";
function Hireme() {
  return (
    <div className="py-10 px-3 text-white">
      <div className="text-center">
        <h1 className="text-4xl">
          Hire <span className="text-cyan-600">Me</span>
        </h1>
        <p className="text-gray-600 mt-3 text-2xl">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-16 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div className="absolute top-6 left-10">
          {" "}
          <h2 className="text-2xl font-semibold">
            Do yo want any work from me?
          </h2>
          <p className=" lg:text-left text-justify max-w-lg text-lg mt-4 text-gray-200 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            tempore neque quidem laboriosam inventore, voluptatum id saepe
            beatae at ducimus veritatis est voluptatibus, accusantium aliquid
            esse, obcaecati omnis accusamus in?
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={image6}
          alt=""
          className="lg:h-[24rem] h-50 lg:absolute bottom-0 -right-10 object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hireme;
