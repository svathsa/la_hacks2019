import React, { Component } from 'react';
import './TeamMember.css'
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

class TeamMember extends Component {

    constructor(props){
		super(props);
		this.state={id: this.props.id, name: "", role: "", photoURL: ""};
    }
    
    componentDidMount(){
        firebase.database().ref('Users/'+this.state.id).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let user= await snapshot.val();
            this.setState({
                id: this.props.id, 
                name: user.name,
                role: user.role,
                photoURL: user.photoURL
            })
        });
    }

    render() {
        return(
            <div class="teamcard">
                <img class="card__image teamimage" src={this.state.photoURL} alt=""/>
                <div class="card__content">
                    <div class="card__title">{this.state.name}</div>
                    <p class="card__text">{this.state.role}</p>
                    <button class="btn btn--block card__btn">view</button>
                </div>
            </div>
        )
    }
}

export default TeamMember