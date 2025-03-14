"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { src: "/doctor.png", alt: "Slide 1", text: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL" },
  { src: "/doctor.png", alt: "Slide 1", text: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL" },
  { src: "/doctor.png", alt: "Slide 1", text: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL" },
  { src: "/doctor.png", alt: "Slide 1", text: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL" },
  { src: "/doctor.png", alt: "Slide 1", text: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL" },
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full overflow-hidden"
    >
      <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.8s ease-in-out" }}>
        {images.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="flex items-center justify-between py-5 flex-wrap gap-4 sm:flex-nowrap">
              <div >
                <h2 className="text-3xl font-bold w-[550px]">{item.text}</h2>
              </div>
              <div>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1400}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AutoCarousel;
