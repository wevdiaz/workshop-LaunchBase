const express = require("express"); 
const nunjucks = require("nunjucks");

const routes = require("./routes");

const servidor = express();

servidor.use(express.urlencoded({ extended: true }));
servidor.use(express.static("public"));
servidor.use(routes);

servidor.set("view engine", "njk");

nunjucks.configure("views", { 
    express: servidor,
    noCache: true
});

servidor.listen(5000, function() {             
    console.log("Servidor está funcionando")
});
