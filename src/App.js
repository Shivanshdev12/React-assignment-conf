import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router";

//import css
import "./App.css";
import "react-awesome-button/dist/styles.css";

//import components
import Free from "./Components/Free/Free";
import Paid from "./Components/Paid/Paid";

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
                <h1 className="App">KonFhub</h1>
                <AwesomeButton type="secondary">
                  <Link to="/search">Search</Link>
                </AwesomeButton>
              </div>
            </div>
          </div>
        </div>
        <Free events={this.state.events} />
        <Paid events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default App;
