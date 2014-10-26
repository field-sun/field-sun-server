var bookshelf = require('../../config/db');
var matches = require('../cards/cards.model');

var Companies = bookshelf.Model.extend({
  tableName: 'companies',
  matches: function() {
    return this.hasMany(matches, 'company_id');
  },
});

module.exports = Companies;