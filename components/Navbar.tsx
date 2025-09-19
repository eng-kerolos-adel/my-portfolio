"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/lib";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsLargeScreen(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav
      className={`group flex items-center justify-between md:gap-8 md:flex-row flex-col
              left-1/2 -translate-x-1/2 border border-border fixed bg-card
              bottom-6 lg:top-4 lg:bottom-auto rounded-2xl p-3 z-[99999999]
              overflow-hidden transition-[max-height] duration-500 ease-in-out
              ${
                !isLargeScreen && isNavOpen
                  ? "nav-show max-h-[500px] gap-4"
                  : "max-h-[100px]"
              }`}
    >
      <div className="flex items-center gap-2.5">
        <Image
          src={resolvedTheme === "dark" ? "/logoWhite.webp" : "/logo.webp"}
          alt="logo"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
          priority
          suppressHydrationWarning
        />
        <a
          href="#"
          className="text-foreground font-semibold w-[125px] md:w-[135px]"
          onClick={() => setIsNavOpen(false)}
        >
          Kerolos Adel
          <br />
          <span className="text-[10px] w-max text-left block">
            Web Masterpieces
          </span>
        </a>
        <ChevronUp
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`block md:hidden cursor-pointer text-foreground text-[30px] w-[30px] h-[30px] 
              transition-transform duration-300
              ${isNavOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div className=" group-[.nav-show]:gap-3 items-center gap-6 hidden md:flex md:gap-6 group-[.nav-show]:flex group-[.nav-show]:flex-col group-[.nav-show]:items-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-foreground text-sm hover:text-muted-foreground transition-all duration-300 hover:transform hover:scale-105"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="md:block hidden group-[.nav-show]:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="cursor-pointer" variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="z-[99999999999999] !p-2">
            <DropdownMenuItem
              onClick={() => {
                setTheme("light");
                setIsNavOpen(!isNavOpen);
              }}
              className="!p-1.5 cursor-pointer"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setTheme("dark");
                setIsNavOpen(!isNavOpen);
              }}
              className="!p-1.5 cursor-pointer"
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setTheme("system");
                setIsNavOpen(!isNavOpen);
              }}
              className="!p-1.5 cursor-pointer"
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

// setIsNavOpen(!isNavOpen)
