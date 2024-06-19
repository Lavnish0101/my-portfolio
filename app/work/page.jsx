"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "clientside",
    title: "Horizon",
    description: "Horizon is a modern banking platform with a finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users on the platform.",
    stack: [{ name: "Next.js" }, { name: "Plaid" }, {name: "Typescript"},{name: "Appwrite"},],
    image: "/assets/work/horiz.png",
    live: "https://banking-app-ashy.vercel.app/sign-in",
    github: "https://github.com/Lavnish0101/banking-app",
  },
  {
    num: "02",
    category: "clientside",
    title: "Sociopedia",
    description: "Sociopedia is a social media platform where the users can create their accounts, follow friends, share their thoughts and much more!",
    stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "MaterialUI" }],
    image: "/assets/work/socio.png",
    live: "https://dummy-social-media-frontend.vercel.app/",
    github: "https://github.com/Lavnish0101/Dummy_Social_Media_Frontend",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Natours",
    description: "Natours offers a comprehensive platform for exploring travel options worldwide, complemented by seamless user login and personalized experiences.",
    stack: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }, {name: "Pug"}],
    image: "/assets/work/nato.png",
    live: "https://natours-zart.onrender.com/",
    github: "https://github.com/Lavnish0101/Natours",
  },
  {
    num: "04",
    category: "frontend",
    title: "Expense Tracker",
    description: "Expense Tracker provides intuitive tools for managing finances, tracking expenditures, and optimizing budgeting strategies for personal or business needs.",
    stack: [{ name: "React.js" }, { name: "CSS3" },],
    image: "/assets/work/expen.png",
    live: "https://expense-tracker-react-lavnish.netlify.app/",
    github: "https://github.com/Lavnish0101/Expense-Tracker_React",
  },
  {
    num: "05",
    category: "clientside",
    title: "Dummy Portfolio",
    description: "Dummy Portfolio showcases a curated collection of projects, demonstrating skills, creativity, and versatility in web development and design.",
    stack: [{ name: "React.js" }, { name: "Tailwind CSS" },],
    image: "/assets/work/dummy.png",
    live: "https://dummy-portfolio-react.netlify.app/",
    github: "https://github.com/Lavnish0101/Dummy-Portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className=" relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
