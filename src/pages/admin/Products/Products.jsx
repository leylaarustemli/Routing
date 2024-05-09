import React, { useContext } from 'react'
import Maincontext from '../../../context/context'
import Loading from "../../Loading/Loading"
import Table from '../../../Components/admin/Table/Table'

const Products = () => {
  const {data,loading}=useContext(Maincontext)
  console.log(data);
  return (
   
   <>
 {
      loading ? <Loading/> : <Table items ={data}/>
    }
 
   </>
  )
}

export default Products