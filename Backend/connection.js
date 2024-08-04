const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://deeptasv:vinithashibu@cluster0.q0emkps.mongodb.net/blogAppDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
