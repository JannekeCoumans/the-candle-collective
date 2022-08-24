import React from "react";
import { Link } from "react-router-dom";

const BYOCBreakdown = () => {
  return (
    <div className="byocBreakdown">
      <div className="byocBreakdown__title">
        <h1>Build your own Candle</h1>
        <p>
          The perfect gift for yourself or someone close to you. Don't wait any
          longer! You can choose a scent or mix-and-match multiple scents and
          design the label and packaging!
        </p>
      </div>
      <div className="byocBreakdown__item">
        <h3>Design your package</h3>
        <p>
          You can design your own package the way your heart desires. You can
          also choose to use one of our many templates!
        </p>
        <div className="line" />
      </div>
      <div className="byocBreakdown__item">
        <h3>Choose your scents</h3>
        <p>
          You can choose from a number of scents. Not a magician with scents? No
          worries, we've got you. We've also paired a few scents together to
          pick from.
        </p>
        <div className="line" />
      </div>
      <div className="byocBreakdown__item">
        <h3>Design the candle</h3>
        <p>
          You can design the candle the way you want. You can add a label you’ve
          designed yourself or pick one of our predesigned templates. You can
          also choose the color and shape of the jar!
        </p>
        <div className="line" />
      </div>
      <Link to="build-your-own-candle" className="btn">
        Start building!
      </Link>
    </div>
  );
};

export default BYOCBreakdown;
