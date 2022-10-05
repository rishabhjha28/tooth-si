import React, { useEffect, useState } from 'react'
import ProductTable from './ProductTable'
import Topbar from './Topbar'
import {data} from '../../data'

export default function MainProductPage(props) {
  const [tData,setTData] = useState(data)
  const [search,setSearch] = useState('')
  const changeData = (obj) =>{
    const t1 = Object.keys(obj)[0];
    const t2 = Object.keys(obj)[1];
    const temp = data.filter((element)=>{
      if(obj[t1]){
        if(element[t1] === obj[t1] && element[t2] >= obj[t2]){
          return element  
        }
      }
      else{
        if(element[t2] >= obj[t2])
          return element 
      }
    })
    setTData(temp)
    if(temp.length === 0){
      setTData(data)
    }
  }
  useEffect(()=>{
    const res = [];
    data.forEach(element => {
      if(element.name.toLowerCase().includes(search.toLowerCase()) || element.category.toLowerCase().includes(search.toLowerCase()))
        res.push(element)
    });
    setTData(res)
  },[search])
  return (
    <div className='mainproduct'>
      <Topbar changeData = {changeData} search = {search} setSearch = {setSearch}/>
      <ProductTable tData = {tData} checkoutData = {props.checkoutData} setCheckoutData = {props.setCheckoutData} search = {search}/>
    </div>
  )
}
