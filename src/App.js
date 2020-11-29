import React, { Component } from "react";

//import css
import "./App.css";

//import components
import View from "./Components/View/View";
import { Navbar, Nav } from "react-bootstrap";
import Header from "./Components/Header";

class App extends Component {
  state = {
    events: {},
  };

  //fetching data from api
  componentDidMount = async () => {
    const url = `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ events: data }));
  };
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 align-self-center">
                <h1>KonFhub</h1>
              </div>
            </div>
          </div>
        </div>
        <View events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default App;
