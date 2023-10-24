const request = require('supertest');

// Import Express app
const app = require('./server');

describe('User Registration and Login Endpoints', () => {
    // Variables to store user credentials
    let userCredentials = {
        email: 'rhoda@gmail.com',
        password: 'excellence',
        role: 'Student'
    };

    // Variables to store login credentials
    let loginCredentials = {
        email: 'rhoda@gmail.com',
        password: 'excellence'
    };

    // Variable to store the authentication token
    let authToken;


    // Test user registration
    it('should register a new user', async (done) => {
        const response = await request(app)
            .post('/api/auth/register')
            .send(userCredentials);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('user');
        done();
    });

    // Test user login
    it('should log in an existing user', async (done) => {
        const response = await request(app)
            .post('/api/auth/login')
            .send(loginCredentials);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');

        // Store the authentication token for future requests
        authToken = response.body.token;
        done();
    });


    // Test invalid login
    it('should return an error for invalid login', async (done) => {
        const invalidCredentials = {
            username: 'invaliduser@gmail.com',
            password: 'invalidpassword',
        };
        const response = await request(app)
            .post('/api/auth/login')
            .send(invalidCredentials);

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Invalid Email/Password');

        done();
    });
});
