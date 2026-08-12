import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt="about image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequuntur veritatis totam alias nam enim fugiat tenetur voluptate
            at quod molestiae dolores unde beatae architecto, molestias
            voluptates in pariatur omnis modi asperiores aut soluta, eius
            aliquid. Quidem aspernatur ad dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nulla mollitia fugit quos molestiae blanditiis atque recusandae
            totam nobis quas aperiam, modi dicta sint dignissimos cumque porro
            cupiditate quia assumenda. Optio perspiciatis error accusantium
            nesciunt enim facere dolore, quia nam?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            consectetur earum reprehenderit esse delectus? Optio, numquam.
            Delectus quis minima in, doloribus aliquid dignissimos neque harum
            quasi, dolore cum corrupti, molestias enim atque. Ab, maxime dolore?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            officia illum aspernatur laboriosam?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            officia illum aspernatur laboriosam?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            officia illum aspernatur laboriosam?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
