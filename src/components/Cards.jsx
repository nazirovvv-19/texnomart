import React from 'react'
import { Link } from 'react-router';
import ShoppingCart02Icon from "../icons/shopping-cart-02-stroke-rounded (1)";
import heart from "../assets/heart.svg";
import useSmthStore from './myStore/store';

function Card({item , index}) {
    const {counter,count}=useSmthStore()
    const findProduct = (item) => {
        const find = counter.find((prod) => prod.id === item.id);
    
        if (find) {
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
      
  return (
    <div>
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
                      src={ heart}
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
                        findProduct(item);
                      }}
                      className="transition-transform active:scale-90"
                    >
                      <ShoppingCart02Icon className="mt-4" />
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Card