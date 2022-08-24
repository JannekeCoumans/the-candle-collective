import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CartHandler, Image, priceHandler, products } from "../../config/C4";

const ProductView = () => {
  const { pathname } = window.location;
  const slug = pathname.split("/product/")[1];
  const product = products.filter((i) => i.url === slug)[0];
  const {
    id,
    title,
    price,
    featured_image,
    additionalInfo: { short, description },
  } = product;
  const { add } = CartHandler();

  return (
    <div className="productView">
      <div className="productView__info">
        <Image
          src={`products/${featured_image}`}
          alt={title}
          className="productView__info--image"
        />
        <div className="productView__info--text">
          <h1>{title}</h1>
          <h2>{short}</h2>
          <div className="price">€ {priceHandler(price)}</div>
          <div className="description">
            {description.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          <button className="btn add-to-cart" onClick={() => add(id)}>
            Add to cart <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
