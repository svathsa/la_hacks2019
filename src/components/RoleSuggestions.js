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
                <li class="list-group-item"><button className="role1"  onClick={this.AddRoleToDatabase.bind(this,"role1")}>Role 1</button></li>
                <li class="list-group-item"><button className="role2" onClick={this.AddRoleToDatabase.bind(this,"role2")}>Role 2</button></li>
                <li class="list-group-item"><button className="role3"  onClick={this.AddRoleToDatabase.bind(this,"role3")}>Role 3</button></li>
                <li class="list-group-item"><button className="role4" onClick={this.AddRoleToDatabase.bind(this,"role4")}>Role 4</button></li>
                <li class="list-group-item"><button className="role5"  onClick={this.AddRoleToDatabase.bind(this,"role5")}>Role 5</button></li>
               </ul>
            </div>
        )
    }
}

export default RoleSuggestions