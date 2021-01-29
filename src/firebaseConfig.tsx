import firebase from 'firebase';
import { toast } from './toast';

const firebaseConfig = {
    apiKey: "AIzaSyDSv6KxIvP1ry9XeKB3T4e0aooMbzA8PWM",
    authDomain: "ion-petcharit.firebaseapp.com",
    projectId: "ion-petcharit",
    storageBucket: "ion-petcharit.appspot.com",
    messagingSenderId: "600994876688",
    appId: "1:600994876688:web:8c0e86722f770c583c2995",
    measurementId: "G-7S04NM6PTF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export async function loginUser(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    } catch (error) {
        console.log(error);
        toast(error.message, 4000);
        return false;
    }
}

export async function registerUser(email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        toast(error.message, 4000)
        return false
    }
}