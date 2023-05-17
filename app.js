const express = require("express");
const app = express();
const database = require("./db/db");

async function startServer() {
  try {
    await database.sync();
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  } catch (error) {
    console.log("Failed to synchronize the database:", error);
  }
}

startServer();
