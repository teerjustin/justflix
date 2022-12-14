import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SignInForm from "./components/SignIn/SignInForm";
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm/>} />
        <Route path="/browse" element={<Home />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
