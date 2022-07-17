import React, { useState, useEffect } from "react";
import axios from "axios";

import "./GalleryPage.css";

function Gallery() {
  const [fullWidth, setFullWidth] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [bigImageUrl, setBigImageUrl] = useState("");
  useEffect(() => {
    getGallery();
  }, []);

  const expandPic = (e) => {
    setFullWidth(!fullWidth);
    setBigImageUrl(e.filename);
    console.log(e);
  };

  const closeImage = () => {
    setFullWidth(false);
    setBigImageUrl("");
  };

  const getGallery = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/getimages`)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="gallerypage-container">
      <h1>Gallery</h1>
      <div className="pics-section">
        {gallery.length >= 1 &&
          gallery.map((pic) => {
            return (
              <img
                onClick={() => expandPic(pic)}
                crossOrigin="anonymous"
                className="pics"
                key={pic._id}
                src={`${process.env.REACT_APP_BACKEND_URL}/images/${pic.filename}`}
                alt="pic"
              />
            );
          })}
      </div>
      <div className={fullWidth ? "big-pic" : "big-pic hidden"} onClick={closeImage}>
        <img
          crossOrigin="anonymous"
          src={`${process.env.REACT_APP_BACKEND_URL}/images/${bigImageUrl}`}
          alt="pic"
          
        />
      </div>
    </section>
  );
}

export default Gallery;
