"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top fixed bottom-[30px] right-[30px] w-[45px] h-[45px] border border-border bg-card rounded-full cursor-pointer items-center justify-center text-[20px] shadow-md transition-all duration-300 ease-in z-[999999] hover:-translate-y-1 hover:bg-btn-hover ${
        isVisible ? "flex visible" : "hidden"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp />
    </button>
  );
};

export default BackToTop;
