import axios from "axios";
import React, { useEffect } from "react";
// import useMyStore from "../MyStore";
import { Link } from "react-router";
import useSmthStore from "./myStore/store";
// import Inside from "./Inside";

function Navbar() {
    const state = useSmthStore()
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        // console.log(res.data.data.data);
        useSmthStore.setState({ nav_section: res.data.data.data });
      });
  },[]);
  return <div className="bg-gray-100 p-4">
    <div className="container mx-auto px-10  " >
    
    <div className="flex justify-between text-xl font-bold ">
    {state.nav_section.map(item=>{
       return <div key={item.id}>
        <Link to={`/catalog/${item.slug}`}><p>{item.title}</p></Link>
       </div>
    })}
  </div>
  
  </div>
  </div>
  
}

export default Navbar;
