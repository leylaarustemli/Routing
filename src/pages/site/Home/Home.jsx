import React, { useContext } from 'react'
import "./Home.css"
import Maincontext from '../../../context/context'

const Home = () => {
  const {data,loading}=useContext(Maincontext)
  return (
    <div className='home'>
       <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white d-flex flex-column align-items-center w-100">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    data.map((item,index)=>(
                      <div className="col mb-5">
                        <div className="card h-100">
                       
                            <img className="card-img-top "height="300px" src={item.image}  alt="..." />
                     
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">{item.title}</h5>
                                 {item.price}
                                    
                                </div>
                            </div>
                          
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                   
                    ))
                   }
                </div>
            </div>
        </section>
   
   </div>
  )
}

export default Home