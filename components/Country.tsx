import React, { useState } from "react";
import Brand from "./Brand";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Country = ({
  Country,

  regions,
}: any) => {
  const [brands, setBrands] = useState<any>([]);
  const [showRegion, setShowRegion] = useState(false);

  const handleChangeBrand = (id: any) => {
    for (let region of regions) {
      if (region.id == id) {
        setBrands(region.brand);
      }
    }
  };
  return (
    <div className="flex flex-col flex-wrap gap-4 md:gap-10">
      <div className="bg-gray-100 p-10 rounded-2xl flex flex-wrap  gap-4 md:gap-10 items-center ">
        {Country.map((c: any, index: any) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id="brand"
              name="brand"
              onClick={() => {
                handleChangeBrand(c.id);
                setShowRegion(!showRegion);
              }}
            />
            <label htmlFor="scales">{c.name}</label>
          </div>
        ))}
      </div>
      {showRegion && brands.length > 0 && <Brand brands={brands} />}
    </div>
  );
};

export default Country;
