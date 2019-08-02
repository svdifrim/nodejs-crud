const inquirer = require("inquirer");
const commander = require("commander");
const app = new commander.Command();

const uuidv4 = require("uuid/v4");

const writeToFile = require("./writeFile");
const deleteJsonFile = require("./deleteFile");
const editJsonFile = require("./editProduct");

const addProduct = product => {
  product.id = uuidv4();

  writeToFile(product);
};

const removeProduct = product => {
  deleteJsonFile(product);
};

const editProduct = product => {
  editJsonFile(product);
};

const products = [
  {
    type: "input",
    name: "product",
    message: "Name of the product"
  },
  {
    type: "input",
    name: "description",
    message: "Product description"
  },

  {
    type: "input",
    name: "price",
    message: "Price of the product"
  }
];

const products2 = [
  {
    type: "input",
    name: "id",
    confirm: "Enter id"
  }
];

const products3 = [
  {
    type: "input",
    name: "id",
    confirm: "Enter Id"
  },
  {
    type: "input",
    name: "product",
    message: "Name of the product"
  },
  {
    type: "input",
    name: "description",
    message: "Product description"
  },

  {
    type: "input",
    name: "price",
    message: "Price of the product"
  }
];

app
  .command("Add a product")
  .alias("a")
  .action(() => {
    inquirer.prompt(products).then(product => {
      addProduct(product);
    });
  });

app
  .command("Remove a product")
  .alias("d")
  .action(() => {
    inquirer.prompt(products2).then(product => {
      removeProduct(product);
    });
  });
app
  .command("Edit a product")
  .alias("e")
  .action(() => {
    inquirer.prompt(products3).then(product => {
      editProduct(product);
    });
  });

app.parse(process.argv);
