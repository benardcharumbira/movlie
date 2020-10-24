import React, { useState, useEffect } from "react";
import "./MovieDetails.css";

const apiKey = "e7799b7a";

const MovieDetails = (props) => {
  const [activeMovie, setActiveMovie] = useState({});

  const getData = async () => {
    const id = props.location.movieId;
    console.log("id", id);
    const req = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
    ).then((resp) => {
      return resp.json();
    });

    setActiveMovie(req);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {activeMovie ? (
        <div>
          <h1>Movie Details</h1>
          <div className="content">
            <div className="leftContent">
              <img
                src={activeMovie.Poster}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="rightContent">
              <h5 className="title">{activeMovie.Title}</h5>
              <p className="released">Released: {activeMovie.Released}</p>
              <p className="director">Director: {activeMovie.Director}</p>
              <p className="actors">Actors: {activeMovie.Actors}</p>
              <p className="awards">Awards: {activeMovie.Awards}</p>
              <p className="plot">Plot: {activeMovie.Plot}</p>
              <p className="ratings">Rated: {activeMovie.Rated}</p>
              <p className="genre">Genre: {activeMovie.Genre}</p>
            </div>
          </div>
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default MovieDetails;
