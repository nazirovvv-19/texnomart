import React, { useState } from "react";
import useSmthStore from "./myStore/store";
import LikedProd from "./LikedProd";
import FavouriteIcon from "../icons/favourite-stroke-rounded (1)";

function LikeSavati() {
  const [showLikedCard, setShowLikedCard] = useState(false);

  const state = useSmthStore();
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => {
          setShowLikedCard(!showLikedCard);
        }}
        className="relative"
      >
        <FavouriteIcon />
        <p className="bg-yellow-400 px-2 py-1 text-[10px] rounded-2xl absolute top-[-10px] ml-3">
          {state.count.length}
        </p>
      </div>
      <p>Sevimlilar</p>
      <LikedProd showLikedCard={showLikedCard} />
    </div>
  );
}

export default LikeSavati;
