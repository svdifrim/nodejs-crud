const fs = require("fs");

module.exports = function deleteProductFile(newProduct) {
  fs.readFile(`./products/products.json`, (err, data) => {
    let dataFromJson = JSON.parse(data);
    console.log(newProduct);
    dataFromJson.products = dataFromJson.products.map(product => {
      if (product.id === newProduct.id) {
        product = {
          ...newProduct
        };
      }
      return product;
    });

    const json = JSON.stringify(dataFromJson);
    fs.writeFile(`./products/products.json`, json, err => {
      if (err) throw err;
    });
  });
};
