import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    slug: "chronic-care",
    title: "MANAGEMENT OF CHRONIC CARE NEEDS",
    description:
      "At Blue Dove, we take pride in our commitment to excellence in the Management of Chronic Care Needs...",
    image: "/first.jpg",
    alignment: "left",
  },
  {
    slug: "home-health",
    title: "HOME HEALTH SERVICES",
    description:
      "Caring for your loved ones in the comfort of their homes, providing medical treatment...",
    image: "/meet.jpg",
    alignment: "right",
  },
  {
    slug: "private-duty-nursing",
    title: "PRIVATE DUTY SKILLED NURSING",
    description:
      "Our private duty skilled nursing services are designed to meet the unique needs of those requiring advanced medical care...",
    image: "/partner.jpg",
    alignment: "left",
  },
  {
    slug: "private-duty-home-health-aid",
    title: "Private Duty Home Health Aid",
    description:
      "We understand the importance of maintaining independence while receiving care at home...",
    image: "/new.jpg",
    alignment: "right",
  },
  {
    slug: "nursing-care",
    title: "Private Duty Skilled Nursing",
    description:
      "We recognize that some individuals require specialized care that goes beyond basic assistance...",
    image: "/nursing.jpg",
    alignment: "left",
  },
];

const Page = () => {
  return (
    <div>
      <main className="relative mt-5">
        {services.map((service, index) => (
          <section key={index} className="flex flex-col md:flex-row">
            {/* Conditionally Render Image First or Last */}
            {service.alignment === "right" && (
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-end">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">{service.title}</h1>
                <p className="text-gray-700 font-semibold">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="bg-[#1a4e7e] text-white py-3 px-6 inline-flex items-center justify-between w-48 hover:bg-[#15406a] transition-colors mt-4"
                >
                  <span className="font-medium">READ MORE</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            )}

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conditionally Render Text First or Last */}
            {service.alignment === "left" && (
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a4e7e] mb-4">{service.title}</h1>
                <p className="text-gray-700 font-semibold">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="bg-[#1a4e7e] text-white py-3 px-6 inline-flex items-center justify-between w-48 hover:bg-[#15406a] transition-colors mt-4"
                >
                  <span className="font-medium">READ MORE</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default Page;
