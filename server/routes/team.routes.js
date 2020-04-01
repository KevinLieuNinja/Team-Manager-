const TeamController = require("../controllers/team.controller");

module.exports = function(app){
    app.get('/api', TeamController.index);
    app.get('/api/team', TeamController.getAllTeam);
    app.post('/api/team', TeamController.createTeam);
    app.put('/api/team/:id', TeamController.updateTeam);
    app.delete('/api/team/delete/:id', TeamController.deleteAnExistingTeam)
}