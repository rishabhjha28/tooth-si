import React from 'react'
import TableRow from './TableRow'

export default function TableData(props) {
    const tableData = props.tableData
    const columnName = props.columnName
  return (
    <div className='tabledata'>
        {tableData.map((element)=>{
            return <TableRow element = {element} checkoutData = {props.checkoutData} columnName = {columnName} key = {element['id']} setCheckoutData = {props.setCheckoutData}/>
        })}
    </div>
  )
}
