import React from 'react'
import TableItem from '../TableItem/TableItem'

const Table = ({items}) => {
  return (
    <div className='container'>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {items.map((item,index)=>(
    <TableItem key={index} item={item} index={index}/>
   ))}
  </tbody>
</table>
   </div>
  )
}

export default Table