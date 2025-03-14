'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AutoCarousel from "./components/AutoCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ChevronUp, Mail, MapPin, MenuIcon, Phone, X } from "lucide-react";
import HomePageCarasoul from "./components/homePageCarasoul";
import ServiceAreasAndCareers from "./components/area-services";

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
          <p className="text-gray-800 text-lg font-bold" >
            Phone: <a href="tel:703-361-1016" className="hover:text-blue-800">703-361-1016</a> / Fax: 703.361.1018
          </p>
          <div className="ml-6 flex items-center gap-4 font-bold">
            <Link href="#" aria-label="LinkedIn" className="text-gray-800  text-lg">in</Link>
            <Link href="#" aria-label="Google" className="text-gray-800 font-bold  text-lg">G</Link>
          </div>
        </div>

        {/* Header Section */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${window.scrollY > 0 ? "shadow-md bg-white/95 backdrop-blur-sm py-2" : "py-4 bg-white"
            }`}
        >
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo + Text (Left aligned) */}
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
              className={`${menuOpen
                ? "flex flex-col absolute top-full left-0 right-0 bg-white z-50 p-6 shadow-lg border-t border-gray-100 animate-in slide-in-from-top-5"
                : "hidden"
                } lg:flex lg:flex-row lg:static lg:p-0 lg:shadow-none lg:border-0 items-center lg:space-x-1 xl:space-x-2 bg-transparent`}
            >
              {[
                { name: "HOME", href: "#", active: true },
                { name: "OUR COMPANY", href: "#", active: false },
                { name: "SERVICES", href: "#", active: false },
                { name: "RESOURCES", href: "#", active: false },
                { name: "CONTACT US", href: "#", active: false },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                relative px-3 py-2.5 rounded-md font-medium text-sm tracking-wide
                transition-all duration-200 group
                ${item.active ? "text-[#f59e0b]" : "text-gray-700 hover:text-[#1e3a8a]"}
                lg:hover:bg-[#1e3a8a]/5
                flex items-center
              `}
                >
                  {item.name}
                  <span
                    className={`
                absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#f59e0b]
                transition-all duration-300 ease-out
                ${item.active ? "w-12" : "w-0 group-hover:w-12"}
              `}
                  ></span>
                  {!item.active && <ChevronRight className="ml-auto lg:hidden h-4 w-4 text-gray-400" />}
                </Link>
              ))}

              <Link
                href="#"
                className="
              mt-4 lg:mt-0 lg:ml-4 xl:ml-6
              bg-[#1e3a8a] text-white px-6 py-2.5 rounded-md
              hover:bg-[#1e40af] font-medium text-sm tracking-wide
              transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-md
              flex items-center justify-center
            "
              >
                MAKE AN APPOINTMENT
              </Link>
            </nav>
          </div>
        </header>
        {/* Hero Section */}
        <AutoCarousel />
        {/*  */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full  py-8 px-4">
          <div className="w-full md:w-3/4 pr-0 md:pr-8">
            <h2 className="text-2xl md:text-2xl font-bold text-[#2D3F85] mb-6">Would you rather stay at home than go into a health care facility or nursing home?</h2>
            <div className="border-t-2 border-gray-300 w-48 mb-4"></div>
            <p className="text-gray-700">
              At Blue Dove, we offer more than home health services. We provide compassionate medical care
              and pain management, as well as emotional and spiritual support to patients and their loved ones.
              Provided wherever a patient calls home.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="bg-[#2D3F85] hover:bg-[#2D3F85] rounded-md" size='lg'>VIEW ALL SERVICES</Button>
          </div>
        </div>

        {/*  */}
        <HomePageCarasoul />
        {/* services section */}
        <main className=" bg-[#406994] text-white relative  mt-20">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20  z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content Section */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium">WELCOME TO</h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Blue Dove Home Health Services</h1>
                </div>

                <p className="text-base md:text-lg">
                  Blue Dove Home Health Services is a private agency providing dedicated professionals and services you can
                  rely on around the clock or on a needed basis. We work hand in hand with the patient, doctors and family
                  members to establish a health care program specifically designed to meet your needs.
                </p>

                <p className="text-base md:text-lg">
                  Blue Dove's CEO has over 35 years of experience as a registered nurse. She has been involved in many
                  quality assurance programs that involve enhancing the quality of life of the elderly and disabled. Her
                  belief is to make a positive impact on those who are most vulnerable and treating each individual as a
                  holistic being. We provide extraordinary care to those who are among the most vulnerable populations. We
                  employ top-notch nurses, physical, occupational and speech therapists, home health aides, social workers,
                  and companion aides who are compassionate about their work and the lives that are entrusted to them. Our
                  staff has a passion that is second to none when it comes to delivering the services needed to care for our
                  seniors and disabled clients who depend on us. Our goal is to ensure safety and overall quality care for
                  our clients. Blue Dove is committed to meeting the special needs of every patient in the comfort and
                  security of their home or assisted living.
                </p>

                <div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition-colors flex items-center gap-2 group">
                    READ MORE
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="lg:col-span-5  absolute w-96 right-10 top-[-30] ">
                <div className="bg-[#1B4C80] rounded-md p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">CLIENT REVIEWS</h2>

                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-6">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Client avatar"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>

                    <div className="text-center space-y-4">
                      <p className="text-base md:text-lg">
                        Was lucky enough to have Blue Dove for my in home physical therapy for the 1st three weeks after my
                        knee replacement. Sherif provided excellent physical therapy which increased my mobility.
                      </p>

                      <h3 className="text-xl md:text-2xl font-bold">Laura Badami</h3>

                      <div className="flex justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400 text-2xl">
                            ★
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center gap-2 mt-4">
                        {[1, 2, 3, 4].map((dot, index) => (
                          <span
                            key={dot}
                            className={`w-3 h-3 rounded-full ${index === 0 ? "bg-yellow-400" : "bg-white"}`}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </main>
        {/* Areas services */}
        <ServiceAreasAndCareers />
        {/* footer */}
        <footer className="bg-[#1B4C80] text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Company Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-48 mb-4">
                  <Image
                    src="/logo.png"
                    alt="Blue Dove Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <p className="text-center md:text-left text-sm italic mb-2">
                  Soaring To Provide The Best Quality of Care With Humility
                </p>
                <p className="text-center md:text-left text-lg font-semibold">A Medicare Certified Company</p>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h2>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> Home
                  </Link>
                  <Link href="/resources" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> Resources
                  </Link>
                  <Link href="/careers" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> Career Opportunities
                  </Link>
                  <Link href="/intake" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> Intake Form
                  </Link>
                  <Link href="/contact" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> Contact Us
                  </Link>
                  <Link href="/faq" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="mr-2">➔</span> FAQ's
                  </Link>
                </nav>
              </div>

              {/* Contact Detail with QR Code */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact Detail :</h2>
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-2 rounded-md">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="QR Code"
                    width={150}
                    height={150}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>703-361-1016</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>703-361-1018</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Link href="mailto:info@bluedove.com" className="hover:text-yellow-400 transition-colors">
                      E-mail Us
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p>8424 Dorsey Cir,</p>
                      <p>Manassas, VA 20110</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-4 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-2 md:mb-0">Copyright 2023 Blue Dove Home Health Services. | All Rights Reserved</p>
              <div className="flex items-center">
                <span className="text-sm mr-2">Powered By:</span>
                <div className="w-6 h-6 bg-white text-blue-800 flex items-center justify-center font-bold">W</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;











