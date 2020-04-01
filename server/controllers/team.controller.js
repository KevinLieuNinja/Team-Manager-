const { Team } = require("../models/team.models")

module.exports.index = (req, res) => {
    res.json({
        message: "Hello Waldo"
    });
}
module.exports.getAllTeam =(request, response) => {
    Team.find({})
        .then(team => response.json(team))
        .catch(err => response(err))
}
module.exports.createTeam = (request, response) => {
    const { playerName, perferPosition } = request.body;
    Team.create(request.body)
        .then(team => response.json(team))
        .catch(err => response.status(400).json(err))
}
module.exports.updateTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true, new:true})
        .then(updateTeam => response.json(updateTeam))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteAnExistingTeam = (req, res) => {
    Team.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};