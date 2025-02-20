import React, { useState } from 'react'
import SortByDown02Icon from '../icons/sort-by-down-02-stroke-rounded';
import SortByUp02Icon from '../icons/sort-by-up-02-stroke-rounded';
import useSmthStore from './myStore/store';

function ChangeSort({name,currentSort,onChangeSort , title}) {
  const state = useSmthStore()
  return (
    
    <div className=''>
        <div onClick={()=>onChangeSort(name)} className="flex items-center gap-2">
            <p >{title}</p>
            <div>{currentSort===name?<>{state.tartibi?<SortByDown02Icon/>:<SortByUp02Icon/>}</>:null}</div>
          </div>
    </div>
  )
}

export default ChangeSort