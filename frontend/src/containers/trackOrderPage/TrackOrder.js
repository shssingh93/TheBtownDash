// src/containers/trackOrderPage/TrackOrder.js

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 0,
  lng: 0,
};

// Import the API key from the .env file
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function TrackOrder() {
  const [location, setLocation] = useState(center);

  useEffect(() => {
    // Use a static location for testing
    const staticLocation = {
      lat: 39.168804,
      lng: -86.536659,
    };
    setLocation(staticLocation);
  }, []);

  // useEffect(() => {
  //   // Fetch location data from the backend
  //   async function fetchLocation() {
  //     // Replace this with backend API call
  //     const response = await fetch("https://your-api-endpoint.com/location");
  //     const data = await response.json();
  //     setLocation(data.location);
  //   }
  //   fetchLocation();
  // }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default TrackOrder;
