import React, { Component } from 'react';
// import React from 'react'; // why it cant be this?
import axios from 'axios';

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            registrationErrors: ""
        }
        // A placeholder for handleSubmit
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            // getting the name from the input section below and set the value dynamically
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        console.log("Form submitted")
        // data has to be passed into as an object to be updated in the backend
        axios.post("http://localhost:3000/users", {
            user: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        },
            // { withCredentials: true }
            // tell API that's ok to set that cookie on our client
            // or else it would look like the user is not logged in
        ).then(response => {
            console.log("registration response");
        }).catch(error => {
            console.log("registration error", error);
        })


        // to prevent form  try to behave like a HTML form
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />


                    <button type="submit"> Register </button>

                </form>
            </div>
        )
    }

}