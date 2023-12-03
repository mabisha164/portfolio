import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image7 from "../Assets/image7.jpeg";
import image9 from "../Assets/image9.jpeg";
import "swiper/css";
import "swiper/css/pagination";
// import { pagination, Autoplay } from "swiper";
const Projects = () => {
  return (
    <div className="py-10 text-white ">
      <div className="text-center">
        <h1 className="text-4xl">
          My <span className="text-cyan-600">Projects</span>
        </h1>
        <p className="text-gray-600 mt-3 text-2xl">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto  relative ">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{ 768: { slidePerview: 2 } }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            // modules={[pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="h-[530px] w-[50%] p-4 bg-slate-200 rounded-xl ">
                <img src={image7} alt="" className="rounded-lg" />
                <h3 className="text-xl font-semibold text-cyan-600 my-4">
                  Clothing site
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/mabisha164/foreverinfashion"
                    className="text-white bg-gray-800 px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                  <a
                    href=""
                    className="text-white  bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" max-w-6xl px-5 mx-auto  ">
          <div className="lg:w-2/3 w-[50%] absolute -top-2 -right-16">
            <Swiper
              slidesPerview={1.2}
              spaceBetween={20}
              breakpoints={{ 768: { slidePerview: 2 } }}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              // modules={[pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="h-[500px] w-[50%] p-4 bg-slate-300 rounded-xl">
                  <img src={image9} alt="" className="rounded-lg mt-16" />
                  <h3 className="text-xl font-semibold text-cyan-600 my-4">
                    Todo-App
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mabisha164/Todo-App"
                      className="text-white bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href=""
                      className="text-white  bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
