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
  it('/:id should return a single amanda', async () => {
    const res = await request(app).get('/amandas/2');
    expect(res.body).toEqual({
      id: '2',
      lastName: 'Bynes',
      age: 36,
      year: 1986,
      imageUrl: 'https://en.wikipedia.org/wiki/Amanda_Bynes',
      famous: 'Actress: The Amanda Show',
      alive: true
    });
  });
});
afterAll(() => {
  pool.end();
});
