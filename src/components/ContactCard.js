import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <tr>
            <th scope="row">
                {props.index}
            </th>
            <Link to={{pathname: `contact/${id}`, state: {contact: props.contact}}}>
                <td>
                    {name}
                </td>
            </Link>
            <td>
                {email}
            </td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={() => props.clickHandler(id)}>Delete</button>
            </td>
        </tr>
    );
}

export default ContactCard;