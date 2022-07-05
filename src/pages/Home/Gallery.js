import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import "./Gallery.css";
import { Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Gallery() {
  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios
      .get("http://localhost:3000/api/getimages")
      .then((res) => {
        setGallery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <section className="gallery-container">
      <h2>Gallery</h2>
      <div className="pics-section">
        {gallery.slice(0, 9).map((pic) => {
          return (
            <img
              crossOrigin="anonymous"
              className="pics"
              key={pic._id}
              src={`http://localhost:3000${pic.filepath}`}
            />
          );
        })}
      </div>
      <Button>
        See all photos <AiOutlineArrowRight />
      </Button>
    </section>
  );
}

export default Gallery;
