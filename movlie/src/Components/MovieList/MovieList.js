import React from "react";
import "./MovieList.css";

const movieList = (props) => {
  const style = {
    width: "15rem",
    display: "flex",
  };
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((value) => (
          <div key={value.imdbID} className="col-md-4">
            <div className="cardStyling" style={{ marginBottom: "2rem" }}>
              <div className="card " style={style}>
                <img
                  src={value.Poster}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{value.Title}</h5>
                  <p className="card-text">Year: {value.Year}</p>
                  <a href="#" className="btn btn-primary">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default movieList;
