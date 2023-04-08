import React from "react";


// component returns a single row of customer data
const CustomerComponent = (props) => {
    const { first_name, last_name, email_address, phone_number, city, travel_destination } = props.info;
    return (
        <div>
            <span>{first_name}</span>
            <span>{last_name}</span>
            <span>{email_address}</span>
            <span>{phone_number}</span>
            <span>{city}</span>
            <span>{travel_destination}</span>
        </div>
    )

}

export default CustomerComponent;