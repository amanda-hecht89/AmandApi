const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// const { amandas } = require('../models/Amanda');

describe('amandas routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/amandas should return a list of amandas', async() => {
    const res = await request(app).get('/amandas');
    expect(res.body.length).toEqual(8);
     
  });
});
afterAll(() => {
  pool.end();
});
