import React, { Component } from 'react';
import './style.scss';

class TemplateCard extends Component {

    constructor(props){
		super(props);
		this.state={name: "Kanye"};
    }
  render () {
    return (
    	<div className="card">
			<p>Lorem Ipsum </p>
            <p> {this.state.name} </p>
		</div>
	);
  }
}

export default TemplateCard;