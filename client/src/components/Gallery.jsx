import React, { useContext } from 'react'
// import Button from 'react-bootstrap/Button';

import './gallery.css'
import { authContext } from '../context/authContext'


function Gallery() {
  const { uploadPhotos}= useContext(authContext)
  const handlePhotoUpload = (e) => {
    uploadPhotos(e.target.files);
  };


  return (
    <div>
      <div  class=" box-border text-center border-amber-900 h-48 my-4 mx-2 p-4 border-2 rounded-lg">
   <p className='text-center text-xl text-amber-900'>Your Memories</p>
   <p className='text-center mt-3'>Please Upload Your Smiley Face To Get Your Images From The Event Venue</p>
  
   <div class="upload-btn-wrapper">
  <button class="btn">Upload a file</button>
  <input type="file" multiple name="image" onChange={handlePhotoUpload}  />
</div>
  

  </div>
  
    </div>
  )
}

export default Gallery