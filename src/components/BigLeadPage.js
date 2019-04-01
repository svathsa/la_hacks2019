import React, { Component } from 'react';
import LeadPage from './LeadPage';
import './BigProfilePage.css';
import Navbar from './Navbar';

class BigLeadPage extends Component {
    render() {
        let id = this.props.match.params.team_id;
        console.log(id);
        return(
            <div className="parent-container">
                <Navbar />
                <div className = "lead-page-container">
                <LeadPage teamid = {id} key = {id} />
                </div>
            </div>
        )
    }
}

export default BigLeadPage