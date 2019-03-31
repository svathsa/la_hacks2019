import React, { Component } from 'react';
import './SuggestionProfileCard.css'
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }

class SuggestionProfileCard extends Component {

    constructor(props){
		super(props);
        this.state={id: this.props.id, name: "", email: "", photoURL: ""};
        this.addToTeam=this.addToTeam.bind(this);
    }
    
    componentDidMount(){
        firebase.database().ref('Users/'+this.state.id).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let user= await snapshot.val();
            this.setState({
                id: this.props.id, 
                name: user.name,
                email: user.email,
                photoURL: user.photoURL
            })
        });
    }

    addToTeam(){
        var refer=this;
        firebase.database().ref('Teams/'+refer.props.team+'/roles/'+refer.props.role).once('value').then(async (snapshot)=>{
            console.log(snapshot.val());
            let result= await snapshot.val();
            var found = false;
            mapObject(result, function (key, value) {
                if(value==refer.state.id)
                    found=true;
                })
            if(found==false)
            {
                var updates ={};
                var date = new Date();
                var timestamp = date.getTime();
                var uniqueid= timestamp.toString();
                updates['Teams/'+refer.props.team+'/roles/'+refer.props.role+'/'+uniqueid]=refer.state.id;
                firebase.database().ref().update(updates);
                window.location.reload();
            }
        });
    }

    render() {
        var refer=this;
        return(
                <div className="card profile-card" id="profile-card">
                    <div className="card-body row">
                            <img className="profile-card-image" src={refer.state.photoURL} alt="Card image cap" />
                    </div>
                    <div className="col-md-8">
                        <p className="card-text">{refer.state.name}</p>
                    </div>
                    <div className="col-md-1">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div className="col-md-1">
                        <i class="fas fa-plus" onClick={refer.addToTeam} ></i>
                    </div>
                </div>
        )
    }
}

export default SuggestionProfileCard