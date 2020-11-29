import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Search() {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 align-self-center">
              <h1 className="App">KonFhub</h1>
            </div>
            <input type="text" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
