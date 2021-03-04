
import React, { Component } from 'react'
import { signUpUser } from '../Utils/api-utils.js';
export default class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSubmitButton = async e => {
        e.preventDefault();

        const user = await signUpUser(this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/todos');
    }

    render() {
        return (
            <div className="login">

                <h3>Sign Up</h3>

                <form onSubmit={this.handleSubmitButton}>
                    <label >
                        Email:
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>

                    <label >
                        Password:
                        <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Sign Up</button>
                </form>

            </div>
        )
    }
}