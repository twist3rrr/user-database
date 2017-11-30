// Firebase
import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAccsybn5ALcUl66cSxx66VzFg2Ow1votE',
    authDomain: 'user-database-bb810.firebaseapp.com',
    databaseURL: 'https://user-database-bb810.firebaseio.com',
    projectId: 'user-database-bb810',
    storageBucket: 'user-database-bb810.appspot.com',
    messagingSenderId: '827886118485'
};

export const firebaseApp = firebase.initializeApp(config);
