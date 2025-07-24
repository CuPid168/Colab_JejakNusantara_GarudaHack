"use client";

import { useState, useEffect } from "react";

interface Culture {
  provinsi: string;
  kategori: string;
  nama: string;
  deskripsi: string;
  // add other fields if needed
}

interface CultureDetailProps {
  allCulture: Culture[];
  selectedProvince: string;
  selectedCategory: string;
}

const CultureDetail = ({ allCulture, selectedProvince, selectedCategory }: CultureDetailProps) => {
  const cultureInOneProvince = allCulture.filter(
    (item) => item.provinsi === selectedProvince && item?.kategori === selectedCategory
  );

  const [selectedCulture, setSelectedCulture] = useState(cultureInOneProvince[0]);

  useEffect(() => {
    setSelectedCulture(cultureInOneProvince[0]);
  }, [selectedProvince || selectedCategory]);

  return (
    <div className="flex gap-5">
      <div className="border-black/10 rounded-lg p-7 flex-1/2 border flex flex-col gap-2">
        {cultureInOneProvince.length > 0 ? (
          cultureInOneProvince.map((culture, index) => (
            <label
              key={index + 1}
              className={`${
                selectedCulture && culture?.nama === selectedCulture?.nama ? "font-bold text-[#FF7D29]" : "text-black/50"
              } cursor-pointer text-lg`}
              onClick={() => setSelectedCulture(culture)}
            >
              {index + 1}. {culture?.nama}
            </label>
          ))
        ) : (
          <label>Tidak ada {selectedCategory} di daerah ini</label>
        )}
      </div>
      <div className="p-4 flex-1/2 border border-black/10 rounded-lg">
        <img src="images/ritual-seblang.png" alt="" className=""/>
        <h1 className="text-[#FF7D29] text-2xl font-bold mt-4">{selectedCulture?.nama}</h1>
        <p className="text-black/50 mt-2">{selectedCulture?.deskripsi}</p>
      </div>
    </div>
  );
};

export default CultureDetail;
