import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Inside() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/product/detail?id=" + id)
      .then((res) => {
        setProduct(res.data.data.data);
        console.log(res.data.data.data);
        
      });
  }, []);

  if (!product) {
    return <div>loading</div>
  }
  return (
    <div>
        <img width={150} src={product.large_images[0]} alt="" />
        <p>{product.brand}</p>
        <p>{product.name}</p>
    </div>
  );
}

export default Inside;
