import React from 'react'
import { useNavigate } from 'react-router-dom'
import TableData from '../table/TableData'
import TableHeader from '../table/TableHeader'

export default function CheckOut(props) {
    const tableName = ['','product','price','quantity','subtotal']
    let subtotal = 0
    const navigate = useNavigate();
    for(let i = 0;i < props.checkoutData.length;i++){
        subtotal += props.checkoutData[i].subtotal
    }
    const proceedToPay =()=>{
        props.setCheckoutData([])
        navigate('/thankyou')
    }
    return (
        <div className='checkout'>
            <div>
                <TableHeader columnName = {tableName}/>
                <TableData tableData = {props.checkoutData} checkoutData = {props.checkoutData} columnName = {tableName}  setCheckoutData =  {props.setCheckoutData} />
            </div>
            <div className='carttotal'>
                <div className = "totalup">Cart totals</div>
                <div className='totalmid'>
                    <div className='float-left'>Subtotal</div>
                    <div className='float-right'>${subtotal}</div>
                </div>
                <div className='totallow'>
                    <div className='float-left'>Total</div>
                    <div className='float-right'>${subtotal}</div>
                </div>
                <div onClick={proceedToPay} className='proceedtocheckout'>
                    PROCEED TO CHECKOUT
                </div>
            </div>
        </div>
  )
}
