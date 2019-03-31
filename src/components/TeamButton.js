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
import { userInfo } from 'os';
import SingleTeamButton from './SingleTeamButton'
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

const TeamButtons = ({teams}) => {
    const teamList = teams.length ? (
        teams.map(team => {
            return (
                <div className="container teamButtonContainer buttonwrapper" key={team.key}>
                    < SingleTeamButton team={team}/>
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