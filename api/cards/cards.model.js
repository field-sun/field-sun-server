var bookshelf = require('../../config/db');

var Cards = bookshelf.Model.extend({
  tableName: 'matches',
});

module.exports = Cards;