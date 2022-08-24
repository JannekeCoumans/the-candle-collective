import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutlined } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ rating, reviewsAmount }) => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalfStroke} />
      <FontAwesomeIcon icon={faStarOutlined} />
    </React.Fragment>
  )
};

export default Stars;