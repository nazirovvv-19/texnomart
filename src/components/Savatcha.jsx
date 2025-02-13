import React, { useState } from "react";
import CartModal from "./CartModal";
import ShoppingCart02Icon from "../icons/shopping-cart-02-stroke-rounded (1)";
import useSmthStore from "./myStore/store";

function Savatcha() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const state = useSmthStore();
  return (
    <div>
      <div className="flex flex-col items-center">
        <div
          onClick={() => {
            setIsCartVisible(!isCartVisible);
          }}
          className="relative"
        >
          <ShoppingCart02Icon />
          <p className="bg-yellow-400 px-2 py-1 text-[10px] rounded-2xl absolute top-[-10px] ml-3">
            {state.counter.length}
          </p>
        </div>
        <p>Savatcha</p>
        <CartModal isCartVisible={isCartVisible} />
      </div>
    </div>
  );
}

export default Savatcha;
