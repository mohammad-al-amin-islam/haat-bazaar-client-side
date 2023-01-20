import { Carousel } from "antd";
import React from "react";
import img1 from "../../Images/landingBannerTop.jpg";

const Banner = () => {
  const contentStyle = {
    // lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <Carousel
      className=""
      style={{
        backgroundImage: `url(${img1})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h3
          className="text-blue-800 text-6xl font-semibold lg:mt-20"
          style={contentStyle}
        >
          Welcome To Haat Bazaar
        </h3>
        <p className="text-center text-3xl mt-1">
          Get All Daily grocerries online{" "}
        </p>
        <div className="text-center mt-3">
          <button className="bg-slate-900 rounded text-white p-2 lg:mb-20">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <h1>This is div</h1>
      </div>
    </Carousel>
  );
};

export default Banner;
