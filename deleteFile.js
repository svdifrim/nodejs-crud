const fs = require("fs");

module.exports = function deleteProductFile(productId) {
  fs.readFile(`./products/products.json`, (err, data) => {
    let dataFromJson = JSON.parse(data);

    dataFromJson.products = dataFromJson.products.filter(item => {
      return item.id !== productId.id;
    });

    const json = JSON.stringify(dataFromJson);
    fs.writeFile(`./products/products.json`, json, err => {
      if (err) throw err;
    });
  });
};
