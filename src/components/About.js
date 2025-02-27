import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl text-bold">
            <p>Hi. I'm Ram, nice to meet you. Please take a look around.</p>
            <h1 className="text-2xl font-semibold mx-2 px-4 mb-4"> Resume</h1>
          </div>
          <div>
            <p>
              Passion for Technology & Development 🚀As a MERN stack developer,
              my passion lies in building innovative, scalable, and user-centric
              applications.From crafting dynamic React interfaces to optimizing
              Node.js backends, every challenge fuels my drive to learn and
              grow. Staying ahead in the ever-evolving tech landscape excites
              me—I continuously explore new frameworks, best practices, and
              performance optimizations to build impactful solutions. Technology
              isn’t just my profession; it’s my creative outlet, problem-solving
              tool, and lifelong passion. 🔥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
