import React, { useState } from "react";
import Location01Icon from "../icons/location";
import EarthIcon from "../icons/earth-stroke-rounded";

function Header() {
  const [language, setlanguage] = useState(false);
  return (
    <div className="bg-gray-900 ">
      <div className="container mx-auto">
        <div className="py-2 px-10 text-sm text-white flex justify-between">
          <div className="flex justify-between items-center w-[540px]">
            <div className="flex items-center gap-1 ">
              <Location01Icon />
              <p>Toshkent</p>
            </div>
            <p>Bizning dokonlarimiz</p>
            <p className="bg-gray-400 rounded-md px-2">
              Yurudik shaxslar uchun
            </p>
            <p>Tolov usullari </p>
          </div>
          <div className="flex justify-between w-[350px]">
            <p>
              aloqa markazi{" "}
              <span className="text-xl font-bold ">+99871 777 77 77</span>
            </p>
            <div
              onMouseMove={() => {
                setlanguage(true);
              }}
              onMouseLeave={() => {
                setlanguage(false);
              }}
              className="flex items-center relative gap-2 border-1 rounded-xl border-white px-2"
            >
              <EarthIcon />
              <p>UZ </p>
            </div>
            {language && (
              <div className="absolute top-10 right-8 bg-white w-20 text-center text-black rounded-md border-black border-1 z-20">
                <p>UZ</p>
                <p>RU</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
