import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Image, priceHandler, CartHandler } from "../../config/C4";

const ProductCard = (props) => {
  const { add } = CartHandler();
  const { item } = props;
  const {
    title,
    id,
    price,
    additionalInfo: { short },
    thumbnail,
    url,
  } = item;

  return (
    <div className="product-card">
      <Link to={`/product/${url}`}>
        <Image src={`products/${thumbnail}`} alt={title} />
      </Link>
      <div className="product-card__text">
        <Link to={`/product/${url}`}>
          <h3>{title}</h3>
        </Link>
        <p className="shortDescription">{short}</p>
        <p className="price">€ {priceHandler(price)}</p>
        <button className="btn add-to-cart" onClick={() => add(id)}>
          Add to cart <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
