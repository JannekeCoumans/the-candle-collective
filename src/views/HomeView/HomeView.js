import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLeaf,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { products, ProductCard } from "../../config/C4";

const scrollTo = (ref) =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

const HomeView = () => {
  const scrollToRef = useRef(null);
  const scrollToElement = () => {
    scrollTo(scrollToRef);
  };
  return (
    <div className="homeView">
      <header className="homeView__header">
        <div className="homeView__header--image" />
        <div className="homeView__header--text">
          <h1>
            Creating{" "}
            <span className="background background__lightgreen">warmth</span>
            <br />
            and <span className="background background__pink">comfort</span>
            <br />
            for every <span className="background background__green">home</span>
          </h1>
          <Link to="/shop" className="btn btn__darkgreen">
            Shop now
          </Link>
        </div>
        <div className="homeView__header--icon" onClick={scrollToElement}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>
      <div ref={scrollToRef} className="homeView__usp">
        <h1>
          Lorem ipsum <span className="underline underline__pink">dolor</span>{" "}
          sit amet,{" "}
          <br />
          <span className="underline underline__lightgreen">
            consectetur
          </span>{" "}
          adipiscing.
        </h1>
        <div className="homeView__usp--items">
          <div className="item item-shipping">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <p>
              <span>Free shipping</span> on all
              <br /> orders over €30,-
            </p>
          </div>
          <div className="item item-rating">
            <div className="icon">
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <p>
              Average rating of
              <br />
              <span>4.5 stars</span>
            </p>
          </div>
          <div className="item item-planet">
            <div className="icon">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <p>
              We only make <br />
              <span>planet-friendly</span> candles
            </p>
          </div>
        </div>
      </div>
      {/* <BYOCBreakdown />
        <div className="homeView__banner">
          <div className="homeView__banner--section">
            <Image
              src="products/fresh_cotton.jpg"
              alt="The Candle Collective's candles have maximum duration"
            />
            <div className="homeView__banner--section--text">
              <h1>Maximum Duration</h1>
              <p>
                All of our candles last for up to 50 hours. And since we’ve done
                our best to make them as stylish as possible, when they’re
                finished you can use them to hold flowers, pencils or brushes.
              </p>
              <Link to="/shop" className="btn btn__coral">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="homeView__banner--section">
            <div className="homeView__banner--section--text">
              <h1>Build your own candle</h1>
              <p>
                Know exactly what scents you want in a candle, but can’t seem to
                find it in our shop? No need to worry! You can now build ánd
                design your own candle? If you’re fully content with it, submit
                it and we might add your very own candle to our collection!
              </p>
              <Link to="/shop" className="btn btn__coral">
                let’s start building
              </Link>
            </div>
            <Image
              src="products/lemon_pie.jpg"
              alt="The Candle Collective's candles have maximum duration"
            />
          </div>
        </div> */}
      <div className="homeView__popular">
        <h1>
          Most <span className="underline underline__hotpink">popular</span>{" "}
          items
        </h1>
        <div className="homeView__popular--grid">
          {products.slice(0,4).map((item, i) => {
            return <ProductCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
