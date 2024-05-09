import React, { useContext } from 'react'
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Maincontext from '../../../context/context';
const Add = () => {
    const {data,setData}=useContext(Maincontext)
  return (
    <div>
    
    <Formik
      initialValues={{ image: '', title: '',price: '' }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products",{
          id:uuidv4(),  
          title:values.title,
          image:values.image,
          price:values.price
        }).then(res=>{
            setData([...data,res.data])
            values.title=""
            values.image=""
            values.price=""
        })

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className='container p-5 d-flex flex-column gap-3 mt-5 rounded-3 mb-5 w-50' onSubmit={handleSubmit}>
          <input placeholder='image'
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          {errors.image && touched.image && errors.image}
          <input placeholder='title'
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <input placeholder='price'
            type="number"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && errors.price}
          <button type="submit" >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  )
}

export default Add