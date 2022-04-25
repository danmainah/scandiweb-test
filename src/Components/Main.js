import Details from "./Details";
import { Component } from "react";

class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'This is the main page',
          };
    }
    state = {  }
    render() { 
        return (
            <>
                <h1>{this.state.title}</h1>
                <Details />
            </>);
    }
}
 
export default Main;