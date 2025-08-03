// // // Starting of formation or making of api's;

const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server running at 5000");
  // // Output on Terminal as :- Server running at 5000
});

// // // USING Post method to make an api's with the help of POSTMAN;

app.post("/post", async (request, response) => {
  // // // This is the basic structure of making an apies;
  console.log(request.body);
});
