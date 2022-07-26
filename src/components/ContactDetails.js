import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const ContactDetails = (props) => {

     console.log(props)
    const {name, email} = props.location.state.contact;

    return (
        <Card
            
        >
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>
                <CardText>
                    {email}
                </CardText>
                <Link to={'/'}>
                    <Button className="btn btn-success">
                        Back to Contact List
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
}

export default ContactDetails;