var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  fs.readFile("./public/json/libros.json", (error, datos) => {
    try {
      console.log(datos);
      res.render("index", { datos: JSON.parse(datos) });
    } catch (error) {
      res.write("error de lectura");
    }
  });
});

module.exports = router;
