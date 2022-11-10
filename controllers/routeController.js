const moment = require("moment")

const routeController = {
    home: function (req, res) {
        res.send("Home")
    },
    time: function (req, res) {
        const text = `The time is: ${moment().format('h:mm:ss a')}`
        res.send(text)
    },
    date: function (req, res) {
        const text = `The time is: ${moment().format('DD/MM/YYYY')}`
        res.send(text)
    },

    getHello: function (req, res) {
        console.log(req.body);

        let name = "World"

        if (req.body.name) {
            name = req.body.name
        }

        if (req.query.name) {
            name = req.query.name
        }

        const text = "Hello " + name
        res.send(text)

    },

    postHello: function (req, res) {
        let name = "World"

        if (req.body) {
            name = req.body.name
        }

        const text = "Hello " + name
        res.send(text)
    }

}


module.exports = routeController
