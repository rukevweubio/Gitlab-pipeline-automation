// server.test.js
const request = require('supertest');
const server = require('./server'); // Import your Express app

// Close the server after all tests are done
afterAll((done) => {
    server.close(done);
});

describe('Express Server', () => {
    test('GET / should return index.html', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/text\/html/);
        expect(response.text).toContain('<title>Road Runner Shooter</title>');
    });

    test('GET /style.css should return CSS file', async () => {
        const response = await request(server).get('/style.css');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/text\/css/);
        // You might want to add more specific checks for CSS content
    });

    test('GET /game.js should return JavaScript file', async () => {
        const response = await request(server).get('/game.js');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/application\/javascript/);
        // You might want to add more specific checks for JS content
    });

    test('GET /nonexistent-route should return 404', async () => {
        const response = await request(server).get('/nonexistent-route');
        expect(response.statusCode).toBe(404);
    });
});
