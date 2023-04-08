// this will hold all of our customer data
import React, { useState, useEffect } from "react";
import CustomerComponent from './CustomerComponent'
import CustomerComponentHeader from './CustomerComponentHeader'

const CustomerPage = () => {
    // need to make a request to ./dashboard and load the data
    // store data from response in state
    // store (is loaded) as a boolean
    // use useEffect to get data when page first loads

    // initialize customer data information
    const [customerData, setCustomerData] = useState(null);
    // boolean to store if data has been fetched
    const [fetchedData, setFetchedData] = useState(null);

    // if data has not been fetched, get customer data and populate customerData state
    useEffect(() => {
        // if data has not been fetched, fetch it from database and update state
        if (!fetchedData) {
            fetch('/dashboard')
                .then(res => res.json())
                .then((customers) => {
                    setCustomerData(customers)
                    setFetchedData(true);
                })
        }
    })

    // want to iterate through each element in customerData list
    // pass customer info as props to each customer
    // this possibly needs to be in a useEffect?
    const customers = customerData.map((customer, i) => {
        return (
            <CustomerComponent 
            key = {i}
            info = {customer}
            />
        )
    })

    return (
        // return customer header
        // return all customer components
        <>
        <CustomerComponentHeader />
        {customers}
        </>
    )
}

export default CustomerPage;