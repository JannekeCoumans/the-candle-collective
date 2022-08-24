import React from 'react';

const Image = ({ src, alt, className }) => {
  return (
    <img
      src={require(`../../assets/img/${src}`).default}
      alt={alt}
      className={`${className ? className : ''}`}
    />
  )
}

export default Image;