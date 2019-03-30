import React, { Component } from 'react'

class ProfilePage extends Component {
    // API Call to find data using the id above 
    // Store result of query in a variable called user
    // DONT REMOVE COMMENTED CODE BELOW
    render() {
        let id = this.props.match.params.profile_id;
        return (
            <div className="post">
                <img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt=""/>
                <h3 className="center">Jack Davidson</h3>
                <p>Editor</p>
                <p>Age</p>
                <p>Skills</p>
                <p>Education</p>
                <p>Work Experiences</p>
                <p>Links</p>
                <p>Zip Code</p>
            </div>
        )
    }
}

export default ProfilePage