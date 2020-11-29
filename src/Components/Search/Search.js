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
              <AwesomeButton type="secondary">
                <Link to="/search">Search</Link>
              </AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
