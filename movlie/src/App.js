import React from "react";
import "./App.css";
import { fetchData } from "./api/index";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData.Search,
    });
    console.log("Movie data: ", this.state.data);
  }

  render() {
    const style = {
      width: "15rem",
      display: "flex",
    };
    const movieList = this.state.data.map((value) => (
      <div className="row container">
        <div className="col-md-4" style={{ marginBottom: "2rem" }}>
          <div className="card " style={style}>
            <img src={value.Poster} class="card-img-top" alt="..."></img>
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
    ));

    return (
      <div className="App  ">
        <h1>Movie Search</h1>
        {movieList}
      </div>
    );
  }
}

export default App;
