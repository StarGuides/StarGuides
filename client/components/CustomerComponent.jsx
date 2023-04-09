import React from "react";


// component returns a single row of customer data
const CustomerComponent = (props) => {
    const { first_name, last_name, email_address, phone_number, location, start_date, end_date, skill_lvl, destination } = props.info;
    return (
        <div>
            <span>{first_name}</span>
            <span>{last_name}</span>
            <span>{email_address}</span>
            <span>{phone_number}</span>
            <span>{location}</span>
            <span>{start_date}</span>
            <span>{end_date}</span>
            <span>{skill_lvl}</span>
            <span>{destination}</span>
        </div>
    )

}

export default CustomerComponent;