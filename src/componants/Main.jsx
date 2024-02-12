import React from "react";

function Main() {
  return (
    <div className="header">
      <div className="row1">
        <h1>
          A room without books is like
          <br /> a body without a soul
        </h1>
      </div>
      <div className="row2">
        <h2>Find Your Books</h2>
        <div className="search">
          <input type="text" placeholder="Enter Your Book Name" name="" id="" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <img src="./img/im.png" alt="" />
      </div>
    </div>
  );
}

export default Main;
