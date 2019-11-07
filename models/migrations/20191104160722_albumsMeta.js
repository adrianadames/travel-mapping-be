
exports.up = function(knex) {

  // albumsMeta Table
  return knex.schema.createTable('albumsMeta', table => {

    // albumMeta_id
    table.bigInteger('albumMeta_id').primary();

    // album_id
    table.bigInteger('album_id')
      .notNullable()
      .references('album_id')
      .inTable('albums')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    // name
    table.string('name', 255)
      .notNullable();

    // value
    table.text('value', 'longtext')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('albumsMeta');
};