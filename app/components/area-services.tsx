'use client'

import React, { useState, useEffect } from 'react';
import { Maximize, Plus, Minus, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AreaService = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFullscreen = () => {
    const mapElement = document.getElementById('map-container');
    
    if (!document.fullscreenElement) {
      if (mapElement?.requestFullscreen) {
        mapElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="w-full px-4 md:px-8 py-8 bg-white">
      <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">AREAS WE SERVE</h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map container */}
        <div className="flex-1">
          <div
            id="map-container"
            className="relative w-full  md:h-[500px] lg:h-[400px] rounded-lg overflow-hidden border border-gray-200"
          >
            {isClient && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777367.8864581011!2d-77.70990776406044!3d38.89655513868886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1710863403517!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            
            {/* Map controls */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button 
                onClick={toggleFullscreen}
                className="bg-white rounded-md p-2 shadow-md hover:bg-gray-100"
                aria-label="Toggle fullscreen"
              >
                <Maximize size={20} />
              </button>
              
              <button 
                className="bg-white rounded-md p-2 shadow-md hover:bg-gray-100"
                aria-label="Zoom in"
              >
                <Plus size={20} />
              </button>
              
              <button 
                className="bg-white rounded-md p-2 shadow-md hover:bg-gray-100"
                aria-label="Zoom out"
              >
                <Minus size={20} />
              </button>
            </div>
            
            {/* Map attribution */}
            <div className="absolute bottom-0 right-0 bg-white bg-opacity-70 text-xs p-1">
              <span className="mr-1">MapPress</span>
              <span className="mr-1">|</span>
              <span>© OpenStreetMap</span>
            </div>
          </div>
        </div>
        
        {/* Career opportunities container */}
        <div className="lg:w-[450px] xl:w-[500px]">
          <div className="h-full bg-[#1e3a8a] text-white p-8 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-4 text-center">CAREER<br/> OPPORTUNITIES</h2>
            <p className="text-center text-xl mb-10">CLICK ON ANY POSITION TO VIEW MORE DETAILS AND APPLY ONLINE</p>
            
            <Link href="#jobs" className="bg-[#f59e0b] hover:bg-white text-black font-bold py-3 px-6 rounded-xs flex items-center justify-center transition-colors duration-200">
              JOIN OUR TEAM 
              <span className="ml-2 inline-flex"><Users /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaService;
