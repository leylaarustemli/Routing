import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './Routes/routes'
import "./App.css"
import Maincontext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const router=createBrowserRouter(ROUTES)
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData([...res.data])
      setLoading(false)
    }).catch(error=>{
      setError(error)
      setLoading(false)
    })
  },[])
  const contexData={
    data,setData,loading,setLoading,error,setError
  }


  return (
    <Maincontext.Provider value={contexData}>
 <RouterProvider router={router} />
    </Maincontext.Provider>
   
  )
}

export default App
