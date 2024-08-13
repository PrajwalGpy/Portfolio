import React from "react";
import { HERO, SOCIAL_MEDIA_LINKS } from "../constants";
import PGPImg from "../assets/Pgp.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" flex min-h-screen flex-wrap items-center ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tight lg:text-4xl">{HERO.greet}</p>
        <p className="mb-4 p-2 text-xl">{HERO.description}</p>
        <button
          className="mb-10 mr-2 p-2 px-4 py-2 text-lg font-semibold text-black bg-white rounded-lg"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1IFxqJVowKtQ8HZtortIuU77xuKjPa3ia/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Download CV
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="lg:flex lg:flex-row flex flex-col">
          <div className="flex justify-center lg:mr-40 mb-2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={PGPImg}
              // 550
              width={550}
              height={550}
              alt="Prjawal Gopal Poojary Photo"
              className="rounded-3xl"
            />
          </div>
          <div className="flex  lg:flex-col-reverse items-center justify-center gap-8 lg:gap-20">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                key={index}
                href={link.href}
                target="_black"
                role="noopener noreferrer"
                className=""
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
