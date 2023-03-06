import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import SignInForm from "./components/SignIn/SignInForm";

import MovieHomeWrapper from "./components/Home/Home";
import Movie from "./components/Movie";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm/>} />
        <Route path="/browse" element={<MovieHomeWrapper />}></Route>
        {/* <Route path="/watch/:id" element={<Movie />}> hi</Route> */}
      </Routes>
      
    </Router>
  );
}

export default App;
