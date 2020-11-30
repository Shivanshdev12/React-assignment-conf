import React, { Component } from "react";
import styles from "./Free.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//remove extra quotes from imageURL
function remove(str) {
  var t = str.length;
  if (str.charAt(0) == '"') str = str.substring(1, t--);
  if (str.charAt(--t) == '"') str = str.substring(0, t);
  return str;
}

//Component Free
const Free = (props) => {
  if (!props.events.paid)
    return (
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <h3 style={{ textAlign: "center" }}>Loading!</h3>
      </div>
    );
  return (
    <div className="container">
      <h2>Free events</h2>
      <div className="row">
        {props.events.free.slice(0, 16).map((res) => (
          <div className="col-sm-3" key={res.conference_id}>
            <div className="card mr-2 mb-1">
              <img
                src={remove(res.imageURL)}
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
                <AwesomeButton type="primary" href={res.confUrl}>
                  Visit
                </AwesomeButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Free;
