import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Nav_wrp from "./Nav_wrp";
import InsideCard from "./InsideCard";

function Inside() {
  const [card, setCard] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/product/detail?id=" + id)
      .then((res) => {
        setCard(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);

  if (!card) {
    return (
      <div className="flex justify-center items-center h-64 ">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
   <div>
     
     <div className="container px-16 my-5">
      <div className="flex items-center   mb-5 justify-between ">
        <p className="text-3xl font-bold">{card.name}</p>
        <div className="flex items-center gap-5">
          <p className="text-black/60 cursor-pointer">Kod: {card.code}</p>
          <div className="flex gap-1 cursor-pointer  p-1 bg-green-100 rounded-2xl  items-center">
            <button className="  text-white">
              <img
                width={20}
                src="https://texnomart.uz/_nuxt/img/est_v_nalichi.cbcc8a1.svg"
                alt=""
              />
            </button>
            <p className="text-sm font-bold text-green-400">mavjud</p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 my-10 ">
        <img className="w-96" src={card.large_images[0]} alt="" />
        <div>
          <p className="font-bold text-xl">Korinish</p>
          <div className="flex items-center gap-2 my-5">
            {card.small_images.map((item, ind) => {
              return (
                <div key={ind} className="border border-slate-300 rounded-2xl p-2">
                  <img className="w-12 h-12" src={item} alt="" />
                </div>
              );
            })}
          </div>
          <p className="font-bold text-xl">Mahsulot haqida qisqacha</p>
          <div className="w-[500px] ">
            {card.main_characters.map((item,ind) => {
              return (
                <div key={ind} className="flex mb-3 ">
                  <p className="text-black/40">{item.name}</p>
                  <p className="text-black/40">
                    .....................................................................
                  </p>
                  <p>{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border w-96 border-gray-300 p-3 rounded-2xl ">
            <p className="text-2xl mb-2 font-bold">{(card.sale_price).toLocaleString("ru")} So'm</p>
            <div className="bg-slate-100 flex items-center justify-center  my-4  rounded-2xl p-4">
                <div className="w-full flex-col flex gap-2">
                    <p className=" cursor-pointer font-bold text-lg">{(card.minimal_loan_price.min_monthly_price * 1).toLocaleString("ru")} So'm</p>
                    <p className=" text-sm">{card.minimal_loan_price.month_number} oyga</p>
                </div>
                <div className="w-full flex-col flex gap-2">
                    <p className=" cursor-pointer bg-blue-400 rounded-2xl text-center text-white font-bold text-lg">{(card.minimal_loan_price.min_monthly_price *1.6).toLocaleString("ru")} So'm</p>
                    <p className="text-blue-400 text-center text-sm ">Muddatli tolov 0-0-{card.minimal_loan_price.month_number *0.5}</p>
                </div>
            </div>
            <p className="text-black/50 mb-2">{card.minimal_loan_price.description}</p>
            <div className="flex items-center gap-2 my-2">
                <button className="w-full bg-amber-400 p-5 rounded-2xl cursor-pointer">Savatchaga</button>
                <button className="w-full bg-slate-200 p-2 rounded-2xl cursor-pointer">Birgina klik orqali harid</button>
            </div>
           <div>
           
           <button className="w-full flex items-center justify-center gap-2 mt-5 bg-slate-200 p-3 rounded-xl cursor-pointer"> <img src="https://texnomart.uz/_nuxt/img/guarante.f5367a6.svg" alt="" />  Kafolat{card.guarantee}</button>
           </div>
        </div>
      </div>
    </div>
    <InsideCard id={id}/>
   </div>
  );
}

export default Inside;