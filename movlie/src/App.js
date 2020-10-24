import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchData } from "./api/index";
import Form from "../src/Components/Form/Form";
import MovieList from "./Components/MovieList/MovieList";

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const response = await fetchData("Avengers");
    this.setState({
      data: response.Search,
    });
  };

  getMovie = async (event) => {
    event.preventDefault();
    const movieName = event.target.elements.movieName.value;

    const response = await fetchData(movieName);

    this.setState({
      data: response.Search,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Movie Search</h1>
        <Form getMovie={this.getMovie} />

        {this.state.data ? (
          <MovieList movies={this.state.data} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default App;
