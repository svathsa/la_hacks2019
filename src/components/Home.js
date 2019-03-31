import React, { Component } from 'react';
import Navbar from './Navbar'
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
                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Team Name</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                        <input type="text" className="form-control" id="message-name" />
                                        </div>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Create Team</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home