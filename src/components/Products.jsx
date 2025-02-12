import axios from "axios";
import React, { useEffect, useState } from "react";
import ShoppingCart02Icon from "../icons/shopping-cart-02-stroke-rounded (1)";
import FavouriteIcon from "../icons/favourite-stroke-rounded (1)";
import useSmthStore from "./myStore/store";
// import useMyStore from "./myStore/storeTwo";
import heart from "../assets/heart.svg";
import redh from "../assets/redh.svg";
import Delete02Icon from "../icons/delete-02-stroke-rounded";
import { Button } from "antd";
import { Link } from "react-router";
import Inside from "./Inside";

function Products({ isCartVisible, showLikedCard }) {
  const state = useSmthStore();
  const [mahsulotlar, setMahsulotlar] = useState();
  const { counter, count } = useSmthStore();
  const [likedProducts, setLikedProducts] = useState({});
  const [tolov, setTolov] = useState(false);
  const open = () => {
    setTolov(true);
  };
  const close = () => {
    setTolov(false);
  };
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setMahsulotlar(res.data.data.data);
      });
  }, []);

  const handleDel = (id) => {
    const del = state.counter.filter((item, i) => item.id !== id);
    useSmthStore.setState({
      counter: del,
    });
  };

  const handleLike = (index) => {
    setLikedProducts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleAddToCart = (item) => {
    const topish = counter.find((prod) => prod.id === item.id);

    if (topish) {
      const updatedCounter = counter.map((prod) =>
        prod.id === item.id ? { ...prod, soni: prod.soni + 1 } : prod
      );
      useSmthStore.setState({
        counter: updatedCounter,
      });
    } else {
      const newProduct = {
        ...item,
        soni: 1,
      };
      useSmthStore.setState({
        counter: [...counter, newProduct],
      });
    }
  };

  if (!mahsulotlar) {
    return <div>loading...</div>;
  }
  const minus = (item) => {
    if (item.soni > 1) {
      const update = counter.map((item_counter) =>
        item_counter.id === item.id
          ? { ...item_counter, soni: item_counter.soni - 1 }
          : item_counter
      );
      useSmthStore.setState({
        counter: update,
      });
    }
  };
  const plus = (item) => {
    const update = counter.map((item_counter) =>
      item_counter.id === item.id
        ? { ...item_counter, soni: item_counter.soni + 1 }
        : item_counter
    );

    useSmthStore.setState({
      counter: update,
    });
  };
  const allprice = counter.reduce(
    (avvalgi, hozirgi) => avvalgi + hozirgi.sale_price * hozirgi.soni,
    0
  );
  // console.log(sale_price);
  console.log(counter);
  const allcount = counter.reduce((avvalgi, hozirgi) => avvalgi + hozirgi.soni, 0);

  const muddatliTolov = allprice/24

  return (
    <div>
      <div className="container mx-auto px-5">
        <h1 className="text-2xl font-bold mt-6 px-5">Yangi mahsulotlar</h1>
        <div className="grid grid-cols-5 gap-10 mt-10 ">
          {mahsulotlar.map((item, index) => {
            console.log(item);
            
            return (
              <div key={index}>
                <div className="rounded-2xl p-5 w-[280px] hover:scale-101 transition-transform hover:shadow-2xl">
                 <Link to={`/inside/${item.id}`}> 
                 <img
                    width={270}
                    className="rounded-2xl relative h-[240px]"
                    src={item.image}
                    alt=""
                  />  
                  </Link>
                  <div
                    onClick={() => {
                      const bb = count.concat({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        axiom_monthly_price: item.axiom_monthly_price,
                        sale_price: item.sale_price,
                      });
                      useSmthStore.setState({
                        count: bb,
                      });
                    
                    }}
                    className="absolute mt-[-250px] ml-55 z-10"
                  >
                    <img
                      onClick={() => {
                        handleLike(index);
                      }}
                      width={20}
                      src={likedProducts[index] ? redh : heart}
                      alt=""
                    />
                  </div>
                  <p className="w-[250px] mt-2 h-[70px]  ml-1 "> {item.name}</p>
                  <p className="text-[12px] px-2 rounded-xl w-[150px] py-[2px] mt-3 ml-1 bg-gray-200">
                    {item.axiom_monthly_price.toLocaleString("ru")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold mt-4 ml-2">
                      {item.sale_price.toLocaleString("ru")} so'm
                    </p>
                    <div
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                      className="transition-transform active:scale-90"
                    >
                      <ShoppingCart02Icon className="mt-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {isCartVisible && (
          <div>
            <div className="absolute bg-white rounded-xl z-30 border-2 shadow-lg p-4 mt-4 w-[93%] h-[600px] right-12 top-[80px] ">
              <h3 className="font-bold text-3xl">
                Savatchangiz: {state.counter.length}
              </h3>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between h-[400]  w-[870px]  border-b-2">
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p>hammsini tanlash</p>
                    </div>
                    <p>tanlanganlarni ochirish</p>
                  </div>
                  {counter.length > 0 ? (
                    <ul className="bb flex flex-col gap-3 mt-5 h-[480px]">
                      {counter.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex justify-between w-[870px] items-center px-10"
                          >
                            <img width={120} src={item.image} alt="" />
                            <p className="w-70">{item.name}</p>
                            <p className="text-[14px] font-bold w-40">
                              {item.sale_price.toLocaleString("ru")} so'm
                            </p>
                            <div className="flex items-center gap-1">
                              <Button
                                onClick={() => {
                                  minus(item);
                                }}
                              >
                                -
                              </Button>
                              <p className="">{item.soni} </p>
                              <Button
                                onClick={() => {
                                  plus(item);
                                }}
                              >
                                +
                              </Button>
                            </div>

                            <div className="flex flex-col gap-1">
                              <div>
                                <img
                                  onClick={() => {
                                    handleLike(index);
                                  }}
                                  width={20}
                                  src={likedProducts[index] ? redh : heart}
                                  alt=""
                                />
                              </div>
                              <div onClick={() => handleDel(item.id)}>
                                <Delete02Icon />
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-center mt-30 text-2xl font-bold">
                      Savatcha bo'sh.
                    </p>
                  )}
                </div>
                <div>
                  <div className="w-[450px] border-2 rounded-2xl h-auto p-5 ">
                    <div className="flex gap-2 bg-gray-300 py-2 rounded-xl justify-between items-center px-8 ">
                      <p
                        onClick={open}
                        className={`${tolov?"bg-white":''} py-1 px-5 rounded-xl`}
                      >
                        Hoziroq tolash
                      </p>
                      <p className={`${!tolov?"bg-white":''} py-1 px-5 rounded-xl`}onClick={close}>mudatli tolov</p>
                    </div>
                    {tolov ? (
                      <>
                        <div className="flex justify-between py-4 px-2 border-b-2 border-b-gray-300">
                          <p className="opacity-50 ">
                            {allcount} ta mahsulot narxi
                          </p>
                          <p>{allprice.toLocaleString("ru")} so'm</p>
                        </div>
                        <div className="flex justify-between items-center px-2 py-4">
                          <p className="text-[18px] font-semibold">Jami</p>
                          <p className="text-xl font-bold">
                            {allprice.toLocaleString("ru")} so'm
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between py-4 px-2 border-b-2 border-b-gray-300">
                          <p className="opacity-50 ">
                            {allcount} ta mahsulot narxi
                          </p>
                          <p>{allprice.toLocaleString("ru")} so'm</p>
                        </div>
                        <p>
                          Buyurtmani rasmiylashtirishda 12 oydan 24 oygacha
                          muddatli to‘lovni tanlashingiz mumkin
                        </p>
                        <div className="flex justify-between items-center px-2 py-4">
                          <p className="text-[18px] font-semibold">{'Jami'.toLowerCase()}</p>
                          <p className="text-xl font-bold">{(muddatliTolov.toFixed(0)).toLocaleString('ru')}
                            so'm <span className="opacity-50 text-sm">x 24</span>
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <button className="w-full bg-amber-300 px-2 py-3 rounded-xl mt-2">
                    {" "}
                    Rasmiylashtrish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showLikedCard && (
          <div className="absolute bg-white rounded-xl+ z-30 border-2 shadow-lg p-4 mt-4 w-[93%] rounded-xl right-12 top-[80px] select-none ">
            <h3 className="text-xl font">Yoqtirganlaringiz: {count.length}</h3>
            {count.length > 0 ? (
              <ul className="flex  gap-3 mt-5 overflow-auto  w-[1350px]">
                {count.map((item, index) => {
                  return (
                   <div className="w-[700px]"> <li
                   key={index}
                   className="flex flex-col w-[200px] items-center"
                 >
                   <img width={200} src={item.image} alt="" />
                   <p className="text-2xl text-center">{item.name}</p>
                   <p className="text-[20px] font-bold  ">
                     {(item.sale_price).toLocaleString('ru')} so'm
                   </p>
                 </li></div>
                  );
                })}
              </ul>
            ) : (
              <p>Hech qaysi mahsulotni yurechasini qizartirmagansiz!!!</p>
            )}
          </div>
        )}
      </div>
     
    </div>
  );
}

export default Products;
