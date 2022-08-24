const priceHandler = (price) => {
    if (price) {
      let dividedPrice = parseInt(price) / 100;
  
      const countDecimals = (value) => {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
      };
  
      let updatedPrice;
  
      if (countDecimals(dividedPrice) !== 0) {
        updatedPrice = dividedPrice.toString().replace(".", ",");
        updatedPrice = updatedPrice.toString();
        if (countDecimals(dividedPrice) === 1) {
          updatedPrice = updatedPrice + "0";
        }
      } else {
        updatedPrice = dividedPrice.toString();
        updatedPrice = updatedPrice + ",-";
      }
  
      return updatedPrice;
    }
  };
  
  export default priceHandler;  