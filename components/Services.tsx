"use client";

import { motion } from "framer-motion";
import { Brush, Code, PencilRuler, Newspaper, BookMarked } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "Photo Editing",
      description:
        "In two years mastering Photoshop, I've transformed visions into captivating visuals, wielding creativity and precision to craft compelling designs.",
      link: "#",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "With 5 years in web development, I have designed dynamic, user focused websites and mastered various techniques to deliver impactful online experiences. And I still haven't finished.",
      link: "#",
    },
    {
      icon: PencilRuler,
      title: "Logo Industry",
      description:
        "Over three years in the logo industry, I've shaped brand identities with creativity and precision, crafting distinctive symbols that resonate effectively.",
      link: "#",
    },
    {
      icon: Newspaper,
      title: "Portfolio Websites",
      description:
        "Built a professional portfolio for you with content management features.",
      link: "#",
    },
  ];

  return (
    <section id="services" className="px-6 py-10 bg-transparent">
      <div className="bg-foreground h-full p-16 rounded-3xl flex flex-col flex-nowrap max-[991px]:px-10 max-[991px]:py-12">
        <motion.div
          className="w-full flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-background">My Services</h2>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/courses/complete-course"
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-background text-foreground border border-background rounded-xl font-medium transition-all duration-300 hover:bg-foreground hover:border-background hover:text-background"
          >
            Explore my Courses
            <BookMarked className="text-lg" />
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="border bg-background border-background rounded-2xl p-6 md:p-8 w-full sm:w-[48%] lg:w-[24%]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-[28px] w-min md:text-[38px] border border-background rounded-lg p-2.5 bg-foreground text-background"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent />
                </motion.div>
                <Link
                  href={service.link}
                  className="block my-6 text-foreground text-xl"
                >
                  {service.title}
                </Link>
                <p className="text-foreground text-base leading-6">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
