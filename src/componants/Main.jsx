import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [searchText, setSearchText] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const handeChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setIsClick(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyCb9wIonolYk8PeffSFiljanOo0eGGTr18&maxResults=40`
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Books</h2>
          <div>
            <form onSubmit={hanldeSubmit} className="search" action="">
              <input
                type="text"
                onChange={handeChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter Your Book Name"
                name=""
                id=""
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <img src="./img/im.png" alt="" />
        </div>
      </div>

      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
}

export default Main;
