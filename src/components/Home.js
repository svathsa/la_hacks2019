import React, { Component } from 'react';
import Navbar from './Navbar'
import RoleCard from './RoleCard';
import TeamButtons from './TeamButton'
import AddTeam from './AddTeam'
import './Home.css'

class Home extends Component {
    state = {
        teams: [
          {'id':1, 'name':'Suraj\'s Team'},
          {'id':2, 'name':'Neeraj\'s Team'}
        ]
    }
    addTeam = (team) => {
    team.id = Math.random();
    let teams = [...this.state.teams, team];
    this.setState({
        teams
    });
    }
    render() {
        return(
            <div className="home">
                <Navbar />
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