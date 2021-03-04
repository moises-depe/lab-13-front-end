import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <NavLink className='nav' to="/">Home</NavLink>
                {
                    this.props.user && this.props.user.token && <>
                        <NavLink className='nav' to="/todos">To Do's</NavLink>
                        <button onClick={this.props.handleLogout}>Sign out</button>
                    </>
                }
                {
                    (!this.props.user || !this.props.user.token) && <>
                        <NavLink className='nav' to="/login">Log In</NavLink>
                        <NavLink className='nav' to="/signup">Sign Up</NavLink>
                    </>
                }
            </div>
        )
    }
}