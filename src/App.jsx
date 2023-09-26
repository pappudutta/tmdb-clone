import React from "react";

import useMovies from "./hooks/useMovies";
import { BrowserRouter, Route, Router } from "react-router-dom";

const App = () => {
  const { data } = useMovies("/movie/popular");
  console.log(data);
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
};

export default App;
