"use client"; // Not sure what this line is for, you might want to remove it or provide more context.

import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";

// category selection section
const category = [
  { n: "Bed Supplies" },
  { n: "Home and Kitchen" },
  { n: "Computer" },
  { n: "Laptop" },
  { n: "Web Development" },
];

const Category = () => {
  const [show, setShow] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<any>([
    "Bed Supplies",
  ]);

  const handleChange = () => {
    setShow(!show);
  };

  const handleAddNewArray = (n: any) => {
    setSelectedCategories([...selectedCategories, n]);
  };

  const handleRemoveCategory = (n: any) => {
    setSelectedCategories(
      selectedCategories.filter((category: any) => category !== n)
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto p-10 lg:p-0  flex flex-col gap-4">
      <h1>Category</h1>
      <div className=" md:w-[40vw] flex flex-col gap-4">
        <div className="bg-gray-100  p-6 rounded-2xl flex justify-between items-center gap-4">
          {/* map selected category  */}
          <div className="flex flex-wrap items-center gap-4 text-white">
            {selectedCategories.map((category: any, index: any) => (
              <div
                key={index}
                className="flex items-center bg-indigo-600 rounded-full px-2 text-white text-[14px]"
              >
                {category}

                {/* delete category when clicked x  */}
                <RiCloseLine
                  onClick={() => handleRemoveCategory(category)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* onclick change arrow  */}
          <div onClick={handleChange}>
            {show ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </div>
        </div>
        {/* Show categories only if `show` is true */}
        {!show && (
          <div>
            {category.map((c, index) => (
              <div
                key={index}
                className="cursor-pointer border-[1px] p-1 rounded-md"
                onClick={() => handleAddNewArray(c.n)}
              >
                {c.n}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
