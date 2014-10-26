var bookshelf = require('../../config/db');
var company = require('../company/company.model');

var Cards = bookshelf.Model.extend({
  tableName: 'matches'
});

module.exports = Cards;