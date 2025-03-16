import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div>
      <main className="relative mt-5">
        {/* First Section - Chronic Care */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/first.jpg"
              alt="Healthcare professional assisting a patient"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">MANAGEMENT OF CHRONIC CARE NEEDS</h1>
            <p className="text-gray-700 mb-6 font-semibold">
              Welcome to Blue Dove Home Health Services, where we take pride in our commitment to excellence in the
              Management of Chronic Care Needs. At Blue Dove, we understand that individuals facing chronic health
              conditions require specialized and compassionate care to...
            </p>
            <a
              href="#"
              className="bg-[#1a4e7e] text-white py-3 px-6 inline-flex items-center justify-between w-48 hover:bg-[#15406a] transition-colors"
            >
              <span className="font-medium">READ MORE</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Second Section - Home Health Services */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center  text-end">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">HOME HEALTH SERVICES</h2>
            <p className="text-gray-700 font-semibold">
              Caring for your loved ones in the comfort of their <br />homes Home health Services provides medical<br /> treatment with the goal of helping you recover or regain your independence. Physicians and medical professionals agree that recuperating in the home <br />environment heightens...
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/meet.jpg"
              alt="Nurse assisting elderly patient in wheelchair"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Third Section - Private Duty Skilled Nursing */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/partner.jpg"
              alt="Nurse assisting elderly patient in wheelchair"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">PRIVATE DUTY SKILLED NURSING</h2>
            <p className="text-gray-700 mb-6">
              At Blue Dove Home Health Services, we recognize that some individuals require specialized care that goes
              beyond basic assistance. Our private duty skilled nursing services are designed to meet the unique needs of
              those who require advanced medical care and...
            </p>
            <a
              href="#"
              className="bg-[#1a4e7e] text-white py-3 px-6 inline-flex items-center justify-between w-48 hover:bg-[#15406a] transition-colors"
            >
              <span className="font-medium">READ MORE</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
        {/* four section */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center  text-end">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">Private Duty Home Health Aid</h2>
            <p className="text-gray-700 font-semibold">
              At Blue Dove Home Health Services, we understand<br /> the importance of maintaining independence and <br />dignity while receiving care in the comfort of your<br /> own home. Our private duty home health aid <br />services are designed to meet the unique needs<br /> of...
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/new.jpg"
              alt="Nurse assisting elderly patient in wheelchair"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        {/* five section */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/nursing.jpg"
              alt="Nurse assisting elderly patient in wheelchair"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">Private Duty Skilled Nursing</h2>
            <p className="text-gray-700 font-semibold">
              At Blue Dove Home Health Services, we recognize<br /> that some individuals require specialized care that<br /> goes beyond basic assistance. Our private duty <br />skilled nursing services are designed to meet<br /> the unique needs of those who require advanced<br /> medical care and...            </p>
          </div>

        </section>

      </main>
    </div>
  )
}

export default Page
