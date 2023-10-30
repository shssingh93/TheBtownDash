import React, { useState } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import MovieSource from "./MovieSource";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ordersearchstyle.css"




function OrderSearch() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (         
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          TRACK PACKAGE
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
      <Link to="/location-track" style={{ textDecoration: "none" }}>
    <button className="location-button"> Check Live Location <FiArrowRight />{" "}</button>
  </Link>
    </div>

    
  );
}

export default OrderSearch;