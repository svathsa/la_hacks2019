import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <a className="nav-link" href="#"><span className ="homebrand">Home</span></a>
                    </ul>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <i className="fas fa-bars fa-lg"></i>
                    </button>
                    <div
                    id="navbarNavDropdown"
                    className="navbar-collapse collapse">
    <ul className="navbar-nav navbar-right ml-auto">
        <li className="nav-item">
            <a
            className="nav-link"
            href="{{ url('/login') }}">
                <i className="fas fa-bell fa-lg"></i>
            </a>   
        </li>
        <li className="nav-item">
            <a
            className="nav-link"
            href="{{ url('/register') }}">
                <i className="fas fa-envelope fa-lg"></i>
            </a>
        </li>

    <li className="nav-item dropdown">
    <a
    className="nav-link dropdown"
    href="#"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false">
    <i className="fas fa-user fa-lg"></i>
    </a>

    <div
    className="dropdown-menu dropdown-menu-right"
    aria-labelledby="navbarDropdownMenuLink">

    <a
    className="dropdown-item"
    href="#">View profile</a>

    <a
    className="dropdown-item"
    href="#">Edit profile</a>

    <div
    className="dropdown-divider"></div>

    <a
    className="dropdown-item"
    href="#">Logout</a>

    </div>

    </li>

    </ul>

    </div>

    </nav>
            </div>
        )
    }
}

export default Navbar
