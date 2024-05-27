import React, { useContext } from 'react';
import { authContext } from '../context/authContext';
import {  useNavigate } from 'react-router-dom';

function Photos() {
  
  const { photos} = useContext(authContext);
 const navigate=useNavigate()

 const handlePhotoClick = (photoId) => {
  navigate(`/comments/${photoId}`);
};

  
  console.log('Photos from context:', photos);
  console.log('Image URL:', photos.url);
  return (
    <div>
      <div className="mx-2 overflow-auto h-64 mb-10 grid grid-cols-4 md:grid-cols-4 gap-1">
        
          {Array.isArray(photos) && photos.length > 0 ? (
            photos.map((photo) => (
              <div className="grid gap-1">
               <div key={photo._id} className='hover:scale-110'onClick={() => handlePhotoClick(photo._id)} >
                <img    src={`http://localhost:4000${photo.url}`} className="h-auto max-w-full rounded-lg" alt="Event" />
              </div>
              </div>
              
            ))
          ) : (
            <p>No photos available.</p>
          )}
        
      </div>
    </div>
  );
}

export default Photos;
