import React from 'react';
import './imageResult.css';
function ImageResult(props) {
  return (
    <div className='img-container'>
      {props.images.map(image => (
        <div className='img-bx' key={image.id}>
          <div className='img'>
            <img src={image.largeImageURL} alt='img' />
          </div>
        </div>
      ))}{' '}
    </div>
  );
}

export default ImageResult;
