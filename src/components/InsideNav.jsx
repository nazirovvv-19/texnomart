import React, { useState } from "react";
import ChangeSort from "./ChangeSort";
import GridViewIcon from "../icons/grid-view-stroke-rounded";
import CustomizeIcon from "../icons/customize-stroke-rounded";

function InsideNav() {
  const [changeColor, setChangeColor] = useState(true);
  const [changeColor2, setChangeColor2] = useState(false);

  const change = ()=>{
    setChangeColor(true)
    setChangeColor2(false)
  }
  const change2 = ()=>{
    setChangeColor2(true)
    setChangeColor(false)
  }
  const [currentSort, setCurrentSort] = useState("Narx boyicha")
  const [tartibi , setTartibi]=useState(false)
  function onChange(name) {
    setCurrentSort(name)
    setTartibi(!tartibi)
  }
  return (
    <div className="container mx-auto flex justify-between w-full">
      <div className="flex gap-5">
        <ChangeSort name={'Narx boyicha'} currentSort={currentSort} setCurrentSort={onChange} tartibi={tartibi}/>
        <ChangeSort name={'Reyting boyicha'} currentSort={currentSort} setCurrentSort={onChange}  tartibi={tartibi}/>
        <ChangeSort name={'Yangi kelganlar'} currentSort={currentSort} setCurrentSort={onChange}  tartibi={tartibi}/>
        <ChangeSort name={'ommabobligi boyicha'} currentSort={currentSort} setCurrentSort={onChange}  tartibi={tartibi}/>
      
      </div>
      <div className="flex gap-5">
        <div onClick={change} className={`${changeColor? 'text-yellow-300':'text-black'}`}>
            <GridViewIcon/>
        </div>
        <div onClick={change2} className={`${changeColor2?'text-yellow-300':'text-black'}`}> 
            <CustomizeIcon/>
        </div>
      </div>
    </div>
  );
}

export default InsideNav;
