import React, { Component } from 'react';
import Navbar from './Navbar'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <Navbar />
                <div className = "homepage">
                    <p id = "myteams">
                        My Teams
                    </p>
                    <div className="buttonwrapper">
                        <a className="teamNameButton" id = "teamButtonText" href = "#">Team name 1</a>
                        <a className="teamNameButton" id = "teamButtonText"  href = "#">Team name 2</a>
                        <a className="teamNameButton" id = "teamButtonText" href = "#">Team name 2</a>
                        <a className="teamNameButton" id = "teamButtonText" href = "#">Team name 3</a>
                        <button type="button" className="teamButton" id="teamButtonText" data-toggle="modal" data-target="#exampleModalCenter">
                            + Add Team
                        </button>
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