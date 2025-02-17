import React, { useState } from 'react'
import SortByDown02Icon from '../icons/sort-by-down-02-stroke-rounded';
import SortByUp02Icon from '../icons/sort-by-up-02-stroke-rounded';

function ChangeSort({name,setCurrentSort,currentSort,tartibi}) {
  return (
    
    <div>
        <div onClick={()=>setCurrentSort(name)} className="flex items-center gap-2">
            <p >{name}</p>
            <div>{currentSort===name?<>{tartibi?<SortByDown02Icon/>:<SortByUp02Icon/>}</>:null}</div>
          </div>
    </div>
  )
}

export default ChangeSort