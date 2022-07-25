import React from "react";

const ContactCard = (props) => {
    const { name, email } = props.contact;
    return (
        <tr>
            <th scope="row" key={name}>
            1
            </th>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
        </tr>
    );
}

export default ContactCard;