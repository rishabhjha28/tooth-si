import React, { useEffect, useState } from 'react'
import {data} from '../../data'
import { GrPowerReset } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function Topbar(props) {
    const [options,setOptions] = useState([])
    const [category,setCategory] = useState("")
    const [rating,setRating] = useState(0)
    useEffect(()=>{
        let option = []
        data.forEach(element => {
            let isExist = false
            for(let i = 0;i < option.length;i++){
                if(element.category === option[i]){
                    isExist = true;
                    break;
                }
            }
            if(!isExist){
                option.push(element.category)
            }
        });
        setOptions(option)
    },[])

    const reset =()=>{
        setCategory("")
        setRating(0)
        props.changeData({category:"",rating:0})
    }
    const searchData =(e)=>{
        props.setSearch(e.target.value)
    }
  return (
    <div className='topbar'>
        <div className='left'>
            <div>   
                <select name="category" value={category} onChange = {(e)=>{
                    setCategory(e.target.value)
                    props.changeData({category:e.target.value,rating:rating})
                }}>
                    <option value="" >select Category</option>
                    {options.map((element)=>{
                        return <option value={element} key = {element}>{element}</option>
                    })}
                </select>
            </div>
            <div>   
                <select name="rating" value={rating} onChange = {(e)=>{
                    setRating(e.target.value)
                    props.changeData({category:category,rating:e.target.value})
                }}>
                    <option value={0} >select Rating</option>
                    <option value = {4}>greater than 4</option>
                    <option value = {3}>greater than 3</option>
                    <option value = {2}>greater than 2</option>
                    <option value = {1}>greater than 1</option>
                </select>
            </div>
            <div className='reset' onClick={reset}>
                <GrPowerReset/>Reset
            </div>
        </div>
        <div className='right'>
            <div>
                <label htmlFor="search">Search: </label>
                <input id = 'search 'type="search" value = {props.search} onChange={searchData} name="search"/>
            </div>
            <Link to = '/checkout'>
                <div className='addtocart'>
                    Add To Cart
                </div>
            </Link>
        </div>
    </div>
  )
}
