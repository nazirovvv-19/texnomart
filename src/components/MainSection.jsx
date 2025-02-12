import React from 'react'
import Categories from './Categories'
import Products from './Products'

function MainSection({toggleCart,setIsCartVisible,isCartVisible,toggleLike,showLikedCard,setShowLikedCard}) {
  return (
    <div>
        <Categories/>
        <Products isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} toggleCart={toggleCart}  showLikedCard={showLikedCard} setShowLikedCard={setShowLikedCard} toggleLike={toggleLike}/>
    </div>
  )
}

export default MainSection