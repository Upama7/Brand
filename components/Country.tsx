import React, { useState } from "react";
import Brand from "./Brand";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Country = ({ regions, selectedRegion }: any) => {
  const [brands, setBrands] = useState<any>([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleToggleRegion = (id: any) => {
    if (selectedBrand === id) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(id);
    }
  };

  const handleChangeBrand = (id: any) => {
    regions.map((element: any) => {
      if (element.id === id) {
        setBrands(element.brand);
      }
    });
  };
  return (
    <div className="flex flex-col flex-wrap gap-4 md:gap-10">
      <div className="bg-gray-100 p-10 rounded-2xl flex flex-wrap  gap-4 md:gap-10 items-center ">
        {regions.map((r: any) => (
          <div key={r.id} className="flex items-center gap-6">
            <input
              type="checkbox"
              id={`${r.id}`}
              checked={selectedBrand === r.id}
              onChange={() => {
                handleChangeBrand(r.id);
                handleToggleRegion(r.id);
              }}
            />

            <label htmlFor={`${r.id}`} className="flex items-center">
              {r.name}
              {selectedBrand === r.id ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </label>
          </div>
        ))}
      </div>
      {selectedBrand && <Brand brands={brands} />}{" "}
    </div>
  );
};

export default Country;
