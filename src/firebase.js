import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD-cyH0nsppHS8LxzvRDG2J4JjpEqgh3yQ",
    authDomain: "lahacks2019-f8391.firebaseapp.com",
    databaseURL: "https://lahacks2019-f8391.firebaseio.com",
    projectId: "lahacks2019-f8391",
    storageBucket: "lahacks2019-f8391.appspot.com",
    messagingSenderId: "994574515028"
  };
  firebase.initializeApp(config);

  export default firebase;