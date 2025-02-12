import React, { useState } from "react";
import Nav_wrp from "./components/Nav_wrp";
import MainSection from "./components/MainSection";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showLikedCard, setShowLikedCard] = useState(false);
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
    setShowLikedCard(false)
  };
  const toggleLike = () => {
    setShowLikedCard(!showLikedCard);
    setIsCartVisible(false)
  };
  return (
    <div>
      <Nav_wrp
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        toggleCart={toggleCart}
        showLikedCard={showLikedCard}
        setShowLikedCard={setShowLikedCard}
        toggleLike={toggleLike}
      />
      <MainSection
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        toggleCart={toggleCart}
        showLikedCard={showLikedCard}
        setShowLikedCard={setShowLikedCard}
        toggleLike={toggleLike}
      />
    </div>
  );
}

export default App;
