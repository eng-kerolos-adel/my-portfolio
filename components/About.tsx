"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="about" className="px-6 py-10 bg-transparent">
      <div className="bg-foreground h-full p-16 rounded-3xl flex flex-col flex-nowrap max-[991px]:px-10 max-[991px]:py-12">
        {/* العنوان */}
        <motion.div
          className="w-full flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-background">About Me</h2>
        </motion.div>

        {/* المحتوى */}
        <div className="flex flex-nowrap flex-row justify-center items-center max-[991px]:flex-col">
          {/* الصورة */}
          <motion.div
            className="w-[45%] flex items-center mb-12 justify-center max-[991px]:w-full max-[767px]:w-[110%]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={
                resolvedTheme === "dark" ? "/homeBlack.webp" : "/homeWhite.webp"
              }
              alt="profile"
              width={400}
              height={400}
              className="h-full w-full lg:max-w-[400px] lg:max-h-[400px] max-[767px]:w-full max-[767px]:h-auto relative object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* النصوص */}
          <motion.div
            className="w-[55%] flex flex-nowrap flex-col justify-center gap-0 max-[991px]:w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-2xl font-semibold mb-6 text-background"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I&apos;m Kerolos Adel <br />
              and I&apos;m <span className="text-link">Engineer</span>
            </motion.div>

            <motion.p
              className="text-justify text-xl text-background"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I am a dedicated and enthusiastic computer science student at
              Thebes Academy in Giza, Egypt. My primary focus is on front-end
              development, where I combine technical skills and creativity to
              build user-friendly interfaces and responsive websites. My goal is
              to bridge the gap between design and technology, ensuring seamless
              and engaging digital experiences. I am driven by a passion for
              continuous learning and staying up-to-date with the latest
              industry trends and technologies. I am committed to expanding my
              knowledge and honing my skills to deliver innovative solutions in
              the ever-evolving field of web development.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://drive.google.com/file/d/1JVD0uC3JNAoLB57tg9ipsa2-20Cbyppl/view?usp=sharing"
                className="flex items-center justify-center gap-1.5 px-5 py-2.5 border border-[#dedede] bg-white text-foreground rounded-xl font-medium transition-all duration-300 hover:text-background hover:bg-foreground hover:border-[#dedede] max-[991px]:w-full"
              >
                View CV
                <ExternalLink className="text-lg" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
