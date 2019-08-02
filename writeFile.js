const fs = require("fs");

module.exports = function writeProductFile(answers) {
  fs.readFile(`./products/products.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let products = {
        products: []
      };
      products = JSON.parse(data);
      products.products = [...products.products, answers];
      const json = JSON.stringify(products);

      fs.writeFile(`./products/products.json`, json, err => {
        if (err) throw err;
        console.log("Data written to file");
      });
    }
  });

  // fs.writeFile(`./products/${fileName}.json`, jsonAnswers, err => {});
};
