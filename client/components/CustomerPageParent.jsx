// this will hold all of our customer data
import React, { useState, useEffect } from "react";
import CustomerComponent from "./CustomerComponent";
import CustomerComponentHeader from "./CustomerComponentHeader";

const CustomerPageParent = () => {
  // initialize customer data information
  const [customerData, setCustomerData] = useState([]);
  // boolean to store if data has been fetched
  const [fetchedData, setFetchedData] = useState(false);
  // if data has not been fetched, get customer data and populate customerData state
  useEffect(() => {
    const customers = [];

   // if data has not been fetched, fetch it from database and update state
    if (!fetchedData) {
      fetch("http://localhost:3000/dashboard")
        .then((res) => res.json())
        .then((fetchedData) => {
          console.log(fetchedData);
          // array to hold all jsx CustomerComponents
          // const customers = [];
          // add each jsx component to array, passing in individual customer's data
          fetchedData.forEach((el, index) => {
            customers.push(<CustomerComponent key={index} info={el} />);
          });
          // set state customer data to customers
          // setCustomerData(customers);
          // set fetched data to true
          setFetchedData(true);
          setCustomerData(customers);
        });
    }

    // TESTING WITH MOCK DATA
    // get array of customers through fetch request
    // const testData = 
    //   {
    //     first_name: "al",
    //     last_name: "emig",
    //     email_address: "test",
    //     phone_number: "test",
    //     location: "test",
    //     skill_lvl: "test",
    //     destination: "test",
    //   }
    
    // get array of customer components
    // testData.forEach((el, index) => {
    //   console.log('inside test loop')
    //   customers.push(<CustomerComponent key={index} info={el} />);
    // });
   
    // set state to array of customer components
    //  setCustomerData(customers);
    // console.log(customers);
    //  setFetchedData(true);
    //   console.log(fetchedData)
  }, [setFetchedData]);


  // const testData = 
  // {
  //   first_name: "al",
  //   last_name: "emig",
  //   email_address: "test",
  //   phone_number: "test",
  //   location: "test",
  //   skill_lvl: "test",
  //   destination: "test",
  // }
  return (
    // return customer header
    // return all customer components from the state
    <>
      
      <table>
      <CustomerComponentHeader />
        {customerData}
      </table>
    </>
  );
};

export default CustomerPageParent;
