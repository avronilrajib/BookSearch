import React from "react";

function Card({ book }) {
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
              <div className="card" key={id}>
                <img src={tumbnails} alt="" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <h5>Publisher: {publisher}</h5>
                  {authors.map((author) => {
                    return <p>author: {author}</p>;
                  })}
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
