import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mt-10">
        Shop By Categories
      </h1>
      <div className="grid grid-cols-4  mt-14 gap-5">
        <div className="text-center border p-3 rounded-md">
          <Link to="/eggs" className="text-3xl">
            <img
              className="w-1/2 mx-auto"
              src="https://api.meekago.com/api/upload/images/egg-b1059.png"
              alt=""
            />
            Eggs
          </Link>
        </div>
        <div className="text-center border p-3 rounded-md">
          <Link to="/freshFruits" className="text-3xl">
            <img
              className="w-1/2 mx-auto"
              src="https://api.meekago.com/api/upload/images/fruits-f48c.png"
              alt=""
            />
            Fresh Fruits
          </Link>
        </div>
        <div className="text-center border p-3 rounded-md">
          <Link to="/fish" className="text-3xl">
            <img
              className="w-1/2 mx-auto"
              src="https://api.meekago.com/api/upload/images/fish-category-75b10.png"
              alt=""
            />
            Fish
          </Link>
        </div>
        <div className="text-center border p-3 rounded-md">
          <Link to="/cookingItems" className="text-3xl">
            <img
              className="w-1/2 mx-auto"
              src="https://api.meekago.com/api/upload/images/cooking-essentials-2-4102b.png"
              alt=""
            />
            Cooking Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
