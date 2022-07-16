import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config={
  apiKey: "AIzaSyBWBK7FNTrUcpF5wpV-JAuuQrrpJHVXFME",
  authDomain: "chat-web-app-2f148.firebaseapp.com",
  databaseURL: "https://chat-web-app-2f148-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-2f148",
  storageBucket: "chat-web-app-2f148.appspot.com",
  messagingSenderId: "945346341684",
  appId: "1:945346341684:web:35b0629f1c3e3f51259361"
}


const app=firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();