let APIHandler;

export default APIHandler = {
  makeRequest: (request, settings) =>
    fetch(request, settings)
      .then((results) => {
        return results.json();
      })
      .catch((err) => {
        console.log(err);
      }),

  getProducts: () => {
    const request = "https://fakestoreapi.com/products";
    return APIHandler.makeRequest(request);
  },
};
