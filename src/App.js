import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import SignInForm from "./components/SignIn/SignInForm";

import MovieHomeWrapper from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm/>} />
        <Route path="/browse" element={<MovieHomeWrapper />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
