import React, { Component } from 'react';
import Navbar from './Navbar'
import './TeamPage.css'
import TeamMember from './TeamMember';

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }
  

class TeamPage extends Component {
    render() {
        let id = this.props.match.params.team_id;
        console.log(id);
        return(
            <div class="team">
                < Navbar />
                <h4 className="center">TEAM {id}</h4>
                <div class = "teamheader">
                    <h1>team name</h1>  
                </div>
            
            <div class = "status">
                <p>Insert team status here
                </p>
            </div>

                <ul class="cards">
                <li class="cards__item">
                    <TeamMember id="oQU21vFIVYh98iajfZ2qeGkUskF3"/> {/*each member*/}
                </li>
                <li class="cards__item">
                    <TeamMember id="3XVYwVpuIcVjcm2u8Fejrp1AHXo1"/> {/*each member*/}
                </li>
                <li class="cards__item">
                    <TeamMember id="6X3oxHb4hKXCRxwlIvQbpKOXKjr2"/> {/*each member*/}
                </li>
                </ul>
            </div>
        )
    }
}

export default TeamPage