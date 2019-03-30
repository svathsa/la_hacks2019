import React, { Component } from 'react';
import Navbar from './Navbar'

class ProfilePage extends Component {
    state = {
        profile: null
    }
    componentDidMount() {
        let id = this.props.match.params.profile_id;
        // API Call to find data using the id above 
        // Store result of query in a variable called user
        // DONT REMOVE COMMENTED CODE BELOW
        this.setState({
            profile: {
                first_name: 'Neeraj',
                last_name: 'Samtani',
                age: 18
            }
        })
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        //     .then(res => {
        //         this.setState({
        //             post: res.data
        //         })
        //     })
    }
    render() {
        const post = this.state.profile ? (
            <div className="profile">
                <Navbar />
                <img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt=""/>
                <h4 className="center">{this.state.profile.first_name} {this.state.profile.last_name}</h4>
                <p>{this.state.profile.age}</p>
                <p>Editor</p>
                <p>Age</p>
                <p>Skills</p>
                <p>Education</p>
                <p>Work Experiences</p>
                <p>Links</p>
                <p>Zip Code</p>
            </div>
        ) : (
            <div className="center">Loading profile...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default ProfilePage