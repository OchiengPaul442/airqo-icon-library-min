'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/client.js');
} else {
  module.exports = require('./dist/client.development.js');
}
