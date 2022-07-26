import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Add extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: ""
        };
    }

    addForm = (e) => {
        e.preventDefault();

        if(this.state.name === "" || this.state.email === "") {
            alert("All fields are Mandetory");
            return
        }

        this.props.contactHandler(this.state)
        this.setState({name: "", email: ""});
        // this.props.history.goBack();
        this.props.history.push("/")
    }

    render() {
        return (
            <Form onSubmit={this.addForm}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label className="me-sm-2" for="name"> Name </Label>
                    <Input name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </FormGroup>

                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label className="me-sm-2" for="email"> Email </Label>
                    <Input name="email" placeholder="Email Address" type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </FormGroup>

                <Button className="mb-2 mt-2">
                    Add
                </Button>
            </Form>
        );
    }
}

export default Add;