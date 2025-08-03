// // // Starting of formation or making of api's;

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoURL =
  "mongodb+srv://shivas2710cool00:<db_password>@cluster0.blsv8oz.mongodb.net/";
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running at 5000");
  // // Output on Terminal as :- Server running at 5000
});

// // // USING Post method to make an api's with the help of POSTMAN;

app.post("/post", async (request, response) => {
  // // // This is the basic structure of making an apies;
  console.log(request.body);
  // // // Now, open the postman and set it to POSTMAN;
  // // // Set the POST =>  http://localhost:5000/post
  // // // Set the Headers =>  Key => Content-Type and Value => application/json
  // // // Set the Body => row
  // // // Write the data on body as => {
  // // //     "username" : "shiva khateek chouhan"
  // // // }
  // // // Hit the Send button of POSTMAN;
  // // // We will get error i.e.,=>
  // // //     <!DOCTYPE html>
  // // // <html lang="en">

  // // // <head>
  // // // 	<meta charset="utf-8">
  // // // 	<title>Error</title>
  // // // </head>

  // // // <body>
  // // // 	<pre>Cannot POST /post</pre>
  // // // </body>

  // // // </html>
  // // // We will get Output on Terminal as => Undefined
  // // // To resolve this error use => app.use(express.json());
  // // // We will get Output on Terminal as => { username: 'shiva khateek chouhan' }
  const { username } = request.body; // Destructuring of data;
  //   if (username === "shiva khateek chouhan") {
  //     response.send({ status: "ok" });
  //     // // // We will get Output on POSTMAN as server =>
  //     // // // {
  //     // // //     "status": "ok"
  //     // // // }
  //   }
  // // // Handling the errors with the help of tryCatch block;
  // // // Here, we have written the wrong spelling of username and catching the error;
  try {
    if (username === "shiva khateek chouhan") {
      response.send({ status: "ok" });
    } else {
      response.send({ status: "data not found" });
    }
    // // // Open the terminal first clear and run the command first i.e, node app.js
    // // // Then, Open the POSTMAN and post the same username data again we will get status as error;
  } catch (error) {
    response.send({ status: "something went wrong try again later" });
    // // // {
    // // //     "status": "something went wrong try again later"
    // // // }
  }
});
