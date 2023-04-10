import React from 'react'
import CustomerPageParent from './CustomerPageParent'

const CustomersPage = () => {
  return (

    <div>
      <p className="customerHeader" >Customers</p>
      {/* <div className='customerWrap' >
        <p>firstname</p>
        <p>lastname</p>
        <p>email</p>
        <p>phone</p>
        <p>location</p>
        <p>skill</p>
      </div>
      <div className='customerWrap' >
        <p>firstname</p>
        <p>lastname</p>
        <p>email</p>
        <p>phone</p>
        <p>location</p>
        <p>skill</p>
      </div>
      <div className='customerWrap' >
        <p>firstname</p>
        <p>lastname</p>
        <p>email</p>
        <p>phone</p>
        <p>location</p>
        <p>skill</p>
      </div>
      <div className='customerWrap' >
        <p>firstname</p>
        <p>lastname</p>
        <p>email</p>
        <p>phone</p>
        <p>location</p>
        <p>skill</p>
      </div> */}
      <CustomerPageParent />
    </div>
  )
}

export default CustomersPage;