import React from "react";
import avatarImg from "../../assets/avatar.jpg"
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start md:items-center p-10 md:p-20 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4 md:mt-6">
          Bachelor of Technology in Computer Science and Engineering student passionate about crafting digital solutions through web development.
           Building with MERN stack |
           Exploring modern web technologies | Turning ideas into functional code.!
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
     duration-300 hover:scale-105 font-semibold rounded-3xl bg-inherit
     [#465697">Contact me</button>
      </div>
      <div><img className="" src={avatarImg} alt="" /></div>
    </div>
  );
};

export default Home;
