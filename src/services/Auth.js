import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { cloudServiece} from './Cloud'

export class AuthServiece{
   constructor(){
     this.auth = getAuth(cloudServiece.app)
   }
   
   signUp(email,password){
     return createUserWithEmailAndPassword(this.auth, email, password)
   }
}
export const authServiece = new AuthServiece()