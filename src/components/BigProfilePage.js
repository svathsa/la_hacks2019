import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import './BigProfilePage.css';
import Navbar from './Navbar';

class BigProfilePage extends Component {
    render() {
        let id = this.props.match.params.profile_id;
        return(
            <div className="parent-container">
                <Navbar />
                <div className = "profile-page-container">
                <ProfilePage id = {id} />
                </div>
            </div>
        )
    }
}

export default BigProfilePage