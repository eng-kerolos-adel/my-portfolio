"use client";

import { motion } from "framer-motion";
import { Laptop, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const portfolioProjects = [
    {
      id: "1",
      title: "Complete Responsive Portfolio Design",
      description:
        "In this design, I will use modern HTML, CSS, and JavaScript to create a fully responsive portfolio design with functional scrolling to the element. We'll be using CSS Grid, CSS Flexbox, media queries.",
      image: "/1.jpeg",
      link: "https://portfolio1-three-omega.vercel.app/",
    },
    {
      id: "2",
      title: "Complete Responsive Portfolio Design",
      description:
        "In this design I will be using modern HTML, CSS and JavaScript to create a responsive portfolio design with scroll to element and also scroll to top. We'll be using CSS Flexbox and media queries.",
      image: "/2.jpeg",
      link: "https://portfolio2-eight-brown.vercel.app/",
    },
    {
      id: "3",
      title: "Coding Simplest Portfolio",
      description:
        "In this design, I will use modern HTML and CSS to create a fully responsive portfolio design with a gradient grid background and a glass theme UI design. We will use CSS Flexbox and media queries.",
      image: "/3.jpeg",
      link: "https://portfolio3-psi-two.vercel.app/",
    },
    {
      id: "4",
      title: "Portfolio Website Html CSS Only",
      description:
        "In this design, I will use modern HTML and CSS to create a fully responsive portfolio design with a great color theme. We'll be using CSS Flexbox and media queries for our responsive design and CSS transitions.",
      image: "/4.jpeg",
      link: "https://portfolio4-cyan.vercel.app/",
    },
    {
      id: "5",
      title: "Complete Responsive Personal Portfolio Website",
      description:
        "In this design, I will use modern HTML and CSS to create a completely responsive Portfolio Design with awesome color theme. We'll be using CSS Flexbox, This portfolio contains Main, Portfolio, Customer Feedback section.",
      image: "/5.jpeg",
      link: "https://portfolio5-fawn.vercel.app/",
    },
    {
      id: "6",
      title: "Complete Responsive Portfolio",
      description:
        "In this design, I will use modern HTML, CSS, and JavaScript to create a fully responsive portfolio design with functional scrolling to the element. We'll be using CSS Grid, CSS Flexbox, media queries.",
      image: "/6.jpeg",
      link: "https://portfolio6-pi.vercel.app/",
    },
    {
      id: "7",
      title: "Amonious Mourad Portfolio",
      description:
        "This is one of my works that I built for my friend Amonious Mourad, he is a photographer.",
      image: "/manss.jpeg",
      link: "https://manss-portfolio.vercel.app/",
    },
    {
      id: "8",
      title: "Nevin Assad Portfolio",
      description:
        "This is my latest work that I built for my friend Nevin Asaad who is a graphic designer and HR.",
      image: "/nevin.jpeg",
      link: "https://nevin-xi.vercel.app/",
    },
  ];

  const websiteProjects = [
    {
      id: "1",
      title: "Dynamic Island Animation",
      description:
        "An interactive clone of Apple’s Dynamic Island built with Next.js, React, and Tailwind CSS.",
      image: "/island.jpeg",
      link: "https://dynamic-island-model.vercel.app/",
    },
    {
      id: "2",
      title: "Facebook – UI Clone",
      description:
        "A simple Facebook-like interface recreated using Next.js and Tailwind CSS.",
      image: "/facebook.jpeg",
      link: "https://facebook-similer.vercel.app/",
    },
    {
      id: "3",
      title: "Linear – Modern Login Form",
      description:
        "A clean login form inspired by Linear, built with Next.js and Tailwind CSS.",
      image: "/linear.jpeg",
      link: "https://linear-log-in-form.vercel.app/",
    },
    {
      id: "4",
      title: "Blur Effect Login Form",
      description:
        "A stylish login screen with a blur background effect, made using Next.js and Tailwind CSS.",
      image: "/blur.jpeg",
      link: "https://blur-log-in-form.vercel.app/",
    },
    {
      id: "5",
      title: "Hilink – Travel App UI",
      description:
        "A modern travel app interface built with Next.js and Tailwind CSS.",
      image: "/hilink.jpeg",
      link: "https://hilink-project-travel-app.vercel.app/",
    },
    {
      id: "6",
      title: "YC Directory – Simple Clone",
      description:
        "A simplified version of YC Directory built using Next.js and Tailwind CSS.",
      image: "/yc-directory.jpeg",
      link: "https://new-yc-directory.vercel.app/",
    },
    {
      id: "7",
      title: "Movies App",
      description:
        "A movie browsing app powered by Next.js, TMDB API, and styled with Tailwind CSS.",
      image: "/movies.jpeg",
      link: "https://kero-movies-app.vercel.app/",
    },
    {
      id: "8",
      title: "Globe – Travel Planner",
      description:
        "A trip planning website made with Next.js and Tailwind CSS.",
      image: "/travel-planner.jpeg",
      link: "https://globel-travel-planner.vercel.app/",
    },
    {
      id: "9",
      title: "Apple-Inspired Web App",
      description:
        "A modern Apple-style web design built with Next.js and Tailwind CSS.",
      image: "/apple.jpeg",
      link: "https://apple-web-app-five.vercel.app/",
    },
    {
      id: "10",
      title: "Interactive Calculator",
      description:
        "A simple calculator app created using Next.js, React, and Tailwind CSS.",
      image: "/calculator.jpeg",
      link: "https://my-calculator-jade-ten.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8">
      <motion.div
        className="flex items-center justify-between mb-9 flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] font-normal text-foreground md:text-2xl">
          I Can Help You With:
        </h3>
        <Link
          href="https://github.com/eng-kerolos-adel/"
          className="text-sm px-4 py-1.5 text-btn-text bg-btn-bg border border-btn-bg rounded-lg hover:bg-btn-hover transition-all duration-300"
        >
          See My GitHub
        </Link>
      </motion.div>

      <div className="space-y-24">
        {/* Portfolio Websites Category */}
        <motion.section
          className="first:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-1/2 flex items-center gap-3">
              <div className="bg-bg-navbar flex text-text-primary items-center justify-center p-2.5 rounded-full shadow-custom">
                <Laptop />
              </div>
              <h4 className="text-2xl font-normal text-text-primary">
                Portfolio Websites
              </h4>
            </div>
            <div className="hidden md:flex justify-between items-center text-primary md:w-3/5 gap-10">
              <p className="text-sm text-text-secondary font-medium">
                Designing and developing eye-catching, fully responsive
                portfolio websites that highlight your skills and projects,
                ensuring a professional online presence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-5 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative w-full md:w-[48%] lg:w-[22%] h-[500px] md:h-[465px] p-5 bg-projects rounded-lg border-2 border-foreground"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 rounded-lg object-cover object-top border-2 border-foreground mb-5"
                />
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <h5 className="text-lg font-medium text-text-primary">
                    {project.title}
                  </h5>
                </div>
                <p className="text-sm text-text-secondary mb-8">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="absolute bottom-0 right-0 px-5 py-2 rounded-lg border-foreground text-background rounded-tr-none rounded-bl-none bg-foreground border-t-2 border-l-2 hover:bg-transparent hover:text-foreground hover:border-border-hover transition-all duration-300"
                >
                  View Live Demo
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Website Development Category */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-1/2 flex items-center gap-3">
              <div className="bg-bg-navbar flex text-text-primary items-center justify-center p-2.5 rounded-full shadow-custom">
                <Users />
              </div>
              <h4 className="text-2xl font-normal text-text-primary">
                Website Development
              </h4>
            </div>
            <div className="hidden md:flex justify-between items-center text-primary md:w-3/5 gap-10">
              <p className="text-sm text-text-secondary font-medium">
                End-to-end development of responsive websites that look great on
                all devices, with a focus on performance and aesthetics.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-5 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative w-full md:w-[48%] lg:w-[22%] h-[500px] md:h-[465px] p-5 bg-projects rounded-lg border-2 border-foreground"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 rounded-lg object-cover object-top border-2 border-foreground mb-5"
                />
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <h5 className="text-lg font-medium text-text-primary">
                    {project.title}
                  </h5>
                </div>
                <p className="text-sm text-text-secondary mb-8">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="absolute bottom-0 right-0 px-5 py-2 rounded-lg border-foreground text-background rounded-tr-none rounded-bl-none bg-foreground border-t-2 border-l-2 hover:bg-transparent hover:text-foreground hover:border-border-hover transition-all duration-300"
                >
                  View Live Demo
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default Projects;
