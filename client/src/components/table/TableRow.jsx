import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function TableRow(props){
    const url = window.location.href;
    const pathName = new URL(url).pathname
    const element  = props.element
    const columnName = props.columnName
    const [quantity,setQuantity] = useState(()=>{
        let flag = 1
        props.checkoutData.forEach(e => {
            if(element.id === e.id){
                flag = e.quantity
            }
        });
        return flag
    })
    const [isChecked,setChecked] = useState(()=>{
        let flag = false
        props.checkoutData.forEach(e => {
            if(element.id === e.id){
                flag = true
            }
        });
        return flag
    })
    const handleQuantity =(e)=>{
        const {value} = e.target
        if(value > 0){
            value<=element["stock"]?setQuantity(value):setQuantity(element["stock"])
            if(isChecked){
                props.setCheckoutData((prev)=>{
                    const temp = []
                    prev.forEach((el)=>{
                        if(el.id === element.id){
                            temp.push({
                                id:element.id,
                                image:element.image,
                                product:element.name,
                                price:element.price,
                                quantity:value<=element["stock"]?value:element["stock"],
                                subtotal:value<=element["stock"]?value*element.price:element["stock"]*element.price
                            })
                        }
                        else{
                            temp.push(el)
                        }
                    })
                    console.log(temp)
                    return temp
                })
            }
        }
    }
    const handleChange = ()=>{
        setChecked(!isChecked)
        !isChecked?props.setCheckoutData((prev)=>{
            return [
                ...prev,
                {
                    id:element.id,
                    image:element.image,
                    product:element.name,
                    price:element.price,
                    quantity:quantity,
                    subtotal:quantity*element.price
                }
            ]
        }):props.setCheckoutData((prev)=>{
            const temp = prev.filter((e)=>{
                if(e.id !== element.id){
                    return e;
                }
            })
            return temp;
        })
    }
    const removeCheckoutData=()=>{
        props.setCheckoutData((prev)=>{
            const temp = prev.filter((e)=>{
                if(e.id !== element.id){
                    return e;
                }
            })
            return temp;
        })
    }
    const handlePlus = ()=>{
        props.setCheckoutData((prev)=>{
            const temp =[]
            prev.forEach((e)=>{
                if(e.id === element.id){
                    console.log(element)
                    temp.push({
                        id:element.id,
                        image:element.image,
                        product:element.product,
                        price:element.price,
                        quantity:element.quantity+1,
                        subtotal:(element.quantity+1)*element.price
                    })
                }
                else{
                    temp.push(e)
                }
            })
            return temp;
        })
    }
    const handleMinus =()=>{
        if(element.quantity-1){
            props.setCheckoutData((prev)=>{
                const temp =[]
                prev.forEach((e)=>{
                    if(e.id === element.id){
                        console.log(element)
                        temp.push({
                            id:element.id,
                            image:element.image,
                            product:element.product,
                            price:element.price,
                            quantity:element.quantity-1,
                            subtotal:(element.quantity-1)*element.price
                        })
                    }
                    else{
                        temp.push(e)
                    }
                })
                return temp;
            })
        }
    }
  return (
    <div className='tablerow' style={{alignItems:'center',padding:"10px 0px",borderBottom:'1px solid lightgrey'}} key = {element['id']}>
        <div onClick={removeCheckoutData} className='cross'>{pathName === '/checkout'?'x':''}</div>
        
        {columnName.map((e)=>{
            if(e === 'image'){
                return <div className='tablerowelement'><img src={element[e]} alt={element['name']} /></div>
            }
            if(e === ""){
                return <div className='tablerowelement'><img src={element['image']} alt={element['product']} /></div>
            }
            if(e === 'stock'){
                return element[e]?<div style = {{color:'green'}} className='tablerowelement' key = {element[e]}>In Stock</div>:<div style = {{color:'red'}} className='tablerowelement' key = {element[e]}>Out of Stock</div>
            }
            if(e === 'price' || e === 'subtotal'){
                return <div className='tablerowelement' key = {element[e]}>${element[e]}</div>
            }
            if(e === 'quantity'){
                return <div className='quantity tablerowelement'>
                    <div className='minus' onClick={handleMinus}>-</div> 
                    <div className='' key = {element[e]}>{element[e]}</div>
                    <div className='plus' onClick = {handlePlus}>+</div>
                </div>
            }
            if(e === 'buy'){
                return <div className='tablerowelement buy' key = {element['id']}>
                    <input type="number" onChange={handleQuantity} value = {quantity} name="quantity"/>
                    <div onClick={handleChange} className='cart'><AiOutlineShoppingCart/></div>
                    <input type= 'checkbox' checked = {isChecked} onClick={handleChange}/> 
                </div>
            }
            else{
                return <div className='tablerowelement' key = {element[e]}>{element[e]}</div>
            }
        })}
    </div>
  )
}
