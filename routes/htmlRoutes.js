var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/profiles/:zips", function(req, res) {
    db.Sitters.findAll({ where: { zip: req.params.zips } }).then(function(dbSitters) {
      res.render("profiles", {
        msg: "with the zip code requested",
        sitters: dbSitters
      });
    });
  });

  app.get("/customer", function(req, res) {
    db.Example.findAll({}).then(function(dbExample) {
      res.render("customers", {
        example: dbExample
      });
    });
  });



  app.get("/profiles", function(req, res) {
    db.Sitters.findAll({}).then(function(dbSitters) {
      res.render("profiles", {
        sitters: dbSitters
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
