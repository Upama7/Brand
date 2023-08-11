"use client";

import React, { useState } from "react";

import Country from "./Country";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

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
    region: [{ id: "N", name: "Nepal", brand: ["iHREB"] }],
  },
  {
    id: "GC",
    name: "GCC",
    region: [{ id: "I", name: "India", brand: ["Kroger"] }],
  },
  {
    id: "SE",
    name: "South East Asia",
    region: [{ id: "C", name: "China", brand: ["Grailed"] }],
  },
  {
    id: "UK",
    name: "UK",
    region: [{ id: "L", name: "London", brand: ["Chewy", "Bestbuy"] }],
  },
];

const Region = () => {
  const [show, setShow] = useState(false);

  const [regions, setRegions] = useState<any>([]);

  const handleChangeRegion = (id: string) => {
    data.forEach((element) => {
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
      <div className=" flex flex-wrap  justify-between gap-5 py-6">
        {data.map((r, index) => (
          <div key={index} className="flex items-center gap-6">
            <input
              type="checkbox"
              id="region"
              name="region"
              onClick={() => {
                handleChangeRegion(r.id);
                setShow(!show);
              }}
            />
            <div className="flex items-center">
              <label htmlFor="region">{r.name}</label>
              {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
        ))}
      </div>

      {show && regions.length > 0 && (
        <Country Country={regions} regions={regions} />
      )}
    </div>
  );
};

export default Region;
