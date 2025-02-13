import React, { useState } from "react";
import useSmthStore from "./myStore/store";
import heart from "../assets/heart.svg";
import { Button } from "antd";
import Delete02Icon from "../icons/delete-02-stroke-rounded";

function CartModal({ isCartVisible }) {
  const [tolov, setTolov] = useState(false);
  const state = useSmthStore();
  const { counter } = useSmthStore();
  const open = () => {
    setTolov(true);
  };
  const close = () => {
    setTolov(false);
  };
  const handleDel = (id) => {
    const del = state.counter.filter((item) => item.id !== id);
    useSmthStore.setState({
      counter: del,
    });
  };
  const allprice = counter.reduce(
    (avvalgi, hozirgi) => avvalgi + hozirgi.sale_price * hozirgi.soni,
    0
  );
  const muddatliTolov = (allprice / 24).toFixed(0);
  const allcount = state.counter.reduce(
    (avvalgi, hozirgi) => avvalgi + hozirgi.soni,
    0
  );
  const plus = (item) => {
    const update = state.counter.map((item_counter) =>
      item_counter.id === item.id
        ? { ...item_counter, soni: item_counter.soni + 1 }
        : item_counter
    );

    useSmthStore.setState({
      counter: update,
    });
  };
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

  if (!isCartVisible) {
    return <></>;
  }

  return (
    <div>
      <div className="absolute bg-white rounded-xl z-30 border-2 shadow-lg p-4 mt-4 w-[93%] h-[600px] right-12 top-[80px] ">
        <h3 className="font-bold text-3xl">
          Savatchangiz: {state.counter.length}
        </h3>
        <div className="flex justify-between">
          <div>
            <div className="flex justify-between   w-[870px]  border-b-2">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>hammsini tanlash</p>
              </div>
              <p>tanlanganlarni ochirish</p>
            </div>
            {state.counter.length > 0 ? (
              <ul className="bb flex flex-col gap-3 mt-5 h-[480px]">
                {state.counter.map((item, index) => {
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
                            src={heart}
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
                  className={`${tolov ? "bg-white" : ""} py-1 px-5 rounded-xl`}
                >
                  Hoziroq tolash
                </p>
                <p
                  className={`${!tolov ? "bg-white" : ""} py-1 px-5 rounded-xl`}
                  onClick={close}
                >
                  mudatli tolov
                </p>
              </div>
              {tolov ? (
                <>
                  <div className="flex justify-between py-4 px-2 border-b-2 border-b-gray-300">
                    <p className="opacity-50 ">{allcount} ta mahsulot narxi</p>
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
                    <p className="opacity-50 ">{allcount} ta mahsulot narxi</p>
                    <p>{allprice.toLocaleString("ru")} so'm</p>
                  </div>
                  <p>
                    Buyurtmani rasmiylashtirishda 12 oydan 24 oygacha muddatli
                    to‘lovni tanlashingiz mumkin
                  </p>
                  <div className="flex justify-between items-center px-2 py-4">
                    <p className="text-[18px] font-semibold">
                      {"Jami".toLowerCase()}
                    </p>
                    <p className="text-xl font-bold">
                      {Number(muddatliTolov).toLocaleString("ru")}
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
  );
}

export default CartModal;
