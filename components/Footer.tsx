"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="bg-foreground rounded-t-3xl pb-[120px] md:pb-auto px-6 md:px-8 lg:px-12 py-6 md:py-8 flex items-center justify-center gap-5 md:gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Link
        href="/terms"
        className="text-sm md:text-base text-background hover:text-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
      >
        Terms of Service
      </Link>
      <Link
        href="/privacy-policy"
        className="text-sm md:text-base text-background hover:text-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
      >
        Privacy Policy
      </Link>
      <p className="text-sm md:text-base text-background transition-colors duration-300">
        <span className="text-sm">©</span> 2025 Kerolos Adel Web Masterpieces.
        All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
