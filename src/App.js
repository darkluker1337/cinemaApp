import { Component } from "./core";
import './components/atoms/typography/headings/H1.js'

export class App extends Component {
  
    constructor(){
      super()
    }
  
  render() {
    return (
      `<it-h1>
        <div>h123</div>
        <div>h123</div>
        <div>h123</div>
        <div>h123</div>
        <div>h123</div>
        <div>h123</div>
      </it-h1>`
    )
  }
}

customElements.define("my-app", App);
