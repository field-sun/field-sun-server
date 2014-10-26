var bookshelf = require('../../config/db');

var User = bookshelf.Model.extend({
  tableName: 'users',
  matches: function() {
    return this.belongsTo(matches);
  }
});

module.exports = User;