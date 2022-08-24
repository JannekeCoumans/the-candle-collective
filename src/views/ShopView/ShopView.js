import React from "react";
import { ProductCard, products } from "../../config/C4";

const ShopView = () => {
  console.log(products);
  return (
    <div className="shopView">
      <h1>
        All of our{" "}
        <span className="underline underline__lightgreen">candles</span> in one
        place
      </h1>
      <div className="shopView__products">
        {products.map((item, i) => {
          return <ProductCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopView;
