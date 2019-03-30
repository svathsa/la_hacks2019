import React, { Component } from 'react';
import Navbar from './Navbar'

class Home extends Component {
    render() {
        return(
            <div class="home">
                <Navbar />
                <h4 className="center">Home</h4>
            </div>
        )
    }
}

export default Home