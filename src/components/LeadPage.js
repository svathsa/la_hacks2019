import React, { Component } from 'react';
import Navbar from './Navbar';
import './LeadPage.css';
import firebase from 'firebase';
import RoleCard from './RoleCard';
import RoleSuggestions from './RoleSuggestions';
import SuggestionProfileCard from './SuggestionProfileCard';
import SuggestionPane from './SuggestionPane';

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }

class LeadPage extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            team: null,
            teamID: '',
            addRole: false
        }

        this.handleAddRole=this.handleAddRole.bind(this);
    }
    AddRoleToDatabase(roleName) {        
        firebase.database().ref('Teams/' + this.state.teamID + '/roles').set({
                    rolename: ""
                },
                (error) => {
                    if (error) {
                      console.log("Error!");
                    } else {
                        console.log("created role successfully!")
                    }
                  });
        this.handleRemoveRole();
        window.location.reload();
    }
    handleAddRole(event) {
        this.setState({
            addRole: true
        });
    }
    handleRemoveRole(){
        this.setState({
            addRole: false
        })
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
    const componentToBeRendered = this.state.addRole ? (
        <RoleSuggestions teamid = {this.state.teamID}  />
    ) : (
        <div></div>
    )
    const leadpage = this.state.team ? (
    
            <div className="outermost-container">
                <div className="lead-page-container">
                <div className="side-panel-container">
                    <div className="side-panel">
                     {mapObject(refer.state.team.roles, function (key, value) {
                         console.log(key)
                                return <div className="role-card-container"><RoleCard  teamName = {refer.state.teamID} role = {key}/></div>;
                            })}
                        
                    </div>
                    <button className="add-role-button" onClick={this.handleAddRole}>Add Card</button>

                    </div>
                    <div className="main-panel">
                            {componentToBeRendered}
    {/*<SuggestionPane role="role1" teamID={this.state.teamID}/>*/}
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
        <div className = "some-container">
            {leadpage}
        </div>
    )
    }
}

export default LeadPage