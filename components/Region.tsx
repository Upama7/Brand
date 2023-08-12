"use client";

import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Country from "./Country";

// data
const data = [
  {
    id: "NA",
    name: "North America ",
    region: [
      { id: "U", name: "USA", brand: ["Amazon", "Americans"] },
      { id: "C", name: "Canada", brand: ["Ebay"] },
      { id: "M", name: "Mexico", brand: ["Costco", "Etsy"] },
    ],
  },
  {
    id: "EU",
    name: "Europe ",
    region: [
      { id: "G", name: "Germay", brand: ["iHREB", "Ebay"] },
      { id: "F", name: "France", brand: ["Chewy"] },
      { id: "I", name: "Italy", brand: ["Kroger"] },
    ],
  },
  {
    id: "GC",
    name: "GCC",
    region: [
      { id: "S", name: "Saudi Arabia", brand: ["Kroger"] },
      {
        id: "K",
        name: "Kuwait",
        brand: ["Grailed", "Chewy", "Bestbuy"],
      },
    ],
  },
  {
    id: "SE",
    name: "South East Asia",
    region: [
      { id: "I", name: "Indonesia", brand: ["Grailed"] },
      { id: "P", name: "Philipphines", brand: ["Apple", "Dell", "Lenovo"] },
    ],
  },
  {
    id: "UK",
    name: "UK",
    region: [
      { id: "E", name: "England", brand: ["Chewy", "Bestbuy"] },
      {
        id: "S",
        name: "Scotland",
        brand: ["Huawei"],
      },
    ],
  },
];

const Region = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [regions, setRegions] = useState<any>([]);

  // toggle up and down arrow
  const handleToggleRegion = (id: any) => {
    if (selectedRegion === id) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(id);
    }
  };

  // for region display
  const handleChangeRegion = (id: string) => {
    data.map((element) => {
      if (element.id === id) {
        setRegions(element.region);
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto p-10 lg:p-0 flex flex-col gap-4">
      <h1 className="text-[16px] font-semibold">
        Select Regions & Marketplace you live in:
      </h1>
      <h2 className="text-[14px]">Select Regions:</h2>
      <div className="flex flex-wrap justify-between gap-5 py-6">
        {data.map((e) => (
          <div key={e.id} className="flex items-center gap-6">
            <input
              type="checkbox"
              id={`e-${e.id}`}
              checked={selectedRegion === e.id}
              onChange={() => {
                handleChangeRegion(e.id);
                handleToggleRegion(e.id);
              }}
            />

            <label htmlFor={`e-${e.id}`} className="flex items-center">
              {e.name}
              {selectedRegion === e.id ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </label>
          </div>
        ))}
      </div>

      {/* show country if there is selectedRegion  */}
      {selectedRegion && (
        <Country
          key={regions.id}
          regions={regions}
          selectedRegion={selectedRegion}
        />
      )}
    </div>
  );
};

export default Region;
