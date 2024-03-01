import React from "react";

function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let tumbnails =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let title = item.volumeInfo.title;
  let publisher = item.volumeInfo.publisher;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button onClick={onClose} className="close">
            x
          </button>
          <div className="inner-box">
            <img src={tumbnails} alt="" />
            <div className="info">
              <h1>{title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button>More..</button>
              </a>
            </div>
          </div>
          <h4 className="describtion">
            {item.volumeInfo.description.slice(0, 600)}
          </h4>
          <h4 className="describtion">
            {item.volumeInfo.description.slice(601, 1000)}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
