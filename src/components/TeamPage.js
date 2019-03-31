import React, { Component } from 'react';
import Navbar from './Navbar'
import './TeamPage.css'
import TeamMember from './TeamMember';
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
  

class TeamPage extends Component {

    

    constructor(props){
        super(props);
        this.state= {
            ids: []
        }

        this.fetchData =this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        var refer=this;
        let id = this.props.match.params.team_id;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("Reached!");
                firebase.database().ref('Teams/'+ id+'/roles').once('value').then(async(snapshot)=> {
                    let teamResult= await snapshot.val();
                    console.log("TeamResult");
                    console.log(teamResult);
                    mapObject(teamResult, function (key, value) {
                        mapObject(value, function (dummy, userID) {
                            console.log("UID "+userID);
                            //add id to state
                            refer.setState({
                                ids: [...refer.state.ids, userID]
                            });
                            console.log("State");
                            console.log(refer.state);
                            
                        })
                             
                    })
                });
            } else {
              // No user is signed in.
            }
          })

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("Reached!");
                firebase.database().ref('Teams/'+ id + '/name').once('value').then(async(snapshot)=> {
                    let tempName= await snapshot.val();
                    refer.setState({
                        ids: refer.state.ids,
                        name: tempName
                    });
                    console.log("State");
                    console.log(refer.state);
                });
            } else {
              // No user is signed in.
            }
          })
    }

    render() {
        let id = this.props.match.params.team_id;
        console.log(id);
        return(
            <div class="team">
                < Navbar />
                <div class = "teamheader">
                    <h1>{this.state.name}</h1>  
                </div>
            <div class = "status"><i class="fas fa-check"></i></div>

            <ul class="cards">
                

                {console.log("State")}
                {console.log(this.state)}
                {this.state.ids.map((userid, i)=> 
                <li class="cards__item" key={i}> <TeamMember id={userid}/> </li>)}
                </ul>
            </div>
        )
    }
}

export default TeamPage