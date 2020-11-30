import React, { Component } from "react";
import Header from "../Header/Header";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//css
import styles from "./Search.module.css";

class Search extends Component {
  state = {
    events: {},
    city: "Mumbai",
    free: [],
    paid: [],
  };
  //search city
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  };

  //fetch from api
  Search = async (e) => {
    e.preventDefault();
    const url = `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ events: data }));
  };

  //filter only entered city events
  filterstr(str) {
    if (str) {
      let res = str.filter((obj) => {
        return obj.city === this.state.city;
      });
      return res;
    }
  }
  //remove extra quotes from imageURL
  remove(str) {
    var t = str.length;
    if (str.charAt(0) == '"') str = str.substring(1, t--);
    if (str.charAt(--t) == '"') str = str.substring(0, t);
    return str;
  }
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 align-self-center">
                <h1>KonFhub</h1>
                <input
                  type="text"
                  placeholder="Search by city.."
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <button onClick={this.Search} className="mt-2 btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.filterstr(this.state.events.free)
              ? this.filterstr(this.state.events.free).map((res) => (
                  <div className="col-sm-4 offset-sm-1" key={res.conference_id}>
                    <div className="card mr-2 mb-1">
                      <img
                        src={this.remove(res.imageURL)}
                        className={styles.size}
                        alt="Image not available"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {res.confName < 15
                            ? `${res.confName}`
                            : `${res.confName.substring(0, 15)}...`}
                        </h5>
                        <p>StartDate : {res.confStartDate}</p>
                        <p>Location : {res.city}</p>
                        <p>Entry Type : {res.entryType}</p>
                        <AwesomeButton type="primary" href={res.confUrl}>
                          Visit
                        </AwesomeButton>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="row">
            {this.filterstr(this.state.events.paid) ? (
              this.filterstr(this.state.events.paid).map((res) => (
                <div className="col-sm-4 offset-sm-1" key={res.conference_id}>
                  <div className="card mr-2 mb-1">
                    <img
                      src={this.remove(res.imageURL)}
                      className={styles.size}
                      alt="Image not available"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {res.confName < 15
                          ? `${res.confName}`
                          : `${res.confName.substring(0, 15)}...`}
                      </h5>
                      <p>StartDate : {res.confStartDate}</p>
                      <p>Location : {res.city}</p>
                      <p>Entry Type : {res.entryType}</p>
                      <AwesomeButton type="primary" href={res.confUrl}>
                        Visit
                      </AwesomeButton>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h5 className="mt-3 ml-5">
                Click Search to find conferences in your city...
              </h5>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
