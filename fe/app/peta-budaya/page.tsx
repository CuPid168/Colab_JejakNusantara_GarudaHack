"use client";

import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const PetaBudaya = () => {
  return (
    <div className="mt-15 mx-20 space-y-5">
      <h1 className="font-bold text-3xl">Peta Budaya</h1>
      <div className="rounded-lg gap-10 p-5 shadow-lg space-y-4">
        <Map />
        <input
          placeholder="Cari daerah ..."
          className="w-full border-2 border-[#FF7D29] px-5 rounded-full py-2"
        />
      </div>
    </div>
  );
};

export default PetaBudaya;
