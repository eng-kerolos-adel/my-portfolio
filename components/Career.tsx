"use client";

import { motion } from "framer-motion";
import { Code, Brush, PencilRuler, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const Career = () => {
  const jobs = [
    {
      icon: Code,
      title: "Freelancer Frontend Developer",
      period: "2022 - Present",
    },
    {
      icon: Brush,
      title: "Photo Editing With Canva & Adobe Photoshop",
      period: "2020 – 2022",
    },
    {
      icon: PencilRuler,
      title: "Logo Industry With Canva & Adobe Illustrator",
      period: "2019 – 2020",
    },
  ];

  const awards = [
    {
      icon: Award,
      title: "Web Development Course Certificate from Udemy",
      link: "https://drive.google.com/file/d/1xOwL_AZnRDyifLbYv-8ZS3yK-NTx1pHY/view?usp=sharing",
    },
    {
      icon: Award,
      title: "Web Developer Course Certificate from Udemy",
      link: "https://drive.google.com/file/d/1RwKw8N4l33emD3xKzI5W7z3NqURAp5u4/view?usp=sharing",
    },
    {
      icon: Award,
      title: "Front End Course Certificate from Udemy",
      link: "https://drive.google.com/file/d/1MIrrpuT6Ey59qPoTQK2vUZE-xhQvwJVm/view?usp=sharing",
    },
  ];

  return (
    <section id="career" className="px-6 py-10 bg-transparent">
      <div className="bg-foreground text-background flex flex-col lg:flex-row gap-5 p-8 md:p-16 rounded-3xl">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-5 md:mb-0 mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[32px] font-medium mb-5 lg:text-[26px] text-background"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h3>

          {jobs.map((job, index) => {
            const IconComponent = job.icon;
            return (
              <div key={job.title}>
                <motion.div
                  className="flex items-center gap-5 pb-5 hover:translate-x-1 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-xl p-2.5 bg-bg-navbar text-background rounded-lg font-bold shadow-custom">
                    <IconComponent />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-background">
                      {job.title}
                    </h5>
                    <p className="text-sm text-muted-foreground font-medium">
                      {job.period}
                    </p>
                  </div>
                </motion.div>
                <hr className="bg-background -mt-4" />
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-medium mb-5 text-background"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Awards & Recognition
          </motion.h3>

          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div key={award.title}>
                <motion.div
                  className="flex items-center justify-between gap-5 pb-5 hover:translate-x-1 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-5">
                    <div className="text-xl p-2.5 bg-bg-navbar text-background rounded-lg font-bold shadow-custom">
                      <IconComponent />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-background">
                        {award.title}
                      </h5>
                    </div>
                  </div>
                  <Link
                    href={award.link}
                    title="certificate"
                    target="_blank"
                    className="text-2xl text-background hover:text-link-hover transition-colors duration-300"
                  >
                    <ExternalLink />
                  </Link>
                </motion.div>
                <hr className="bg-background -mt-4" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
