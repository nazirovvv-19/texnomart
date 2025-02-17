import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router";
import Nav_wrp from "./Nav_wrp";
import Card from "./Cards";
import { Button } from "antd";
import InsideNav from "./InsideNav";

function Katalog() {
  const { slug } = useParams();
  console.log(slug);

  const [productsState, setProductsState] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setProductsState();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data.data);

        setProductsState(res.data.data);
      })
      .catch((e) => {
        alert("Xatolik");
      });
  }, [slug, currentPage]);
  if (!productsState) {
    return <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
    <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
  </div>;
  }

  return (
    <div className="container mx-auto px-10">
      <InsideNav/>
      <div className="grid grid-cols-4 gap-4 mt-10 text-center ">
        {productsState.products.map((item) => {
          return <Card item={item} />;
        })}
      </div>
      <div className="flex justify-center gap-3 mt-10  ">
        {Array(productsState.pagination.total_page)
          .fill(1)
          .map((_, i) => {
            const page = i + 1;
            return <Button onClick={()=>{
              setCurrentPage(page)
            }} type={currentPage===page ? "primary":"default"}>{i+1}</Button>
          })}
      </div>
    </div>
  );
}

export default Katalog;
