import React, { Component } from 'react';
import './SuggestionPane.css'
import SuggestionProfileCard from './SuggestionProfileCard'
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
  
class SuggestionPane extends Component {

    
    constructor(props){
		super(props);
		this.state={matches: []};
    }
    
    componentDidMount(){
        firebase.database().ref('Users').once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let roleResult= await snapshot.val();
            console.log(roleResult);
           this.setState({
               matches: roleResult
           })
        });
    }
	
  render () {
      var refer=this;
    return (
    	<div className="card">
            <div className="roleName">
                <h4> Suggestions For {refer.props.role}</h4>
            </div>
            <div className= "profileCardContainer">
                {mapObject(refer.state.matches, function (key, value) {
                    if(value.role==refer.props.role)
                                    return <SuggestionProfileCard key={key} id={key} team={refer.props.teamID} role={refer.props.role}/>;
                                })}
            </div>
		</div>
	);
  }
}

export default SuggestionPane
