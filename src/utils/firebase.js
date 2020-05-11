import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD7CcXOO_-cft7B4eguZT_-J8AoX2mADzY",
    authDomain: "prueba-para-cosbiome-cli.firebaseapp.com",
    databaseURL: "https://prueba-para-cosbiome-cli.firebaseio.com",
    projectId: "prueba-para-cosbiome-cli",
    storageBucket: "prueba-para-cosbiome-cli.appspot.com",
    messagingSenderId: "218318931288",
    appId: "1:218318931288:web:98cae8caab8495e0f3d12d",
    measurementId: "G-FP96WPG9ST"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

