(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
}(this, (function (exports) { 'use strict';

  const value = true;

  const prop="value";

  function log(something) {
      console.log(something);
  }

  exports.log = log;
  exports.prop = prop;
  exports.value = value;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=utils.js.map
