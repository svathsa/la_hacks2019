import React, { Component } from 'react';
import Navbar from './Navbar';
import './LeadPage.css';
import firebase from 'firebase';
import RoleCard from './RoleCard';

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }

class LeadPage extends Component {
    state = {
        team: null,
        teamID: ''
    }
    componentDidMount(){
        var teams = firebase.database().ref('Teams/' + this.props.teamid);
        teams.once('value', function(snapshot) {

            
        }).then((snapshot) => {
            this.setState({
                team: snapshot.val(),
                teamID: this.props.teamid
            })
            
        })
    }
    render() {
        var refer= this;
    const leadpage = this.state.team ? (
            <div className="outermost-container">
                <div className="lead-page-container">
                <div className="side-panel-container">
                    <div className="side-panel">
                     {mapObject(refer.state.team.roles, function (key, value) {
                         console.log(key)
                                return <RoleCard  teamName = {refer.state.teamID} role = {key}/>;
                            })}
                        
                    </div>
                    <button className="add-role-button">Add Card</button>

                    </div>
                    <div className="main-panel">
                    </div>
                </div>
            </div>
        
    ) : (
        <div className="center">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    )
    return (
        <div>
            {leadpage}
        </div>
    )
    }
}

export default LeadPage