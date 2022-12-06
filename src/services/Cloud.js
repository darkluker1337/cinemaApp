import {initializeApp} from "firebase/app";

export class CloudServiece{
  constructor(){
   
   this.config = {
    apiKey: process.env.API_KEY,
    authDomain: "online-cinema-c30d2.firebaseapp.com",
    projectId: "online-cinema-c30d2",
    storageBucket: "online-cinema-c30d2.appspot.com",
    messagingSenderId: "674121204021",
    appId: process.env.APP_ID,
    measurementId: "G-68BWZ511G1"
   }
   
   this.app = initializeApp(this.config)
  }
}

export const cloudServiece = new CloudServiece()