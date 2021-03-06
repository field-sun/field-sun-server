var knex = require('./knex')

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(t) {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.string('location').notNullable();
      t.string('languages').notNullable();
      t.string('education').notNullable();
      t.string('linkedin_token').notNullable();
      t.string('github_token').notNullable();
      t.string('auth_token').notNullable();
    }).then(function() {
      console.log('created users table.');
    });
  } else {
    console.log('users table already exists.');
  }
});

knex.schema.hasTable('companies').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('companies', function(t) {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.string('location').notNullable();
      t.string('imageURL').notNullable();
    }).then(function() {
      console.log('created companies table.');
    });
  } else {
    console.log('companies table already exists.');
  }
});

knex.schema.hasTable('company_users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('company_users', function(t) {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.string('linkedin_token').notNullable();
      t.string('github_token').notNullable();
      t.string('auth_token').notNullable();
    }).then(function() {
      console.log('created company_users table.');
    });
  } else {
    console.log('company_users table already exists.');
  }
});

knex.schema.hasTable('matches').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('matches', function(t) {
      t.increments('id').primary();
      t.integer('users_id').references('id').inTable('users');
      t.integer('company_id').references('id').inTable('companies');
      t.integer('company_users_id').references('id').inTable(
        'company_users');
      t.boolean('interest');
    }).then(function() {
      console.log('created matches table.');
    });
  } else {
    console.log('matches table already exists.');
  }
});

var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;