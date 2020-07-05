import React from "react";

export const fetchData = (movieName) => {
  const data = fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
  ).then((resp) => {
    return resp.json();
  });
  return data;
};

const apiKey = "e7799b7a";

class movieDetails extends React.Component {
  state = {
    activeMovie: [],
  };

  componentDidMount = () => {
    const movieName = this.props.location.state.movie;
    const req = fetch(
      `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
    ).then((resp) => {
      this.setState({ activeMovie: resp });
      return resp.json();
    });
    console.log(this.state.activeMovie);

    return console.log(req);
  };

  render() {
    return (
      <div>
        <p>Movie Details</p>
      </div>
    );
  }
}

export default movieDetails;
