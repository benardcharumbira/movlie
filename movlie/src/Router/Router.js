import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} exact />
      <Route path="/MovieDetails/:id" component={MovieDetails} />
    </BrowserRouter>
  );
};

export default Router;
