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
    this.handleAdd=this.handleAdd.bind(this);
    }
    
    componentDidMount(){
        firebase.database().ref('Teams/'+this.props.teamName+'/roles/'+this.props.role).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let roleResult= await snapshot.val();
            console.log(roleResult);
           this.setState({
               role: roleResult
           })
        });
    }
  
    handleAdd()
    {
        this.props.parentCallback(this.props.role);
    }

  render () {
    var refer= this;
    return (
    	<div className="card">
            <div className="roleName">
                <h4> {refer.props.role}</h4>
            </div>
            <div className= "profileCardContainer">
                {mapObject(refer.state.role, function (key, value) {
                                    return <ProfileCard key={key} id={value} />;
                                })}
            </div>
            <button onClick = {refer.handleAdd}> Add Member </button>
		</div>
	);
  }
}

export default RoleCard
