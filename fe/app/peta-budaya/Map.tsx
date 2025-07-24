"use client";

import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer className="rounded-md w-full h-96" center={[-0.7893, 113.9213]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
