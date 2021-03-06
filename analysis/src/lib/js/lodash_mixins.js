'use strict';

_.mixin({
  compactObject: function(o) {
    _.each(o, function(v, k) {
      if (!v && v !== '') {
        delete o[k];
      }
    });
    return o;
  }
});