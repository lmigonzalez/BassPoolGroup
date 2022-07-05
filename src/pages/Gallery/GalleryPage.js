import React, {useState, useEffect} from "react";
import axios from "axios";

import "./GalleryPage.css";

import photos from "../../img/pic.jpg";

function Gallery() {
  const [gallery, setGallery] = useState([])
  useEffect(()=>{
    getGallery()
  }, [])

  const getGallery = () =>{
    axios.get('http://localhost:3000/api/getimages')
    .then((res)=>{
      setGallery(res.data)
      console.log(gallery)

    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <section className="gallerypage-container">
      <h1>Gallery</h1>
      <div className="pics-section">
        {
          gallery.map((pic)=>{
            return(
              <img crossOrigin="anonymous" className="pics" key={pic._id} src={`http://localhost:3000${pic.filepath}`} />
            
            )
          })
        }
        
      </div>
    </section>
  );
}

export default Gallery;
