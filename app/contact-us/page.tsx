"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Contact Details - Appears from Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1B4C80] text-white p-6 md:p-8 rounded-lg w-full md:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="mb-4">
            Get in touch with us for any medical-related questions and about our projects.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏠</span>
              <div>
                <p className="font-semibold">Address</p>
                <p>8424 Dorsey Cir, Manassas, VA 20110</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>703-361-1016</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📠</span>
              <div>
                <p className="font-semibold">FAX</p>
                <p>703-361-1018</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold">E-mail</p>
                <p>info@bluedovehomehealth.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form - Appears from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full md:w-2/3"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">GET IN TOUCH</h2>
          <p className="text-gray-700 mb-6">
            How workforce development programs turn talent puddles into talent pools, Hiring isn’t easy.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-md w-full"
            />

            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md w-full h-24"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-[#1B4C80] hover:text-white cursor-pointer text-gray-800 font-semibold py-3  px-6 rounded-xs  flex items-center gap-2"
            >
              SEND MESSAGE <Plane />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
