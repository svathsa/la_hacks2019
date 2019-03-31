import React, { Component } from 'react';
import Navbar from './Navbar'
import TeamButtons from './TeamButton'
import firebase from 'firebase'
import AddTeam from './AddTeam'
import { BrowserRouter } from 'react-router-dom'
import './Home.css'

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            teams: []
        };
        this.addTeam = this.addTeam.bind(this)

    }

    
    addTeam = (team) => {
        
    if(!this.state.teams.includes(team)){
    let teams = [...this.state.teams, team];
    this.setState({
        teams
    });
    }
    }

    componentDidMount(){
        const refer= this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref('Teams/').once('value').then(async(snapshot)=> {
                    console.log(snapshot.val());
                    let teamResult= await snapshot.val();
                    mapObject(teamResult, function (key, value) {
                        console.log(value);
                        console.log("UID "+user.uid);
                        console.log("Lead "+value.lead);

                        if(value.lead==user.uid){
                            refer.addTeam(value);
                        }
                             
                    })
                });
            } else {
              // No user is signed in.
            }
          });
    }

    render() {
            return(
            <div className="home">
                <BrowserRouter><Navbar /></BrowserRouter>
                <div className = "homepage">
                    <p id = "myteams">
                        My Teams
                    </p>
                    <div className="buttonwrapper">
                        <TeamButtons teams={this.state.teams} />
                        <AddTeam addTeam={this.addTeam} />
                            {/* < TeamButtons />
                            < TeamButtons />
                            <button type="button" className="teamButton" id="teamButtonText" data-toggle="modal" data-target="#exampleModalCenter">
                                + Add Team
                            </button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

