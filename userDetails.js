// // // Starting of making the schema or blue print how our data look like;

const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    userName: String,
    emailId: String,
    phoneNumber: String,
  },
  {
    collection: "userInformation",
  }
);

mongoose.model("userInformation", userDetailsSchema);
// // // Now, this Schema is going to develop or store in mongoDB server;
