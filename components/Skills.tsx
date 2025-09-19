"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  Palette,
  Code2,
  Layers,
  Database,
  Square,
  Wrench,
  Code,
} from "lucide-react";

const Skills = () => {
  const skills: Array<{
    icon: React.ComponentType<{ className?: string }>;
    count: string;
    label: string;
  }> = [
    { icon: FileCode, count: "25+", label: "HTML5 Projects" },
    { icon: Palette, count: "25+", label: "CSS3 Projects" },
    { icon: Code2, count: "15+", label: "JavaScript Projects" },
    { icon: Layers, count: "3+", label: "React Projects" },
    { icon: Square, count: "10+", label: "Bootstrap Projects" },
    { icon: Wrench, count: "12+", label: "Tailwind Projects" },
    { icon: Code, count: "5+", label: "PHP Projects" },
    { icon: Database, count: "5+", label: "MySQL Projects" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-16 pt-24 pb-16"
    >
      <motion.div
        className="w-full lg:w-1/2 lg:pr-20 mb-10 lg:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-5xl font-black text-foreground sm:text-3xl md:text-4xl lg:text-[35px] mb-6 lg:mb-9 text-center">
          My Creative Skills
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-foreground text-center mb-6 lg:mb-7">
          My meticulous approach to coding ensures clean, efficient, and
          scalable solutions. I leverage HTML for structured content, CSS for
          aesthetic styling, and JavaScript for dynamic functionality.
          Additionally, my adeptness in PHP enables server-side scripting, while
          SQL proficiency empowers me to manage databases seamlessly. This
          well-rounded skill set positions me as a versatile web developer
          capable of creating diverse and impactful online experiences.
        </p>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.label}
              className="bg-services flex flex-col items-center justify-center p-4 sm:p-5 border border-foreground rounded-xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-6xl h-[40px] w-[40px] flex items-center justify-center py-5 text-text-primary transition-all duration-300"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <IconComponent />
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center p-5 hover:-translate-y-1 hover:shadow-card transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h5 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-primary">
                  {skill.count}
                </h5>
                <p className="w-full sm:w-3/4 text-center text-sm sm:text-sm lg:text-base text-foreground font-medium">
                  {skill.label}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
