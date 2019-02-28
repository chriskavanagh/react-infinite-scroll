import React from 'react';

const Image = ({image}) => (
    <img className='single-photo' src={image.urls.thumb} alt='' />
);

export default Image;