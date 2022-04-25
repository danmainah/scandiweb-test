import Cart from "./Cart";
import { Component } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'This is the navbar',
          };
    }
    state = {  }
    render() { 
        return (
            <>
                <h2>{this.state.title}</h2>
                <Cart />
            </>);
    }
}
 
export default Navbar;