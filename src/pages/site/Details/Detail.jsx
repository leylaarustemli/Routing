import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useParams } from 'react-router'
import axios from 'axios'

const Detail = () => {
    const[data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
axios.get(`http://localhost:3000/products/${id}`).then(res=>{
    setData(res.data)
})
    },[])
  return (
    <div className='details'>
    <div className="container">
    <div className="left-detail">
<img src={data.image} alt="" />
</div>
<div className="right-detail">
   <h2>{data.title}</h2>
   <h4>{data.price}</h4>
   <p>{data.description}</p>
</div>
    </div>
    </div>
  )
}

export default Detail