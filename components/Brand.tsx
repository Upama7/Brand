import React from "react";

const Brand = ({ brands }: any) => {
  return (
    <div className="bg-gray-100 p-10 rounded-2xl flex flex-wrap gap-4 md:gap-10 items-center ">
      {brands.map((b: any, index: any) => (
        <div key={index} className="flex items-center gap-6">
          <input type="checkbox" id="brand" name="brands" />
          <div className="flex items-center">
            <label htmlFor="brand">{b}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
