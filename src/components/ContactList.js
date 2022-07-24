import React from "react";
import { Table } from "reactstrap";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        )
    });

    return (
        <Table
        >
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderContactList}
            </tbody>
        </Table>
    );
}

export default ContactList;