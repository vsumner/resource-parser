
/**
 * Parses urls to generate embed code.
 *
 * @param {Object} config
 */
function ResourceParser( config ){

  this._match;

  this._providers = require('Providers/Providers.js');

  this._config = typeof config === 'object' ? config : {};

}

module.exports = ResourceParser;
