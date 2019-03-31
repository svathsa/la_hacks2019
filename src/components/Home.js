import React, { Component } from 'react';
import Navbar from './Navbar'
import RoleCard from './RoleCard';

class Home extends Component {
    render() {
        return(
            <div class="home">
                <Navbar />
                <h4 className="center">Home</h4>
                <RoleCard teamName="team1" role="role1" />
            </div>
        )
    }
}

export default Home