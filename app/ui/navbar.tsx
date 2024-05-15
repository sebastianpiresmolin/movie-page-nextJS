"use client";

import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [scrollOpacity, setScrollOpacity] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrollOpacity(85);
      } else {
        setScrollOpacity(100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="flex m-0 flex-row items-center justify-between p-3 bg-red-900 text-white sticky top-0 z-10"
      style={{ opacity: scrollOpacity / 100, transition: "opacity 0.2s" }}
    >
      <div>
        <Link href="/" className="">
          <Image
            src="/images/home.png"
            alt="logo"
            width={150}
            height={150}
            className="bg-white rounded-full"
          />
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <NavLinks />
      </div>
    </nav>
  );
}
