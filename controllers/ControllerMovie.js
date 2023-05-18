const Movie = require("../models/movie");
module.exports = class MovieController {
  static addMovie(req, res) {
    res.render("movies/cadastrar");
  }

  static async MovieCreate(req, res) {
    try {
      const { titulo, category, gender, sinopse, link } = req.body;

      if (!titulo || !category || !gender || !sinopse || !link)  {
        return res.status(400).send("Favor preencher todos os campos!!");
      }

      const movie = {
        title: req.body.titulo,
        category: req.body.category,
        gender: req.body.gender,
        sinopse: req.body.sinopse,
        link: req.body.link,
      };

      await Movie.create(movie);
      res.send("Cadastro realizado com sucesso!");
    } catch (error) {
      res.status(500).send("Internal server Error");
    }
  }

  static async listMovies(req, res) {
    try {
      const movie = await Movie.findAll({ raw: true });
      res.render("movies/listar", { movie });
    } catch (error) {
      res.status(500).send("Internal sever Error");
    }
  }

  static async UpdateMovie(req, res) {
    try {
      const id_movie = req.params.id_movie;
      const movie = await Movie.findOne({
        where: { id_movie: id_movie },
        raw: true,
      });
      res.render("movies/update", { movie });
    } catch (error) {
      res.status(500).send("Internal sever Error");
    }
  }
  static async MovieUpdate(req, res) {
    try {
      const id_movie = req.body.id_movie;
      const movie = {
        title: req.body.titulo,
        category: req.body.category,
        gender: req.body.gender,
        link_sinopse: req.body.sinopse,
      };
      await Movie.update(movie, { where: { id_movie: id_movie } });
      res.redirect("/");
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }

  static async deleteMovies(req, res) {
    try {
      const id_movie = req.body.id_movie;
      await Movie.destroy({ where: { id_movie: id_movie } });
      res.redirect("/");
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
};
