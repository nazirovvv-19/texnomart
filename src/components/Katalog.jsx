import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router";
import Nav_wrp from "./Nav_wrp";
import Card from "./Cards";

function Katalog() {
  const { slug } = useParams();
  console.log(slug);

  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts();
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/category/popular-categories?slug=${slug}`
      )
      .then((res) => {
        console.log(res.data.data.interestingProducts);

        setProducts(res.data.data.interestingProducts);
      })
      .catch((e) => {
        alert("Xatolik");
      });
  }, [slug]);
  if (!products) {
    return <div>loading...</div>;
  }

  return (
    <div className="container mx-auto">
      {/* <Nav_wrp/> */}
      <div className="grid grid-cols-4 gap-4 mt-10 text-center ">
        {products.map((item) => {
          return (
           
              <Card item={item} />
          );
        })}
       
      </div>
    </div>
  );
}

export default Katalog;
