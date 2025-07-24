import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchCulture = ({
  selectedCategory,
  setSelectedCategory,
  hoveredProvince,
  setHoveredProvince,
  searchTerm,
  setSearchTerm,
  isDropdownOpen,
  setIsDropdownOpen,
  setSelectedProvince,
  provincesList,
  dropdownRef,
}) => {
  const categoryButton = ["Budaya", "Makanan Daerah", "Tempat Wisata", "Alat Musik"];

  const filteredProvinces = provincesList.filter((province) =>
    province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex gap-20 justify-between">
      <div ref={dropdownRef} className="relative rounded-full w-full h-12">
        <input
          placeholder="Cari daerah ..."
          className="border-2 border-[#FF7D29] px-10 rounded-full h-full w-full"
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);

            // Kalau ada kecocokan, buka dropdown
            const hasMatch = provincesList.some((province) =>
              province.toLowerCase().includes(value.toLowerCase())
            );
            setIsDropdownOpen(hasMatch);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && filteredProvinces.length > 0) {
              setSelectedProvince(filteredProvinces[0]);
              setIsDropdownOpen(false);
              setSearchTerm(filteredProvinces[0]);
              setHoveredProvince(null);
            }
          }}
          onFocus={() => {
            setIsDropdownOpen(true);
            if (searchTerm !== "") {
              setSearchTerm("");
            }
          }}
        />
        <button
          type="button"
          className="cursor-pointer absolute left-2 top-2 flex items-center"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <RiArrowDropDownLine
            className={`${isDropdownOpen ? "rotate-180" : ""} size-8 transition-transform text-gray-500`}
          />
        </button>
        <button className="cursor-pointer bg-[#FF7D29] absolute right-2 top-2 rounded-full h-8 w-8 flex items-center justify-center">
          <IoMdSearch
            onClick={() => {
              const matched = filteredProvinces[0];
              if (matched) {
                setSelectedProvince(matched);
                setSearchTerm(matched);
                setIsDropdownOpen(false);
                setHoveredProvince(null);
              }
            }}
            className="size-5 text-white"
          />
        </button>

        {isDropdownOpen && (
          <ul className="absolute top-14 z-10 bg-white rounded-lg shadow-md w-full max-h-60 overflow-y-auto p-2 grid grid-cols-2 gap-1">
            {filteredProvinces.length === 0 ? (
              <li className="col-span-2 text-center py-2 text-gray-400">Tidak ditemukan</li>
            ) : (
              filteredProvinces.map((province, index) => {
                const isOnlyOne = filteredProvinces.length === 1;
                const isHovered = hoveredProvince === province;
                const isDefaultHighlighted = !hoveredProvince && index === 0 && searchTerm !== "";
                const selectedCategory = isHovered || isDefaultHighlighted;

                return (
                  <li
                    key={province}
                    className={`px-4 py-2 cursor-pointer transition-colors rounded-md ${
                      isOnlyOne ? "col-span-2 text-center" : ""
                    } ${selectedCategory ? "bg-[#FF7D29] text-white" : "hover:bg-[#FF7D29] hover:text-white"}`}
                    onMouseEnter={() => setHoveredProvince(province)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    onClick={() => {
                      setSelectedProvince(province);
                      setIsDropdownOpen(false);
                      setSearchTerm(province);
                      setHoveredProvince(null);
                    }}
                  >
                    {province}
                  </li>
                );
              })
            )}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-center gap-10">
        {categoryButton.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category ? "bg-[#FF7D29] text-white" : "border border-[#1918251A]"
            } px-4 py-2 rounded-full text-nowrap`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchCulture;
