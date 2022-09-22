const moment = require("moment")


const routeController = {
    home: function (req, res) {
        response.send("Hello World")
    },
    time: function (req, res) {
        const text = `The time is: ${moment().format('h:mm:ss a')}`
        res.send(text)
    },
    date: function (req, res) {
        const text = `The time is: ${moment().format('DD/MM/YYYY')}`
        res.send(text)
    }
}

module.exports = routeController