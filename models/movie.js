const sequelize = require("sequelize");
const database = require("../db/db");
const Movie = database.define(
  "movie",
  {
    id_movie: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
      
    },

    title: {
      type: sequelize.STRING,
      allowNull: false
    },
    category: {
      type: sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: sequelize.STRING,
      allowNull: false
    },
    sinopse: {
      type: sequelize.STRING,
      allowNull: false
    },

    link: {
      type: sequelize.STRING,
      allowNull: false
    }


  },
  {
    database,
    modelname: "movie",
    tableName: "movies",
  }
);

module.exports = Movie;
