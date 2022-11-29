import { Component } from "./core";
import './components'
import { movieservices } from "./services/MovieServices";

export class App extends Component {
  
    constructor(){
      super()
      
      this.state = {
        movies: [],
        searchValue:'',
        selectedCategoty:'',
      }
    }
  
  componentDidMount(){
    movieservices.getAllMovies()
      .then((date)=>{
        this.setState((state)=>{
          return{
            ...state,
            movies:data
          }
        })
      })
  }
  
  render() {
    return `
      <div id="shell">
        <it-header></it-header>
        <movie-cart></movie-cart>
      </div>
    `
  }
}

customElements.define("my-app", App);
