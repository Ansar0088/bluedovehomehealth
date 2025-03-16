import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
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
                    <span className="mr-2">➔</span> FAQs
                  </Link>
                </nav>
              </div>

              {/* Contact Detail with QR Code */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-bold text-yellow-400 mb-4">Contact Detail :</h2>
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-2 rounded-md">
                  <Image
                    src="/qrcode.png"
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
                    <div className="w-10 h-10 rounded-full bg-[#053C76] flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>703-361-1016</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#053C76] flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>703-361-1018</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#053C76] flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <Link href="mailto:info@bluedove.com" className="hover:text-yellow-400 transition-colors">
                      E-mail Us
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#053C76] flex items-center justify-center mr-3">
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
  )
}

export default Footer
