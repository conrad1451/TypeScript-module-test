import express from "express";
// const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello CodeSandbox!");
// });

// app.listen(port, () => {
//   console.log(`Sandbox listening on port ${port}`);
// });

// const express = require("express");

// Following line is where NodeJS server is coupled to the HTML
const moduleToFetch = require("./sampleData");
const getTheData = moduleToFetch.getTheData;
// const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
// const port = 8000;

const app = express();

app.get("/", async (req, res) => {
  //   res.redirect("/users");
  //   res.end();
  // });

  // // CHQ: Reads all data entries from the database (Read)
  // app.get("/users", async (req, res) => {
  const users = await getTheData();
  // const users = getTheData();
  res.json(users);
});

// app.listen(port, console.log(`Server started on ${port}`));
app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
