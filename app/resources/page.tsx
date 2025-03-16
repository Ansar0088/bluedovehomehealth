"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const sections = [
    {
        id: 1,
        title: "Career Opportunities",
        description:
            "Blue Dove is always looking for highly qualified health professionals to provide the best client care. We constantly accept applications for Registered Nurses, Physical Therapists, Occupational Therapists, Speech Therapists, and more.",
        image: "/career-opportunity.png",
        link: "/careers",
        alt: "We are hiring sign next to a laptop",
        reverse: false,
    },
    {
        id: 2,
        title: "Insurance and Medicare",
        description:
            "Insurance and Medicare at Blue Dove Home Health Services, we are dedicated to providing superior healthcare with a focus on personalized services. We proudly accept a variety of health insurance options.",
        image: "/other-things.jpg",
        link: "/insurance",
        alt: "Healthcare professional consulting with patients",
        reverse: false,
    },
    {
        id: 3,
        title: "Personalized Home Care",
        description:
            "At Blue Dove, we provide compassionate, personalized home care services tailored to the unique needs of each patient. Our expert caregivers ensure a high standard of health and comfort.",
        image: "/compliance.png",
        link: "/home-care",
        alt: "Caregiver assisting a senior at home",
        reverse: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const Page = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="my-5">
            <p className="text-3xl"> Resources
            </p>
            <p className="font-normal mt-3">At Blue Dove, we offer more than home health services. We provide compassionate medical care and pain <br/>management, as well as emotional and spiritual support to patients and their loved ones. Provided wherever a patient calls home,
            </p>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col space-y-12 mt-5"
            >
                {sections.map((section) => (
                    <motion.div
                        key={section.id}
                        variants={itemVariants}
                        className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""
                            } gap-8 items-center overflow-hidden`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-2/5 lg:w-1/3">
                            <Image
                                src={section.image}
                                alt={section.alt}
                                width={500}
                                height={375}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-3/5 lg:w-2/3 p-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gray-700 mb-6">{section.description}</p>
                            {/* <Link href={section.link}> */}
                            <motion.div
                                className=" w-fit  gap-2 flex bg-yellow-400 hover:bg-[#1B4C80] hover:text-white text-gray-800 font-semibold py-2 px-6  transition-colors duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                READ MORE <MoveRight />
                            </motion.div>
                            {/* </Link> */}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Page;
