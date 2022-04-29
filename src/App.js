import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { AuthProvider } from './components/Authentication/authcontext';
import Login from './components/Authentication/Login';
import Signup from "./components/Authentication/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          < Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>

    </Router>
  );
}

export default App;
