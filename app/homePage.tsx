'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className=" bg-white">
      <div className="container mx-auto">
      {/* Top Bar */}
      <div className="w-full px-8 py-2 flex justify-end items-center border-gray-200 text-sm">
        <p className="text-gray-800 text-lg" >
          Phone: <a href="tel:703-361-1016" className="hover:text-blue-800">703-361-1016</a> / Fax: 703.361.1018
        </p>
        <div className="ml-6 flex items-center gap-4">
          <Link href="#" aria-label="LinkedIn" className="text-gray-800  text-lg">in</Link>
          <Link href="#" aria-label="Google" className="text-gray-800 font-bold  text-lg">G</Link>
        </div>
      </div>

      {/* Header Section */}
      <header className="border px-8 py-6 flex justify-between items-center mt-10">
        <div className="flex flex-col">
          <Image src="/logo.png" alt="Blue Dove" width={200} height={100} className="border absolute top-10"/>
         <div className="border-2 ">
         <p className="text-[#1e3a8a] italic text-sm mt-10">Soaring To Provide The Best Quality of Care With Humility</p>
         <p className="text-[#1e3a8a] text-sm font-medium">A Medicare Certified Company</p>
         </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden block text-gray-800 text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav 
          ref={menuRef} 
          className={`flex justify-between w-full bg-[#F1F1F1] shadow-md  rounded-lg  lg:flex lg:items-center lg:space-x-8 lg:p-0 lg:shadow-none  transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-10 pl-20  text-sm">
          <Link href="#" className="block py-2  text-[#f59e0b] font-medium hover:text-[#d97706]" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="#" className="block py-2 text-gray-800 font-medium hover:text-blue-800" onClick={() => setMenuOpen(false)}>OUR COMPANY</Link>
          <Link href="#" className="block py-2 text-gray-800 font-medium hover:text-blue-800" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link href="#" className="block py-2 text-gray-800 font-medium hover:text-blue-800" onClick={() => setMenuOpen(false)}>RESOURCES</Link>
          <Link href="#" className="block py-2 text-gray-800 font-medium hover:text-blue-800" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          </div>
         <div className="w-fit">
         <Link href="#" className="hidden lg:block bg-[#1e3a8a] text-white px-4 py-2 rounded-md hover:bg-[#1e40af] transition">
          MAKE AN APPOINTMENT
        </Link>
         </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="">
        <div className="flex justify-between items-center ">
         <div>
         <h1 className="text-4xl font-bold text-[#1e3a8a] leading-tight ">
            ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL
          </h1>
          <button className="mt-6 bg-[#1e3a8a] text-white px-6 py-3 text-lg rounded-md hover:bg-[#1e40af]">
            REQUEST AN APPOINTMENT
          </button>
         </div>
         <div>
         <Image src="/doctor.png" alt="Blue Dove Home Health Services" width={1400} height={1400} />

         </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomePage;
