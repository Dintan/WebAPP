const apiController = {

    home: () => {
        return "API home"
    },

    getRecords: async () => {
        const records = [

            { id: 0, name: "Record 1" },
            { id: 2, name: "Record 2" },
            { id: 3, name: "Record 3" },

        ]
        return records
    }

}

module.exports = apiController