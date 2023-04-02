import React, { useState } from "react";
import "./Restaurant.css";

const Restaurant = () => {
  const [showBox, setShowBox] = useState(false);
  const [longBox, setLongBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleToggleBoxLength = () => {
    setLongBox(!longBox);
  };

  return (
    <div className="container">
      <div
        className={`info-box ${longBox ? "long-box" : "short-box"}`}
        onClick={handleClick}
      >
        <h2>Restaurant Name</h2>
        {longBox ? (
          <>
            <p>
              Address: 123 Street, Boston MA
            </p>
            <p>Price: $ - $$$</p>
            <p>Commute from NEU Campus: 10 Minutes</p>
            <p>Image</p>
          </>
        ) : (
          <p>Type of Cuisine</p>
        )}
        <button onClick={handleToggleBoxLength}>
          {longBox ? "Hide Info" : "Show Info"}
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
