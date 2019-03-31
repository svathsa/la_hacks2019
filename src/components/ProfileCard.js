import React, { Component } from 'react';
import './ProfileCard.css'
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

class ProfileCard extends Component {

    constructor(props){
		super(props);
		this.state={id: this.props.id, name: "", email: "", photoURL: ""};
    }
    
    componentDidMount(){
        firebase.database().ref('Users/'+this.state.id).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let user= await snapshot.val();
            this.setState({
                id: this.props.id, 
                name: user.name,
                email: user.email,
                photoURL: user.photoURL
            })
        });
    }

    render() {
        return(
                <div className="card profile-card" id="profile-card">
                    <div className="card-body row">
                            <img className="profile-card-image" src={this.state.photoURL} alt="Card image cap" />
                    </div>
                    <div className="col-md-8">
                        <p className="card-text">{this.state.name}</p>
                    </div>
                    <div className="col-md-1">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div className="col-md-1">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
        )
    }
}

export default ProfileCard