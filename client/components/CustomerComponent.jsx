import React from "react";

// component returns a single row of customer data
const CustomerComponent = (props) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    location,
    skill_lvl,
    park,
    state
  } = props.info;
//   console.log("inside child el", props.info);
  return (
      <tr>
      <td>{first_name} </td>
      <td>{last_name} </td>
      <td>{email} </td>
      <td>{phone} </td>
      <td>{park} </td>
      <td>{skill_lvl} </td>
      <td>{state} </td>
      </tr>

  );
};

export default CustomerComponent;
