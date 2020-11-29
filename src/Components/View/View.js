import React, { Component } from "react";

const View = (props) => {
  if (!props.events.paid) return "Loading....";

  return (
    <div className="container">
      <div className="row">
        {props.events.paid.map((res) => (
          <div className="col-sm-4">
            <img src={res.imageURL} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
