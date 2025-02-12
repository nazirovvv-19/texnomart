import React from "react";
import Header from "./Header";
import HeaderSec from "./HeaderSec";
import Navbar from "./Navbar";

function Nav_wrp({ toggleCart, setIsCartVisible, isCartVisible,toggleLike,showLikedCard,setShowLikedCard }) {
  
  return (
    <div>
      <Header />
      <HeaderSec
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        toggleCart={toggleCart}
        showLikedCard={showLikedCard}
        setShowLikedCard={setShowLikedCard}
        toggleLike={toggleLike}
      />
      <Navbar />
    </div>
  );
}

export default Nav_wrp;
