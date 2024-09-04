const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const producteRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", producteRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://litansarkar95:HWubpUFnI76S9Eii@backenddb.lufcp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Fail!");
  });
