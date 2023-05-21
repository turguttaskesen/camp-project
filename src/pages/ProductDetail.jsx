import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  let {productName}=useParams()
  return (
    <div>
      Ürün : {productName}
    </div>
  )
}
