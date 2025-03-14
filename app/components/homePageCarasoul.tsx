"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const HomePageCarasoul = () => {
    const [activeTab, setActiveTab] = useState("chronic")

    const tabs = [
        { id: "chronic", label: "MANAGEMENT OF CHRONIC CARE NEEDS" },
        { id: "home", label: "HOME HEALTH SERVICES" },
        { id: "partnership", label: "BUILDING PARTNERSHIP" },
    ]

    const slides = [
        {
            id: 1,
            title: "Pain Management",
            image: "/card-one.jpg",
            alt: "Healthcare professional helping elderly patient with pain management",
            description:
                "At Blue Dove Home Health Services we understand that chronic pain can be debilitating. Our pain management services help patients improve their quality of life.",
        },
        {
            id: 2,
            title: "Diabetic Management and Care",
            image: "/card-one.jpg",
            alt: "Healthcare professional with diabetic patient",
            description:
                "Our specialized diabetic care program helps patients manage their condition effectively with personalized treatment plans and education.",
        },
        {
            id: 3,
            title: "Rehabilitation",
            image: "/card-one.jpg",
            alt: "Rehabilitation session with healthcare professional",
            description:
                "Our rehabilitation services are designed to help patients regain independence and improve their functional abilities after illness or injury.",
        },
        {
            id: 4,
            title: "Care of Patient with COPD",
            image: "/card-one.jpg",
            alt: "Healthcare professional caring for COPD patient",
            description:
                "At Blue Dove Home Health Services we understand that Living with Chronic Obstructive Pulmonary Disease (COPD) is stressful for patients and their families.",
        },
        {
            id: 5,
            title: "Care of Patient with COPD",
            image: "/card-one.jpg",
            alt: "Healthcare professional caring for COPD patient",
            description:
                "At Blue Dove Home Health Services we understand that Living with Chronic Obstructive Pulmonary Disease (COPD) is stressful for patients and their families.",
        },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row relative">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-3 text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 ${activeTab === tab.id
                                ? "bg-white text-[#1B4C80] border-t-4 rounded-tl-xl rounded-tr-xl border-l-2 border-r-2 border-blue-800 relative z-10"
                                : " text-black"
                            } ${index === 0 ? "sm:ml-10" : ""}`}
                    >
                        {tab.label}
                    </button>
                ))}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-800"></div>
            </div>

            {/* Tab Content */}
            <div className="mt-8 px-4">
                {/* Chronic Care Tab */}
                {activeTab === "chronic" && (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {slides.map((slide) => (
                                <CarouselItem key={slide.id} className="md:basis-1/2 lg:basis-1/4">
                                    <div className="p-2">
                                        <div className="relative group overflow-hidden rounded-md">
                                            <div className="relative h-64 w-full">
                                                <Image
                                                    src={slide.image || "/placeholder.svg"}
                                                    alt={slide.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                />
                                                <div className="absolute inset-0 bg-blue-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                                    <p className="text-white text-center">{slide.description}</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <h3 className="text-center font-semibold text-lg">{slide.title}</h3>
                                                <div className="h-1 w-full bg-yellow-400 mt-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                )}

                {/* Home Health Services Tab */}
                {activeTab === "home" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                        <div className="relative h-72 md:h-full">
                            <Image
                                src="/card.png"
                                alt="Home Health Services"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">HOME HEALTH SERVICES</h2>
                            <p className="text-gray-700 mb-6">
                                Our comprehensive home health services are designed to provide quality care in the comfort of your home.
                                We offer personalized care plans tailored to meet your specific health needs.
                            </p>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center w-fit">
                                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Building Partnership Tab */}
                {activeTab === "partnership" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                        <div className="relative h-72 md:h-full">
                            <Image
                                src="/card.png"
                                alt="Building Partnership"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">BUILDING PARTNERSHIP</h2>
                            <p className="text-gray-700 mb-6">
                                Blue Dove Home Health Services build partnerships with: Hospitals Hospice Healthcare Organizations
                                Infusion Companies Community Schools
                            </p>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center w-fit">
                                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePageCarasoul