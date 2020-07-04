import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";

const form = (props) => {
  return (
    <div className="searchForm">
      <form className="form-inline" onSubmit={props.getMovie}>
        <input
          className="form-control col-md-8"
          type="text"
          name="movieName"
        ></input>
        <button className="btn btn-info ml-2">Search</button>
      </form>
    </div>
  );
};

export default form;
