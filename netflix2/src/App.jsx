import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";

import ComponentNavbar from "./components/navbar";
import ComponentSubNav from "./components/subnavbar";
import TvShows from "./components/tvshows";

import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        {" "}
        <BrowserRouter>
          <ComponentNavbar />
          <ComponentSubNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TvShows />} />
          </Routes>{" "}
          <Footer />{" "}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
