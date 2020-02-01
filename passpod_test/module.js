const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.PASSPOD_SEARCH_URL);

const getSearch = (key) => api.get('')
.set('Content-type', 'application/json')
.set('Accept', 'application/json')
.query({keyword: key});

module.exports = {
    getSearch,
}