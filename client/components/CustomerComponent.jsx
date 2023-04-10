import React from "react";


// component returns a single row of customer data
const CustomerComponent = (props) => {
    const { first_name, last_name, email_address, phone_number, location, skill_lvl, destination } = props.info;
    return (
        <div className="customer">
            <span>{first_name}</span>
            <span>{last_name}</span>
            <span>{email_address}</span>
            <span>{phone_number}</span>
            <span>{location}</span>
            <span>{skill_lvl}</span>
            <span>{destination}</span>
        </div>
    )

}

export default CustomerComponent;