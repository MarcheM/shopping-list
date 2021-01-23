import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBvCLwbzli3TBLLLLm2CQo9_mRCwKPlyVI",
  authDomain: "shopping-list-a0087.firebaseapp.com",
  databaseURL: "https://shopping-list-a0087-default-rtdb.firebaseio.com",
  projectId: "shopping-list-a0087",
  storageBucket: "shopping-list-a0087.appspot.com",
  messagingSenderId: "1080056262164",
  appId: "1:1080056262164:web:664a905809c446225ec101"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DATABASE_URL = firebaseConfig.databaseURL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

