import React from 'react'

export default function TableHeader(props) {
    const columnName = props.columnName
    const url = window.location.href;
    const pathName = new URL(url).pathname
    return (
    <div className='tablecolumnname' style = {pathName ==='/checkout'?{borderBottomColor:'lightgrey',paddingBottom:'20px'}:{}}>
        {pathName === '/checkout'&&<div className = 'extra'></div>}
        {columnName.map((element)=>{
            return <div key = {element} className='columnname'>{element}</div>
        })}
    </div>
  )
}
