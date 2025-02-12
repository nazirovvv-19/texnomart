import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories() {
  const [products, setProsducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/home/special-categories")
      .then((res) => {
        // console.log(res.data.data.data);
        setProsducts(res.data.data.data.slice(0,8));
      });
  }, []);
  if (!products) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full px-10 mt-5">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <p className="absolute text-sm  z-10 ml-3 mt-2">{item.title}</p>
              <img className="relative" width={170} src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
