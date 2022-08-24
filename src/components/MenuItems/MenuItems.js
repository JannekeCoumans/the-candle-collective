import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../config/C4';

const MenuItems = ({ prefix }) => {
  const collections = [];
  products.map(i => {
    if (!collections.includes(i.collection)) {
      collections.push(i.collection);
    }
    return null;
  });
  
  return (
    <div className={`${prefix}menu-items`}>
      <Link to="/shop">
        Shop
      </Link>
      <div to="/our-story">
        Our Story
      </div>
      <div to="/build-your-own-candle" className="new">
        Build your own candle
      </div>
    </div>
  )
}

export default MenuItems;