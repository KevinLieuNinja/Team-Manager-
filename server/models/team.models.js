const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    playerName:{
        type: String,
        require:[true, 'you fucked up'],
        minlength: [2, "Use a better Name"]
    },
    perferPosition:{
        type: String,
        require: [true, 'you fucked up'],
        minlength: [3, "Not enough letters"]
    }
}, {timestamps: true });
module.exports.Team = mongoose.model("Team", TeamSchema)