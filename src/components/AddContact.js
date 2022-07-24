import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Add extends React.Component {

    render() {
        return (
            <Form>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                        className="me-sm-2"
                        for="name"
                    >
                        Name
                    </Label>
                    <Input
                        name="name"
                        placeholder="Full Name"
                        type="text"
                    />
                </FormGroup>

                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                        className="me-sm-2"
                        for="email"
                    >
                        Email
                    </Label>
                    <Input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                    />
                </FormGroup>

                <Button className="mb-2 mt-2">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Add;