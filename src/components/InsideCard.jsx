import { Button } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Cards'

function InsideCard({id}) {
    const [accessories, setAccessories] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>{
        axios.get('https://gw.texnomart.uz/api/web/v1/product/accessories?id='+id).then(res=>{setAccessories(res.data.data.data);
        })
    },[id])
    console.log(accessories[activeIndex]);
    if (accessories.length===0) {
        return <div>loading...</div>
    }
  return (
  <div className='container mx-auto px-12'>
      <div className='flex gap-5 mt-20'>
        {accessories.map((item,index)=>{
            return <div>
               <Button onClick={()=>{
                setActiveIndex(index)
               }} type={activeIndex===index? 'primary':"default"}>{item.name}</Button>
            </div>
        })}
    </div>
    <div className='flex justify-between mt-10 flex-wrap'>
        {accessories[activeIndex].products.map(item=>{
            return <div>
                <Card item={item}/>
            </div>
        })}
    </div>
  </div>
  )
}

export default InsideCard