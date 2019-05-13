import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA3vvAsqGyP_c8RRkBh44JczzO9y1J0mNQ",
  authDomain: "shuttler-p001.firebaseapp.com",
  databaseURL: "https://shuttler-p001.firebaseio.com",
  projectId: "shuttler-p001",
  storageBucket: "shuttler-p001.appspot.com",
  messagingSenderId: "571374342123"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
