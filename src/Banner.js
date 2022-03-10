import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="text"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a differnet kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="text" onClick={() => navigate("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
