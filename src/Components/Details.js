import { Component } from "react";

class  Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'This is the product page',
          };
    }
    state = {  }
    render() { 
        return ( <>{this.state.title}</> );
    }
}
 
export default Details;