import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCO_q82tpcQfkhnwtxgU77HEYy3eZ77sDE",
    authDomain: "react-sketch.firebaseapp.com",
    databaseURL: "https://react-sketch.firebaseio.com",
    projectId: "react-sketch",
    storageBucket: "react-sketch.appspot.com",
    messagingSenderId: "163836500724"
  };
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const provider2 =  new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;
