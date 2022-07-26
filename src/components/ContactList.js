import React from "react";
import {Link} from "react-router-dom"
import { Table } from "reactstrap";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard contact={contact} index={index + 1} clickHandler={deleteContactHandler} key={contact.id} />
        )
    });

    return (
        <div>
            <Link to="/add">
                <button className="btn btn-sm btn-primary add-contact">Add Contact</button>
            </Link>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderContactList}
                </tbody>
            </Table>
        </div>
    );
}

export default ContactList;