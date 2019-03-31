import React, { Component } from 'react';
import LeadPage from './LeadPage';
import './RoleSuggestions.css';
import Navbar from './Navbar';
import firebase from 'firebase';



class RoleSuggestions extends Component {

    AddRoleToDatabase(roleName) {  
        // var tempObj;
        // var roles = firebase.database().ref('Teams/' + this.props.teamid + '/roles');
        // roles.once('value', function(snapshot) {
        //     console.log(snapshot.val());
            
        // }).then((snapshot) => {
        //     tempObj=snapshot.val();
        // })      

        // var finalObj= [...tempObj,];
        firebase.database().ref('Teams/' + this.props.teamid + '/roles/').once('value').then((snapshot)=> {
            console.log(snapshot.val());
            if(!snapshot.hasChild(roleName))
            {
                var updates = {};
                updates['Teams/' + this.props.teamid + '/roles/'+roleName] = "";
                firebase.database().ref().update(updates);
                window.location.reload();
            }
        });
        
        // firebase.database().ref('Teams/' + this.props.teamid).set({
        //             rolename: ""
        //         },
        //         (error) => {
        //             if (error) {
        //               console.log("Error!");
        //             } else {
        //                 console.log("created role successfully!")
        //             }
        //           });
    }
    
    render() {
        console.log(this.props);
        return(
            <div className="parent-container">
               <ul class="list-group">
                <li class="list-group-item"><button className="role"  onClick={this.AddRoleToDatabase.bind(this,"Producer")}>Producer</button></li>
                <li class="list-group-item"><button className="role" onClick={this.AddRoleToDatabase.bind(this,"Director")}>Director</button></li>
                <li class="list-group-item"><button className="role"  onClick={this.AddRoleToDatabase.bind(this,"Actor")}>Actor</button></li>
                <li class="list-group-item"><button className="role" onClick={this.AddRoleToDatabase.bind(this,"Writer")}>Writer</button></li>
                <li class="list-group-item"><button className="role"  onClick={this.AddRoleToDatabase.bind(this,"Editor")}>Editor</button></li>
                <li class="list-group-item"><button className="role"  onClick={this.AddRoleToDatabase.bind(this,"Cinematographer")}>Cinematographer</button></li>
                <li class="list-group-item"><button className="role" onClick={this.AddRoleToDatabase.bind(this,"Stuntman")}>Stuntman</button></li>
                <li class="list-group-item"><button className="role"  onClick={this.AddRoleToDatabase.bind(this,"Make-up Artist")}>Make-up Artist</button></li>
                <li class="list-group-item"><button className="role" onClick={this.AddRoleToDatabase.bind(this,"Music Director")}>Music Director</button></li>
               </ul>
            </div>
        )
    }
}

export default RoleSuggestions