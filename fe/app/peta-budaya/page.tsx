"use client";

import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import SearchCulture from "./SearchCulture";
import CultureDetail from "./CultureDetail";
import allCulture from "./allculture";

const Map = dynamic(() => import("./Map"), { ssr: false });

const PetaBudaya = () => {
  const [selectedCategory, setSelectedCategory] = useState("Budaya");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("Aceh");
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");  
  const cultureInOneProvince = allCulture.filter(
    (item) => item.provinsi === selectedProvince && item?.kategori === selectedCategory
  );
  const [selectedCulture, setSelectedCulture] = useState(cultureInOneProvince[0]);

  const provincesList = [
    "Aceh",
    "Bali",
    "Banten",
    "Bengkulu",
    "Daerah Istimewa Yogyakarta",
    "Gorontalo",
    "Jambi",
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Kalimantan Barat",
    "Kalimantan Selatan",
    "Kalimantan Tengah",
    "Kalimantan Timur",
    "Kalimantan Utara",
    "Kepulauan Bangka Belitung",
    "Kepulauan Riau",
    "Lampung",
    "Maluku",
    "Maluku Utara",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Papua",
    "Papua Barat",
    "Papua Barat Daya",
    "Papua Pegunungan",
    "Papua Selatan",
    "Papua Tengah",
    "Riau",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tengah",
    "Sulawesi Tenggara",
    "Sulawesi Utara",
    "Sumatra Barat",
    "Sumatra Selatan",
    "Sumatra Utara",
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setHoveredProvince(null);
        if (searchTerm.trim() === "") {
          setSearchTerm(selectedProvince);
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, selectedProvince]);

  return (
    <div className="mt-10 mx-25 space-y-5">
      <h1 className="font-bold text-3xl">Peta Budaya</h1>
      <div className="rounded-lg gap-10 p-3 shadow-md space-y-4">
        <Map allCulture={allCulture} />
        <SearchCulture
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          hoveredProvince={hoveredProvince}
          setHoveredProvince={setHoveredProvince}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          setSelectedProvince={setSelectedProvince}
          provincesList={provincesList}
          selectedCulture={selectedCulture}
          setSelectedCulture={setSelectedCulture}
          cultureInOneProvince={cultureInOneProvince}
          dropdownRef={dropdownRef}
        />
      </div>
      <CultureDetail
        allCulture={allCulture}
        selectedProvince={selectedProvince}
        selectedCategory={selectedCategory}
        selectedCulture={selectedCulture}
        setSelectedCulture={setSelectedCulture}
      />
    </div>
  );
};

export default PetaBudaya;
