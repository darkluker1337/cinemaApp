import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "cinema-app-cb1f7.firebaseapp.com",
      projectId: "cinema-app-cb1f7",
      storageBucket: "cinema-app-cb1f7.appspot.com",
      messagingSenderId: "336276762016",
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
