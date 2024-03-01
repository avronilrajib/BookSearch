import React, { useState } from "react";
import Modal from "./Modal";

function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState("");
  return (
    <>
      {book.map((item) => {
        let tumbnails =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title;
        let id = item.id;
        let publisher = item.volumeInfo.publisher;
        let authors = item.volumeInfo.authors;
        if (tumbnails != undefined && authors != undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true), setBookItem(item);
                }}
                key={id}
              >
                <img src={tumbnails} alt="" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <h5>Publisher: {publisher}</h5>
                  {authors.map((author) => {
                    return <p>author: {author}</p>;
                  })}
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
