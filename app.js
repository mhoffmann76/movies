const database = require("./db/db");
const express = require("express");
const app = express();

const Movie = require("./models/movie");
const MovieRoutes = require("./routes/Routes");
const handblebars = require("express-handlebars");
const VideosControllers = require("./controllers/ControllerMovie");
app.engine("handlebars", handblebars.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));
app.use("/", MovieRoutes);




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
