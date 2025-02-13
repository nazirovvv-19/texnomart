import React from "react";
import Header from "./Header";
import HeaderSec from "./HeaderSec";
import Navbar from "./Navbar";

function Nav_wrp({  toggleLike }) {
  
  return (
    <div>
      <Header />
      <HeaderSec
     
        toggleLike={toggleLike}
      />
      <Navbar />
    </div>
  );
}

export default Nav_wrp;
