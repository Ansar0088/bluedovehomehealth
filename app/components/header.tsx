'use client'

import React, { useEffect, useRef, useState } from 'react'
import { CalendarDays, ChevronRight, Linkedin, MenuIcon, X } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(pathname);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full px-8 py-2 flex justify-end items-center border-gray-200 text-sm">
        <p className="text-gray-800 text-lg font-bold">
          Phone: <a href="tel:703-361-1016" className="hover:text-blue-800">703-361-1016</a> / Fax: 703.361.1018
        </p>
        <div className="ml-6 flex items-center gap-4 font-bold">
          <Link href="#" aria-label="LinkedIn" className="text-gray-800 text-lg">
            <Linkedin />
          </Link>
          <Link href="#" aria-label="Google" className="text-gray-800 font-bold text-2xl">G</Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky bg-white top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Amana Home Healthcare"
                width={240}
                height={80}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300"></div>
            </div>
            <div className="mt-1 pl-1 border-l-4 border-[#f59e0b]/70">
              <p className="text-[#1e3a8a] italic text-sm font-light ml-2">
                Soaring To Provide The Best Quality of Care With Humility
              </p>
              <p className="text-[#1e3a8a] text-sm font-medium ml-2">A Medicare Certified Company</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full bg-[#1e3a8a]/5 text-[#1e3a8a] hover:bg-[#1e3a8a]/10 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>

          {/* Navigation */}
          <nav
            ref={menuRef}
            className={`${
              menuOpen
                ? "flex flex-col absolute top-full left-0 right-0 bg-white z-50 p-6 shadow-lg border-t border-gray-100 animate-in slide-in-from-top-5"
                : "hidden"
            } lg:flex lg:flex-row lg:static lg:p-0 lg:shadow-none lg:border-0 items-center lg:space-x-1 xl:space-x-2 bg-transparent`}
          >
            {[
              { name: "HOME", href: "/home" },
              { name: "OUR COMPANY", href: "/our-company" },
              { name: "SERVICES", href: "/services" },
              { name: "RESOURCES", href: "/resources" },
              { name: "CONTACT US", href: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-3 py-2.5 rounded-md font-medium text-sm tracking-wide transition-all duration-200 group
                  ${activeMenu === item.href ? "text-[#f59e0b] font-bold" : "text-gray-700 hover:text-[#1e3a8a]"}
                  lg:hover:bg-[#1e3a8a]/5 flex items-center
                `}
                onClick={() => setActiveMenu(item.href)}
              >
                {item.name}
                <span
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#f59e0b]
                    transition-all duration-300 ease-out
                    ${activeMenu === item.href ? "w-12" : "w-0 group-hover:w-12"}
                  `}
                ></span>
                {activeMenu !== item.href && <ChevronRight className="ml-auto lg:hidden h-4 w-4 text-gray-400" />}
              </Link>
            ))}

            {/* Appointment Button */}
            <Link
              href="#"
              className="
                mt-4 lg:mt-0 lg:ml-4 xl:ml-6
                bg-[#1e3a8a] text-white px-6 py-3 rounded-xs
                hover:bg-[#1e40af] font-medium text-sm tracking-wide
                transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-md
                flex items-center justify-center
              "
            >
              MAKE AN APPOINTMENT
              <CalendarDays className="h-5 w-5 ml-2" />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
