import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCohHmu60YxXFiQgNLpKTX7c0rLzmR-E4s",
    authDomain: "fir-react-upload-64db6.firebaseapp.com",
    databaseURL: "https://fir-react-upload-64db6.firebaseio.com",
    projectId: "fir-react-upload-64db6",
    storageBucket: "fir-react-upload-64db6.appspot.com",
    messagingSenderId: "835093641798",
    appId: "1:835093641798:web:2923dcfe50b7bea5b9a847",
    measurementId: "G-GESMVD8995"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage , firebase as default}