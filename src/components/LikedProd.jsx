import React, { useState } from 'react'
import useSmthStore from './myStore/store';

  function LikedProd({showLikedCard}) {
    const state = useSmthStore()
  return (
    <div>
          {showLikedCard && (
          <div className="absolute bg-white rounded-xl+ z-30 border-2 shadow-lg p-4 mt-4 w-[93%] rounded-xl right-12 top-[80px] select-none ">
            <h3 className="text-xl font">Yoqtirganlaringiz: {state.count.length}</h3>
            {state.count.length > 0 ? (
              <ul className="flex  gap-3 mt-5 overflow-auto  w-[1350px]">
                {state.count.map((item, index) => {
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
  )
}

export default LikedProd