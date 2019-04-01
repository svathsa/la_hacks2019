import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'
import './Navbar.css'

class Navbar extends Component {
    state = {
        userid: null
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user!=null)
            this.setState({
                userid: user.uid
            });
        })
    }
    logout(props) {
        props.history.push('/');
        firebase.auth().signOut().then(function() {
            console.log("Signed Out");
        })
        .catch(function(error) {
            console.log(error.message);
        })
    }
    render() {
        console.log("Render");
        console.log(this.props);
        return(
            <div className="navbar">
                <nav className="navbar-nav navbar-expand-lg">
                
                    <ul className="navbar-nav">
                        <Link to="/home" key="/home" className="nav-link" href="#"><span className ="homebrand">Filmly</span></Link>
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
                    <div className = "extra-box-fill"></div>
                    <div
                    id="navbarNavDropdown"
                    className="navbar-collapse collapse">

                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <a
                            className="nav-link"
                             href="#">
                        <i className="fas fa-bell fa-lg"></i>
                            </a>   
                        </li>
                     <li className="nav-item">
                            <Link to="/home" key="/home" className="nav-link">
                    <i className="fas fa-envelope fa-lg"></i>
            </Link>
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

    <Link to={"/profile/"+this.state.userid}
    className="dropdown-item"
    key={"/profile/"+this.state.userid}>
    View profile
    </Link>

    <Link to={"/editprofile/"+this.state.userid}
    className="dropdown-item"
    key={"/editprofile/"+this.state.userid}>
    Edit profile
    </Link>

    <div
    className="dropdown-divider"></div>

    <button onClick={
        () => {
            this.logout(this.props);
        }
          }
    className="dropdown-item"
    >Logout</button>

    </div>

    </li>

    </ul>

    </div>

    </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)