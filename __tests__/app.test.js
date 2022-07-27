const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { amandas } = require('../data/amandas');

describe('amandas routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/amandas should return a list of amandas', async() => {
    const res = await request(app).get('amandas');
    const expected = amandas.map((amanda) => {
      return { id: amanda.id, name: amanda.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
