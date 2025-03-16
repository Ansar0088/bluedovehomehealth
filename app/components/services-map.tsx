'use client'

import React, { useState, useEffect } from 'react';
import { Maximize, Plus, Minus } from 'lucide-react';

const ServicesMap = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle fullscreen toggle
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

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-full mt-10">
      
      <div className="relative">
        <div
          id="map-container"
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-gray-200"
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
    </div>
  );
};

export default ServicesMap;