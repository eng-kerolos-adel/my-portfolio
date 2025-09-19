"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleIframeLoad = () => {
      setIsOpen(true);
      // Play success sound if available
      const audio = document.getElementById("successSound") as HTMLAudioElement;
      if (audio) {
        audio.play().catch(console.error);
      }
    };

    const iframe = document.querySelector('iframe[name="hidden-frame"]');
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      return () => iframe.removeEventListener("load", handleIframeLoad);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] flex items-center flex-col justify-center bg-foreground text-center px-8 pb-8 text-primary rounded-xl opacity-0 invisible transition-all duration-300 z-[9999999] max-md:w-4/5 ${
        isOpen ? "opacity-100 visible animate-popupIn" : ""
      }`}
    >
      <Image
        src={theme === "dark" ? "/dark.webp" : "/light.webp"}
        alt="success"
        width={100}
        height={100}
        className="w-[100px] -mt-12 rounded-full border-2 border-[#f5f5f5] shadow-md"
      />
      <h2 className="text-[38px] text-background font-medium mt-8 mb-2">
        Thank You!
      </h2>
      <p className="mt-6 text-background font-medium">
        Your details has been successfully submitted. Thanks!
      </p>
      <button
        onClick={closePopup}
        className="w-full mt-12 py-2 bg-background text-foreground text-[20px] font-medium rounded-xl shadow-md cursor-pointer"
      >
        Ok
      </button>
    </div>
  );
};

export default Popup;
