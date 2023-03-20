import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignUp />} path="sign-up" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;