import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="footer logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, rem
            ipsam atque et nemo repudiandae quas ducimus iure quo repellat
            corrupti in sapiente. Laboriosam aut nulla fugit maiores?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-303-413-777-4</li>
            <li>roshaanmaqsood@outlook.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025&copy; forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
