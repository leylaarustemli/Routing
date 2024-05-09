import React, { useContext } from 'react'
import Maincontext from '../../../context/context'
import axios from 'axios'

const TableItem = ({item,index}) => {
    const {data,setData}=useContext(Maincontext)
    const deleteTodos=(id)=>{
axios.delete(`http://localhost:3000/products/${id}`).then((res)=>{
    setData([...data.filter(e=>e.id!=res.data.id)])
})

    }
  return (
    <tr>
      <th scope="row">{index+1}</th>
      <td><img width="100px" height="100px" src={item.image}/></td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td ><button onClick={()=>{deleteTodos(item.id)}} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default TableItem