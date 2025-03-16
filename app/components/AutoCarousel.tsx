"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar, Heart, Home, Shield } from "lucide-react"

type CarouselItem = {
  title: string
  subtitle?: string
  description?: string
  buttonText: string
  buttonLink: string
  image: string
  bgColor: string
  textColor: string
  buttonColor: string
}

const carouselItems: CarouselItem[] = [
  {
    title: "ENHANCING THE QUALITY OF LIFE OF THOSE ENTRUSTED IN OUR CARE IS OUR ULTIMATE GOAL",
    buttonText: "REQUEST AN APPOINTMENT",
    buttonLink: "#",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NHpfsQ8w0sCqNOSXjBOiWmxf7X8m21.png",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-[#1e3a8a]",
    buttonColor: "bg-[#1e4976] hover:bg-[#163a61]",
  },
  {
    title: "YOU CAN'T ALWAYS BE THERE, BUT WE CAN",
    description:
      "We offer holistic person-centred approach to keep seniors safe and sound at home, instead of anywhere else.",
    buttonText: "REQUEST AN APPOINTMENT",
    buttonLink: "#",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1c6EYmGH32cLDhXHcFL25iPsxepD8U.png",
    bgColor: "from-gray-50 to-gray-100",
    textColor: "text-[#1e3a8a]",
    buttonColor: "bg-[#1e4976] hover:bg-[#163a61]",
  },
  {
    title: "COMPASSIONATE CARE FOR YOUR LOVED ONES",
    description: "Our dedicated team provides personalized healthcare services with dignity and respect.",
    buttonText: "LEARN MORE",
    buttonLink: "#",
    image: "/placeholder.svg?height=400&width=800",
    bgColor: "from-indigo-50 to-purple-50",
    textColor: "text-indigo-900",
    buttonColor: "bg-indigo-700 hover:bg-indigo-800",
  },
]

const AutoCarousel=()=>{
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Auto-rotate carousel every 6 seconds
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % carouselItems.length)
        setIsAnimating(false)
      }, 700) // Wait for exit animation before changing slide
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative my-5 w-full overflow-hidden min-h-[800px] md:min-h-[500px]">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-700 bg-gradient-to-r",
            item.bgColor,
            activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="container h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4 md:px-8">
            <div className="space-y-6 order-2 md:order-1">
              <div
                className={cn(
                  "space-y-4 transition-all duration-1000 transform",
                  activeIndex === index && !isAnimating ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0",
                )}
              >
                <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-bold leading-tight", item.textColor)}>
                  {item.title}
                </h2>

                {item.description && (
                  <p className={cn("text-base md:text-lg opacity-90", item.textColor)}>{item.description}</p>
                )}

                <div
                  className={cn(
                    "transition-all duration-1000 delay-300 transform",
                    activeIndex === index && !isAnimating ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  <Button
                    className={cn(
                      item.buttonColor,
                      "text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300 transform hover:scale-105",
                    )}
                  >
                    <span>{item.buttonText}</span>
                    <Calendar className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "flex justify-center md:justify-end order-1 md:order-2 transition-all duration-1000 transform",
                activeIndex === index && !isAnimating
                  ? "translate-x-0 opacity-100 rotate-0"
                  : "translate-x-[-32px] opacity-0 rotate-3",
              )}
            >
              {item.image.startsWith("http") ? (
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover rounded-lg max-h-[300px] md:max-h-[400px] w-auto shadow-lg"
                />
              ) : (
                <div className="relative h-[300px] md:h-[400px] w-full max-w-[600px] rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 p-8">
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                        <Heart className="h-10 w-10 text-red-500 mb-2" />
                        <span className="text-sm font-medium text-gray-700">Compassionate Care</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                        <Shield className="h-10 w-10 text-blue-500 mb-2" />
                        <span className="text-sm font-medium text-gray-700">Safety First</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                        <Home className="h-10 w-10 text-green-500 mb-2" />
                        <span className="text-sm font-medium text-gray-700">Home Comfort</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                        <Calendar className="h-10 w-10 text-purple-500 mb-2" />
                        <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setTimeout(() => {
                setActiveIndex(index)
                setIsAnimating(false)
              }, 300)
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-primary w-6" : "bg-gray-400 hover:bg-gray-600",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default AutoCarousel
