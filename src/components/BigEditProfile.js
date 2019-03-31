import React, { Component } from 'react';
import EditProfile from './EditProfile';
import './BigEditProfile.css';
import Navbar from './Navbar';

class BigEditProfile extends Component {
    render() {
        let id = this.props.match.params.profile_id;
        return(
            <div className="parent-container">
                <Navbar />
                <EditProfile id = {id} />
            </div>
        )
    }
}

export default BigEditProfile