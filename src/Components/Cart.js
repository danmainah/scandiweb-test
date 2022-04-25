import { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'This is the cart popup',
          };
    }
    state = { }
    render() { 
        return (<>{ this.state.title }</> );
    }
}
 
export default Cart;