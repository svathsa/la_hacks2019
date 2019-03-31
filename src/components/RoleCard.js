import React, { Component } from 'react';
import './RoleCard.css'
import ProfileCard from './ProfileCard'
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'


function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }
  
class RoleCard extends Component {

    
    constructor(props){
		super(props);
		this.state={role: null};
    }
    
    componentDidMount(){
        firebase.database().ref('Teams/'+this.props.teamName+'/roles/'+this.props.role).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let roleResult= await snapshot.val();
           this.setState({
               role: roleResult
           })
        });
    }
	
  render () {
    return (
    	<div className="card">
            <div className="roleName">
                <h4> {this.props.role}</h4>
            </div>
            <div className= "profileCardContainer">
                {mapObject(this.state.role, function (key, value) {
                                    return <ProfileCard key={key} id={value} />;
                                })}
            </div>
            <button onClick = {this.props.parentFunction}> Add Member </button>
		</div>
	);
  }
}

export default RoleCard
