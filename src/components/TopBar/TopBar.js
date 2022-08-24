import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topBar">
        <h3>Free shipping on all orders over € 30,-! <Link to="/shop">Shop now</Link> or <Link to="/">start building your own candle</Link>!</h3>
    </div>
  )
}

export default TopBar;