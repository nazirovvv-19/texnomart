import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router";
import Nav_wrp from "./Nav_wrp";
import Card from "./Cards";
import { Button } from "antd";
// import InsideNav from "./InsideNav";
import useSmthStore from "./myStore/store";
import ChangeSort from "./ChangeSort";
import Sidebar from "./Sidebar";

function Katalog() {
  const { slug } = useParams();
  console.log(slug);

  const [productsState, setProductsState] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const state = useSmthStore();
  useEffect(() => {
    setProductsState();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=${
          state.tartibi ? "-" : ""
        }${state.currentSort}&page=${currentPage}`
      )
      .then((res) => {
        console.log(res.data.data);

        setProductsState(res.data.data);
      })
      .catch((e) => {
        alert("Xatolik");
      });
  }, [slug, currentPage, state.currentSort, state.tartibi]);
  if (!productsState) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  function onChange(name) {
    useSmthStore.setState({
      currentSort: name,
    });
  }

  return (
    <div className="container mx-auto px-10">
      {/* <InsideNav/> */}
      <div className="flex gap-10">
        <div>
          <Sidebar productsState={productsState}/>
       
        
        </div>
        <div>
          <div className="flex gap-8 items-center ml-6 mt-4">
            <ChangeSort
              name={"price"}
              onChangeSort={onChange}
              currentSort={state.currentSort}
              title={"narxi boyicha"}
            />
            <ChangeSort
              name={"rating"}
              onChangeSort={onChange}
              currentSort={state.currentSort}
              title={"reyting boyicha"}
            />
            <ChangeSort
              name={"new"}
              onChangeSort={onChange}
              currentSort={state.currentSort}
              title={"yangi kelgani boyicha"}
            />
            <ChangeSort
              name={"order_count"}
              onChangeSort={onChange}
              currentSort={state.currentSort}
              title={"ommabobligi boyicha"}
            />
          </div>
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
                return (
                  <Button
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                    type={currentPage === page ? "primary" : "default"}
                  >
                    {i + 1}
                  </Button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
