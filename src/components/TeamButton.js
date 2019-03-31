// import React, { Component } from 'react';

// class TeamButton extends Component {
//     render() {
//         return(
//             <div class="container teamButtonContainer buttonwrapper">
//                 <a className="center teamNameButton" id = "teamButtonText"  href = "#">Team Name</a>
//             </div>
//         )
//     }
// }

// export default TeamButton

import React from 'react';
import { Link } from 'react-router-dom';

const TeamButtons = ({teams}) => {
    const teamList = teams.length ? (
        teams.map(team => {
            return (
                <div className="container teamButtonContainer buttonwrapper" key={team.id}>
                    {/* <span className="center teamNameButton" id="teamButtonText" onClick={() => {alert(team.id)}}>{team.name}</span> */}
                    <Link to={"/team/"+team.id} className="center teamNameButton" id="teamButtonText">{team.name}</Link>
                </div>
            )
        })
    ) : (
        <p className="center">You are not in any team yet. Why not start one?</p>
    )
    return(
        <div className="teams collection">
            { teamList }
        </div>
    )
}

export default TeamButtons;