"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="h-dvh px-[60px] flex items-start justify-start gap-[30px]
    md:flex-col md:justify-center md:px-10 md:items-center"
    id="hero"
    >
      <motion.div
        className="flex flex-col gap-5
      md:gap-[70px] md:items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left md:text-center">
          <motion.h2
            className="text-[44px] font-black mb-6 text-foreground
          xl:text-[65px] md:text-[44px] mt-17.5 md:mt-0 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Front-End Web Developer
          </motion.h2>
          <motion.p
            className="text-[18px] mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Design and code beautifully simple services without overwhelming
            yourself with complexity. Enjoy your passion for creating with ease
            and love.
          </motion.p>
          <motion.div
            className="flex gap-2
          md:justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              className="text-[16px] border border-[#dedede] rounded-xl px-5 py-[5px] font-medium flex items-center gap-1
            bg-white text-black
            transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105
            xl:text-[14px] xl:px-[14px] xl:py-[8px]"
              href="https://github.com/eng-kerolos-adel"
            >
              <Github className="text-[26px] xl:text-[18px]" />
              My GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="text-left md:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-[16px] text-foregound mb-4">Other Socials</p>
          <div
            className="flex items-center gap-2.5 text-[20px] cursor-pointer w-fit text-foregound
          md:justify-center"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110"
                  title={social.name}
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

{
  /* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[520px] w-[44%]"
      >
        <Image
          src={theme === "dark" ? "/homeWhite.webp" : "/homeBlack.webp"}
          alt="home"
          width={520}
          height={400}
          className="max-w-[520px] w-[44%]
      md:w-[55%]
      sm:w-[75%]"
          priority
        />
      </motion.div> */
}
