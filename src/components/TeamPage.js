import React, { Component } from 'react';
import Navbar from './Navbar'
import './TeamPage.css'

class TeamPage extends Component {
    render() {
        let id = this.props.match.params.team_id;
        console.log(id);
        return(
            <div class="team">
                < Navbar />
                <h4 className="center">TEAM {id}</h4>
                <div class = "header">
                    <h1>team name</h1>  
                </div>
            
            <div class = "status">
                <p>Insert team status here
                </p>
            </div>

                <ul class="cards">
                <li class="cards__item">
                    <div class="card">
                    <img class="card__image" src="https://static.thenounproject.com/png/17241-200.png" alt=""/>
                    <div class="card__content">
                        <div class="card__title">Insert Name</div>
                        <p class="card__text">Insert role</p>
                        <button class="btn btn--block card__btn">view</button>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
        )
    }
}

export default TeamPage