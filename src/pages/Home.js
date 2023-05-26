import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Aquilombar.se </h1>
        <p> Um local seguro para comunicar sua verdade</p>
        <Link to="/menu">
          <button> Compartilhe agora! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;