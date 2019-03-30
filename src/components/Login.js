import React, { Component } from 'react';
import logo from '../logo.png';
import './Login.css'
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
            <div class="login">
                <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src={logo} class="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <button type="button" name="button" class="btn login_btn">Login</button>
                    </div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

    
}

export default Login