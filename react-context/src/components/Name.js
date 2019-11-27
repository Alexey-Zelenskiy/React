import React, {Component} from 'react';
import MyContext from "./Context";

class Name extends Component {
  render() {
    return (
      <div className="name">
        My name is {this.context.name} , age {this.context.age}
      </div>
    )
  }
}
Name.contextType = MyContext;

export default Name;