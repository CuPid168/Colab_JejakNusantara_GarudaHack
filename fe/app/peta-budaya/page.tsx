"use client";

import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { IoMdSearch } from "react-icons/io";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const PetaBudaya = () => {
  const [isActive, setIsActive] = useState("Budaya");
  const categoryButton = ["Budaya", "Makanan Daerah", "Tempat Wisata", "Alat Musik"];

  return (
    <div className="mt-10 mx-25 space-y-5 mb-96">
      <h1 className="font-bold text-3xl">Peta Budaya</h1>
      <div className="rounded-lg gap-10 p-3 shadow-md space-y-4">
        <Map />
        <div className="flex gap-4">
          <input
            placeholder="Cari daerah ..."
            className="w-full border-2 border-[#FF7D29] px-5 rounded-full py-2"
          />
          <div>
            {categoryButton.map((category) => (
              <button
                key={category}
                onClick={() => setIsActive(category)}
                className={`${isActive ? "bg-[#FF7D29]" : "border border-[#1918251A]"} p-2`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetaBudaya;
