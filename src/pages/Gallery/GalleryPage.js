import React, {useState, useEffect} from "react";
import axios from "axios";

import "./GalleryPage.css";


function Gallery() {
  const [gallery, setGallery] = useState([])
  useEffect(()=>{
    getGallery()
  }, [])

  const getGallery = () =>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getimages`)
    .then((res)=>{
      setGallery(res.data)

    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <section className="gallerypage-container">
      <h1>Gallery</h1>
      <div className="pics-section">
        {
         gallery.length >= 1 && gallery.map((pic)=>{
            return(
              <img crossOrigin="anonymous" className="pics" key={pic._id} src={`${process.env.REACT_APP_IMG_URL}${pic.filepath}`} />
            
            )
          })
        }
        
      </div>
    </section>
  );
}

export default Gallery;
