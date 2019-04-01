import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

class SingleTeamButton extends Component {
    state = {
        userid: null
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user!=null)
            this.setState({
                userid: user.uid
            });
        })
        // console.log("Heres")
        // console.log(this.props);
    }

    render() {
        var refer=this;
        var singleteambutton = (refer.props.team.value.lead == refer.state.userid) ?
            (
                <Link to={"/leadpage/"+refer.props.team.key} key={"/leadpage/"+refer.props.team.key} className="center teamNameButton" id="teamButtonText">{refer.props.team.value.name}</Link>
            )
        : 
            (
                <Link to={"/teampage/"+refer.props.team.key} key={"/teampage/"+refer.props.team.key} className="center teamNameButton" id="teamButtonText">{refer.props.team.value.name}</Link>
            )
    return(
        <div className="container teamButtonContainer buttonwrapper">
            {singleteambutton}
        </div>
    )
}
}

export default SingleTeamButton