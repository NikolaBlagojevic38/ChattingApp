import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCvGUhAftSi1R53vJ_23ASRPD2DPHPpIxs",
    authDomain: "police-hospital-chat.firebaseapp.com",
    databaseURL: "https://police-hospital-chat.firebaseio.com",
    projectId: "police-hospital-chat",
    storageBucket: "police-hospital-chat.appspot.com",
    messagingSenderId: "655716257020"
};
firebase.initializeApp(config);
export default firebase;
