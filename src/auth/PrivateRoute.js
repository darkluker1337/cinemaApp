import { appRoutes } from "../constants/appRoutes";
import { Component } from "../core"
import { authServiece } from "../services/Auth";

export class PrivateRoute extends Component{
   constructor(){
    super()
    this.isShadow = true;
   }
   
   static get observedAtrributes(){
     return ['path']
   }
   
   
   componentDidMount(){
    if(!authServiece.user){
     this.dispatch('change-route', {target: appRoutes[this.props ?? "signUp"]})
   }
   }
   
   render(){
    return `<slot></slot>`
   }
}

customElements.define('private-route',PrivateRoute)