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
        <div className="flex gap-20 justify-between">
          <div className="relative rounded-full w-full h-12">
            <input
              placeholder="Cari daerah ..."
              className=" border-2 border-[#FF7D29] px-5 rounded-full h-full w-full"
            />
            <button className="bg-[#FF7D29] absolute right-2 top-2 rounded-full h-8 w-8 flex items-center justify-center">
              <IoMdSearch className="size-5 text-white" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-10">
            {categoryButton.map((category) => (
              <button
                key={category}
                onClick={() => setIsActive(category)}
                className={`${
                  isActive === category ? "bg-[#FF7D29] text-white" : "border border-[#1918251A]"
                } px-4 py-2 m-0 rounded-full h-full text-nowrap`}
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
