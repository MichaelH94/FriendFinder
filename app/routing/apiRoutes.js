var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var input = req.body;
        var score = input.scores;
        var name = ""
        var img = ""
        var topDiff = 40;

        for(x = 0; x < friends.length; x++) {
            var diff = 0;
            for(y = 0; y < score.length; y++) {
                diff += Math.abs(friends[x].scores[y] - score[y])
            }

            if(diff < topDiff) {
                topDiff = diff;
                name = friends[x].name;
                img = friends[x].photo;
            }
        }

        friends.push(input);

        res.json({status: 'OK', name: name, photo: img})
    });
};