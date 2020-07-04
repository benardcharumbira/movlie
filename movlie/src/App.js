import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchData } from "./api/index";
import Form from "../src/Components/Form/Form";
import Spinner from "../src/Components/Spinner/Spinner";
import MovieList from "./Components/MovieList/MovieList";

class App extends React.Component {
  state = {
    data: [],
  };

  getMovie = async (event) => {
    event.preventDefault();
    const movieName = event.target.elements.movieName.value;

    const response = await fetchData(movieName);

    setTimeout(
      this.setState({
        data: response.Search,
      }),
      10000
    );

    // console.log(response.Search);
  };

  render() {
    let movieList = <Spinner />;

    return (
      <div className="App">
        <h1>Movie Search</h1>
        <Form getMovie={this.getMovie} />

        <MovieList movies={this.state.data} />
      </div>
    );
  }
}

export default App;
