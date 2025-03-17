import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Simulating async data fetching
async function getServiceData(slug: string) {
  const serviceData: Record<string, { title: string; description: string; image: string }> = {
    "chronic-care": {
      title: "Management of Chronic Care Needs",
      description:
        "At Blue Dove, we provide specialized and compassionate care for individuals with chronic health conditions...",
      image: "/first.jpg",
    },
    "home-health": {
      title: "Home Health Services",
      description:
        "Caring for your loved ones in the comfort of their homes, providing medical treatment...",
      image: "/meet.jpg",
    },
    "private-duty-nursing": {
      title: "Private Duty Skilled Nursing",
      description:
        "Our private duty skilled nursing services are designed to meet the unique needs of those requiring advanced medical care...",
      image: "/partner.jpg",
    },
    "private-duty-home-health-aid": {
      title: "Private Duty Home Health Aid",
      description:
        "We understand the importance of maintaining independence while receiving care at home...",
      image: "/new.jpg",
    },
    "nursing-care": {
      title: "Private Duty Skilled Nursing",
      description:
        "We recognize that some individuals require specialized care that goes beyond basic assistance...",
      image: "/nursing.jpg",
    },
  };

  return serviceData[slug] || null;
}

export default async function ServiceDetails({ params }: Props) {
  const { slug } = await params; // Await params if it’s a Promise
  const service = await getServiceData(slug);

  if (!service) {
    return notFound(); // Show 404 if slug doesn't match any service
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Back Button */}
      <Link
        href="/services"
        className="inline-flex items-center text-white bg-[#1a4e7e] px-4 py-2 rounded-xs shadow-md hover:bg-[#15406a] transition-all"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to services
      </Link>

      {/* Service Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mt-6 shadow-xl">
        <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Service Content */}
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 mt-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-[#1a4e7e] mb-4">{service.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
