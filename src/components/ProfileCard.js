import React, { Component } from 'react';
import './ProfileCard.css'
import { Link } from 'react-router-dom';
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

class ProfileCard extends Component {

    constructor(props){
		super(props);
        this.state={id: this.props.id, name: "", email: "", photoURL: ""};
        this.removeFromTeam= this.removeFromTeam.bind(this);
    }
    
    componentDidMount(){
        firebase.database().ref('Users/'+this.state.id).once('value').then(async(snapshot)=> {
            console.log(snapshot.val());
            let user= await snapshot.val();
            this.setState({
                // TODO: ERROR IS CAUSED HERE
                id: this.props.id, 
                name: user.name,
                email: user.email,
                photoURL: user.photoURL
            })
        });
    }

    removeFromTeam(){
        var refer=this;
        firebase.database().ref('Teams/'+refer.props.team+'/roles/'+refer.props.role).once('value').then(async (snapshot)=>{
            console.log(snapshot.val());
            let result= await snapshot.val();
            var found = false;
            var goldenkey;
            mapObject(result, function (key, value) {
                if(value==refer.state.id){
                    found=true;
                    goldenkey=key;
                }
                })
            if(found==true)
            {
                var updates ={};
                updates['Teams/'+refer.props.team+'/roles/'+refer.props.role+'/'+goldenkey]=null;
                firebase.database().ref().update(updates);
                window.location.reload();
            }
        });
    }

    render() {
        var refer=this;
        var text='mailto:' + refer.state.email;
        return(
                <div className="card profile-card" id="profile-card">
                    <div className="card-body row">
                            <img className="profile-card-image" src={this.state.photoURL} alt="Card image cap" />
                    </div>
                    <div className="col-md-8">
                        <Link to={"/profile/"+refer.state.id}><p className="card-text">{this.state.name}</p></Link>
                    </div>
                    <div className="col-md-1">
                        <a href={text}>
                        <i class="far fa-envelope" >
                        
                        </i>
                        </a>
                    </div>
                    <div className="col-md-1">
                        <i class="fas fa-trash" onClick={refer.removeFromTeam}></i>
                    </div>
                </div>
        )
    }
}

export default ProfileCard