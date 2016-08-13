var request = require('supertest');

describe('loading express', function () {
    var server;

    beforeEach(function () {
        server = require('../server')();
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to /api', function testSlash(done) {
        request(server)
            .get('/api/login')
            .expect(200, done);
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});

