import React, { Component } from 'react';
import './ProfileCard.css'

class ProfileCard extends Component {
    render() {
        return(
                <div className="card profile-card" id="profile-card">
                    <div className="card-body row">
                        <div className="col-md-1 justify-content-start align-items-center">
                            <img className="profile-card-image" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt="Card image cap" />
                        </div>
                        <div className="col-md-8">
                            <p className="card-text">This is some text within a card body.</p>
                        </div>
                        <div className="col-md-1">
                            <i class="far fa-envelope"></i>
                        </div>
                        <div className="col-md-1">
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ProfileCard