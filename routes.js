const routeController = require("./controllers/routeController")
module.exports = function (app) {

    app.get("/", routeController.home)

    app.get("/time", routeController.time)

    app.get("/date", routeController.date)

    app.get("/hello", routeController.getHello)

    app.post("/hello", routeController.postHello)
}