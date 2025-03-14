"use client"
import { useState, useEffect, useRef } from "react"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

export default function ServiceAreasAndCareers() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const leafletMap = useRef<L.Map | null>(null)

  useEffect(() => {
    // Fix for Leaflet icon issues in Next.js
    const fixLeafletIcon = () => {
      // Only run on client side
      if (typeof window !== "undefined") {
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl

        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })
      }
    }

    fixLeafletIcon()

    // Initialize map only if it doesn't exist yet
    if (mapRef.current && !leafletMap.current) {
      // Center coordinates (Washington DC area)
      const center: [number, number] = [38.9072, -77.0369]

      // Create map
      const map = L.map(mapRef.current).setView(center, 9)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Service area locations
      const locations = [
        { lat: 38.9072, lng: -77.0369, title: "Washington DC" },
        { lat: 39.2904, lng: -76.6122, title: "Baltimore" },
        { lat: 38.9784, lng: -76.4922, title: "Annapolis" },
        { lat: 38.8051, lng: -77.047, title: "Alexandria" },
        { lat: 38.7849, lng: -76.8721, title: "Waldorf" },
      ]

      // Custom red circle icon
      const redCircleIcon = L.divIcon({
        className: "custom-div-icon",
        html: `<div style="background-color:#ff0000;width:12px;height:12px;border-radius:50%;"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      })

      // Add markers for each location
      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: redCircleIcon,
          title: location.title,
        }).addTo(map)

        // Add popup for each marker
        marker.bindPopup(location.title)
      })

      // Store map reference
      leafletMap.current = map
      setMapLoaded(true)

      // Resize map when container size changes
      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })

      if (mapRef.current) {
        resizeObserver.observe(mapRef.current)
      }

      // Cleanup
      return () => {
        if (mapRef.current) {
          resizeObserver.unobserve(mapRef.current)
        }
        map.remove()
        leafletMap.current = null
      }
    }
  }, [])

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-[#1a4e7c] mb-8">AREAS WE SERVE</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map Container */}
          <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] border border-gray-300 relative">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p>Loading map...</p>
              </div>
            )}
            <div ref={mapRef} className="w-full h-full z-0" aria-label="Map showing our service areas" />
          </div>

          {/* Career Opportunities */}
          <div className="w-full lg:w-1/3 bg-[#1a4e7c] text-white p-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">CAREER OPPORTUNITIES</h2>
            <p className="text-center mb-8">CLICK ON ANY POSITION TO VIEW MORE DETAILS AND APPLY ONLINE</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded flex items-center gap-2">
              JOIN OUR TEAM <Users className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

