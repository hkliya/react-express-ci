function makeServer() {
    var express = require('express');
    var app = express();

    app.use(express.static('./public'));
    app.use(express.static('./views'));

    app.get('/api/login', function (req, res) {
        res.send("success");
    });

    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('Example app listening at port %s', port);
    });

    return server;
}

module.exports = makeServer;

