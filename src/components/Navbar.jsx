import React from "react";
import FireIcon from "../icons/fire-stroke-rounded";
import ZapIcon from "../icons/zap-stroke-rounded (1)";

function Navbar() {
  const categories = [
    // "AKSIYALAR",
    // "1+1",
    "HAVO SOVUTGICHLAR",
    "ISITGICHLAR",
    "SMARTFONLAR",
    "MUZLATGICHLAR",
    "CHANGYUTGICHLAR",
    "NOUTBUKLAR",
    "TELEVIZORLAR",
    "BARCHA KATEGORIYALAR",
  ];
  return (
    <div className="bg-gray-100 p-2">
      <div className="container mx-auto">
        <div className="flex  px-10 justify-between p-2 ">
            <div className="flex gap-1 items-center font-semibold hover:text-blue-600">
                <FireIcon/>
                <p>AKSIYALAR</p>
            </div>
            <div className="flex gap-1 items-center font-semibold hover:text-blue-600">
                <ZapIcon/>
                <p>1+1</p>
            </div>
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-gray-800 font-semibold cursor-pointer hover:text-blue-600"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
