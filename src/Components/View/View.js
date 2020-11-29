import React, { Component } from "react";
import styles from "./View.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function remove(str) {
  return str.replace(/['"]+/g, "");
}

const View = (props) => {
  if (!props.events.paid)
    return (
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <h3>Loading!</h3>
      </div>
    );
  return (
    <div className="container">
      <div className="row">
        {props.events.free.slice(0, 24).map((res) => (
          <div className="col-sm-3 offset-sm-1">
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
                <p>StartDate:{res.confStartDate}</p>
                <AwesomeButton
                  type="primary"
                  href={res.confUrl}
                  className={styles.s}
                >
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

export default View;
