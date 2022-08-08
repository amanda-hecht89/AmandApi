const pool = require('../utils/pool');


module.exports = class Amanda {
  id; lastName; age; year; imageUrl; famous; alive;

  constructor(row) {
    this.id = row.id;
    this.lastName = row.last_name;
    this.age = row.age;
    this.year = row.year;
    this.imageUrl = row.image_url;
    this.famous = row.famous;
    this.alive = row.alive;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM amandas;');
    return rows.map((row) => new Amanda(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM amandas WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Amanda(rows[0]);
  }
};
