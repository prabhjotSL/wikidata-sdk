// Generated by CoffeeScript 1.9.3
(function() {
  var buildUrl, isPlainObject, wd_;

  wd_ = require('../helpers/helpers');

  buildUrl = require('../utils/build_url');

  isPlainObject = require('../utils/utils').isPlainObject;

  module.exports = function(search, language, limit, format) {
    var ref;
    if (isPlainObject(search)) {
      ref = search, search = ref.search, language = ref.language, limit = ref.limit, format = ref.format;
    }
    if (!((search != null ? search.length : void 0) > 0)) {
      throw new Error("search can't be empty");
    }
    language || (language = 'en');
    limit || (limit = '20');
    format || (format = '20');
    return buildUrl('wikidata', {
      action: 'wbsearchentities',
      search: search,
      language: language,
      limit: limit,
      format: format
    });
  };

}).call(this);
