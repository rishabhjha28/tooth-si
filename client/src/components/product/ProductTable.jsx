import React from 'react'
import TableData from '../table/TableData'
import TableHeader from '../table/TableHeader'

export default function ProductTable(props) {
  const tablecolumnname = ["image","name","rating","stock","price","buy"]
  return (
    <div className='table'>
      <TableHeader columnName = {tablecolumnname}/>
      <TableData tableData = {props.tData} checkoutData = {props.checkoutData} setCheckoutData = {props.setCheckoutData} columnName = {tablecolumnname}/>
    </div>
  )
}
