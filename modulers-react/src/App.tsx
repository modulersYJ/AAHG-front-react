import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Home from "./components/Home";
import React from "react";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route element={<Home />} path="/" /> */}
            {/* <Route element={<SignUp />} path="sign-up" /> */}
            {/* <Route element={<About />} path="about" /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
