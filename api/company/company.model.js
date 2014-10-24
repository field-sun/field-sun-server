var bookshelf = require('../../config/db');

var Companies = bookshelf.Model.extend({
  tableName: 'companies'
});

module.exports = Companies;