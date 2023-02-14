import React from "react";
import ReactDOM from "react-dom/client";

//Every component can have its own data/state
class A extends React.Component {
  //properties
  state;

  //constructer
  constructor() {
    super();
    //State is the JS Object of the class which can hold the data
    this.state = { name: "Praven", surname: "Tarate", address: "Beed" };
  }

  //methods
  render() {
    //Updating the existing state
    this.setState({
      ...this.state,
      name:"Sandip"
    })
    return (
      <div>
        <h1>{this.state.name} {this.state.surname} {this.state.address}</h1>
        <h1>{this.props.name} {this.props.surname} {this.props.children}</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <A name="Onkar" surname="Kadam">
    Satara
  </A>
);
