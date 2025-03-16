import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronUp } from "lucide-react";
import AutoCarousel from "../components/AutoCarousel";
import AreaService from "../components/area-services";
import HomePageCarasoul from "../components/homePageCarasoul";

const HomePage = () => {

  return (
    <div >
      <div className=" mx-auto">

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
                  Blue Dove CEO has over 35 years of experience as a registered nurse. She has been involved in many
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
          // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </main>
        {/* Areas services */}
        <AreaService />

      </div>
    </div>
  );
};

export default HomePage;











