import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div>
        <div className='thank'>Thank You for ordering with us</div>
        <Link to = '/'> shop more?</Link>
    </div>
  )
}
