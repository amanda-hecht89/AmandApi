const { Router } = require('express');
const { Amanda } = require('../models/Amandas');

module.exports = Router().get('/:id', async (req, res) => {
  const amanda = await Amanda.getById(req.params.id);
  res.json(amanda);
})
  .get('/', async (req, res) => {
    const amandas = await Amanda.getAll();
    const ids = amandas.map((amanda) => ({ id:amanda.id, name: amanda.lastName }));
    res.json(ids);
  });
