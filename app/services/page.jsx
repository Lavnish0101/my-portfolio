"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front End Development",
    description: "Frontend development involves creating the user interface of websites or apps using HTML, CSS, and JavaScript for interactive experiences.",
    href: "https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide",
  },
  {
    num: "02",
    title: "Backend Development",
    description: "Backend development involves creating server-side logic, databases, and APIs that enable functionality and data management for web or app services.",
    href: "https://www.simplilearn.com/tutorials/programming-tutorial/what-is-backend-development",
  },
  {
    num: "03",
    title: "Full Stack Development",
    description: "Full stack development involves proficiency in both client-side and server-side technologies, enabling end-to-end development of web applications.",
    href: "https://aws.amazon.com/what-is/full-stack-development/#:~:text=Full%20stack%20development%20is%20the,user%20interactions%20with%20the%20application.",
  },
  {
    num: "04",
    title: "SEO",
    description: "SEO, or Search Engine Optimization, focuses on optimizing websites to improve their visibility and ranking in search engine results pages (SERPs) organically.",
    href: "https://codeinstitute.net/global/blog/seo-and-web-development-why-is-it-important/#:~:text=SEO%2C%20or%20Search%20Engine%20Optimization,to%20be%20exposed%20to%20them.",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
