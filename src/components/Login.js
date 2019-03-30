import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'

class Login extends Component {

    authHandler=async (authData) =>{
        console.log(authData);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = authData.credential.accessToken;
        // The signed-in user info.
        var user = authData.user;

        //if does not already exist, create a user and update database
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('Users').once('value').then((snapshot)=> {
            console.log(snapshot.val());
            if(!snapshot.hasChild(userId))
            {
                firebase.database().ref('Users/' + userId).set({
                    name: user.displayName,
                    email: user.email,
                    photoURL : user.photoURL,
                    education: "",
                    age: "",
                    role: "",
                    zip: "",
                    links: null,
                    skills: null, 
                    work_experience: null
                },
                (error) => {
                    if (error) {
                      console.log("Error!");
                    } else {
                        console.log("Data saved successfully!")
                    }
                  });
            }
        });
        
    }
    authenticate() {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler)
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error!");
            console.log(errorMessage);
          });;
    }
    render() {
        return(
            <div className="container home">
                <button 
                className="login"
                onClick={()=>this.authenticate()}
                >Login with Google
                </button>
            </div>
        );
    }

    
}

export default Login