import React from "react";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <tr>
            <th scope="row">
                {id}
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