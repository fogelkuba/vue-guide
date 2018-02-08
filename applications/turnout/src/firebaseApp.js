import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD6wbvnpA1NJyeCJiynrTpJdlLMUGLgt_I",
  authDomain: "turnout-39b13.firebaseapp.com",
  databaseURL: "https://turnout-39b13.firebaseio.com",
  projectId: "turnout-39b13",
  storageBucket: "",
  messagingSenderId: "191172565806"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');
