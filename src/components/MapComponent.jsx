import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Check if the Google Maps API script is already included
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    // Function to initialize the map
    window.initMap = function () {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
