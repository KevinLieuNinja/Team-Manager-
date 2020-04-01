const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teamsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then (() =>console.log('made connection to Database'))
    .catch (err => console.log("fucked up database connection", err));
