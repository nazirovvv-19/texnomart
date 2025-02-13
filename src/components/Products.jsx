import axios from "axios";
import React, { useEffect, useState } from "react";
import useSmthStore from "./myStore/store";
import { Link } from "react-router";
import Card from "./Cards";

function Products({  showLikedCard }) {
  const [mahsulotlar, setMahsulotlar] = useState();
  const { counter, count } = useSmthStore();
 
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setMahsulotlar(res.data.data.data);
      });
  }, []);





  
  if (!mahsulotlar) {
    return <div>loading...</div>;
  }
 

 
  console.log(counter);


  return (
    <div>
      <div className="container mx-auto px-5">
        <h1 className="text-2xl font-bold mt-6 px-5">Yangi mahsulotlar</h1>
        <div className="grid grid-cols-5 gap-10 mt-10 ">
          {mahsulotlar.map((item, index) => {
            console.log(item);
            
            return (
             <Card item={item} index={index} />
            );
          })}
        </div>


      
      </div>
     
    </div>
  );
}

export default Products;
