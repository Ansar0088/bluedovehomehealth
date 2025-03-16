"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, CalendarDays, ChevronsRight } from "lucide-react"
import { useEffect, useState } from "react"

const OurCompanyPage=()=> {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
    <div className="flex mt-5 flex-col lg:flex-row bg-[#0e2c4b] text-white max-w-screen-2xl mx-auto">
      {/* Left content section */}
      <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lending A Helping Hand
            <br />
            When You Need It The Most
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base md:text-lg mb-6">
            We are committed to serving a culturally diverse community by providing timely and professional home health
            services with restorative and supportive services in the comfortable setting of the individual's home. At
            Blue Dove, we want our clients to feel valued, respected and loved in familiar surroundings to ensure their
            happiness.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-base md:text-lg mb-8">
            Blue Dove cares about the emotional and physical needs of those who entrusts their care with us. It brings
            us joy when our clients are happy and vibrantly living life to their fullest with dignity and in the comfort
            of their own home. We care deeply about our clients and work with family members to ensure special needs are
            taken care of without delay.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="#appointment"
            className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0e2c4b] transition-colors duration-300 font-medium px-6 py-3"
          >
            <span>MAKE AN APPOINTMENT</span>
            <CalendarDays className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      {/* Right image section */}
      <div className="w-full lg:w-2/5 relative">
        <div className="h-full">
          <Image
            src="/our-company.jpg"
            alt="Healthcare provider with client"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-orange-500 text-xl font-bold">ACCREDITED BY :</h3>
                <p className="text-orange-500 font-medium">Community Health Accreditation Program</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  src="/our-logo.png"
                  alt="CHAP Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* provise services section */}
    </div>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Services Section */}
        <div className={`w-full md:w-1/2 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-[#0F345B] mb-6">Below is a list of some of the services we provide:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Skilled Nursing</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Speech Therapy</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Wound Care</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Home Health Aides</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Intravenous Therapy</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Companion Aides</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Physical Therapy</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Social Workers</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-800 font-bold mr-2"><ChevronsRight /></span>
              <span className="font-semibold">Occupational Therapy</span>
            </div>
          </div>
        </div>
        
        {/* Mission Statement Section */}
        <div className={`w-full md:w-1/2 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-[#0F345B] mb-4">Mission Statement</h2>
          <p className="mb-8 font-semibold">
            Our mission is to provide excellent quality care with compassion, integrity and innovation with the goal of enhancing the quality of life of those entrusted in our care.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#0F345B] mb-4">Our Philosophy</h2>
          <p>
            Soaring to provide the best quality of care with humility.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}


export default OurCompanyPage