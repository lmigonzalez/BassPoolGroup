import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import { Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate()	

  useEffect(() => {
    getGallery();
  }, []);


  console.log(process.env.REACT_APP_BACKEND_URL)

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


  const goToGalleryPage = () =>{
	navigate('/gallery')
  }


  return (
    <section className="gallery-container">
      <h2>Gallery</h2>
      <div className="pics-section">
        {gallery.length >= 1 && gallery.slice(0, 9).map((pic) => {
          return (
            <img
              crossOrigin="anonymous"
              className="pics"
              key={pic._id}
              src={`${process.env.REACT_APP_IMG_URL}${pic.filepath}`}
            />
          );
        })}
      </div>
      <Button onClick={goToGalleryPage}>
        See all photos <AiOutlineArrowRight />
      </Button>
    </section>
  );
}

export default Gallery;
