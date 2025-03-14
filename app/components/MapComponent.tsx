"use client";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents running on the server

    const fixLeafletIcon = () => {
      const iconDefault = L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void };
      if (iconDefault._getIconUrl) {
        delete iconDefault._getIconUrl;
      }

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });
    };

    fixLeafletIcon();

    if (mapRef.current && !leafletMap.current) {
      const mapContainer = mapRef.current;
      const center: [number, number] = [38.9072, -77.0369];

      const map = L.map(mapContainer).setView(center, 9);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const locations = [
        { lat: 38.9072, lng: -77.0369, title: "Washington DC" },
        { lat: 39.2904, lng: -76.6122, title: "Baltimore" },
        { lat: 38.9784, lng: -76.4922, title: "Annapolis" },
        { lat: 38.8051, lng: -77.047, title: "Alexandria" },
        { lat: 38.7849, lng: -76.8721, title: "Waldorf" },
      ];

      const redCircleIcon = L.divIcon({
        className: "custom-div-icon",
        html: `<div style="background-color:#ff0000;width:12px;height:12px;border-radius:50%;"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng], {
          icon: redCircleIcon,
          title: location.title,
        }).addTo(map);
        marker.bindPopup(location.title);
      });

      leafletMap.current = map;
      setMapLoaded(true);

      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });

      resizeObserver.observe(mapContainer);

      return () => {
        resizeObserver.unobserve(mapContainer);
        map.remove();
        leafletMap.current = null;
      };
    }
  }, []);

  return (
    <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] border border-gray-300 relative">
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p>Loading map...</p>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full z-0" aria-label="Map showing our service areas" />
    </div>
  );
}
