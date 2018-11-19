var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {

    // Friend list
    app.get('/api/friends',
        function (req, res) {
            res.json(friends);
        }
    );

    // Add friend
    app.post('/api/friends',
        function(req, res){

        }
    );

};